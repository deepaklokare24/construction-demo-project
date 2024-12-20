import { useQuery } from '@apollo/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { GET_PROJECTS, GET_ALL_PROJECT_FINANCIALS } from '../graphql/queries';
import { Project, Financial } from '../types/schema';

interface ProjectsData {
  projects: Project[];
}

interface AllFinancialsData {
  allProjectFinancials: Financial[];
}

const COLORS = ['#059669', '#10B981', '#34D399', '#6EE7B7'];

export default function Financials() {
  const { loading: projectsLoading, error: projectsError, data: projectsData } = 
    useQuery<ProjectsData>(GET_PROJECTS);

  const { loading: financialsLoading, error: financialsError, data: financialsData } = 
    useQuery<AllFinancialsData>(GET_ALL_PROJECT_FINANCIALS);

  if (projectsLoading || financialsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (projectsError || financialsError) {
    return (
      <div className="text-red-500 p-4">
        Error: {projectsError?.message || financialsError?.message}
      </div>
    );
  }

  const projects = projectsData!.projects;
  const financials = financialsData?.allProjectFinancials || [];

  // Calculate total budget and expenditure
  const totalBudget = financials.reduce((sum, financial) => sum + financial.budget, 0);
  const totalExpenditure = financials.reduce((sum, financial) => sum + financial.expenditure, 0);

  // Calculate costs by category
  const costsByCategory = financials.reduce((categories, financial) => {
    (financial.costTracking || []).forEach((cost) => {
      categories[cost.category] = (categories[cost.category] || 0) + cost.amount;
    });
    return categories;
  }, {} as Record<string, number>);

  const categoryData = Object.entries(costsByCategory).map(([name, value]) => ({
    name,
    value,
  }));

  // Calculate monthly costs
  const monthlyCosts = financials.reduce((months, financial) => {
    (financial.costTracking || []).forEach((cost) => {
      const date = new Date(cost.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      months[monthKey] = (months[monthKey] || 0) + cost.amount;
    });
    return months;
  }, {} as Record<string, number>);

  const monthlyData = Object.entries(monthlyCosts)
    .sort()
    .map(([month, amount]) => ({
      month,
      amount,
    }));

  // Project-wise budget vs expenditure
  const projectData = projects.map((project) => {
    const financial = financials.find(f => f.projectId === project.id);
    return {
      name: project.name,
      budget: financial?.budget || 0,
      expenditure: financial?.expenditure || 0,
    };
  }).filter(data => data.budget > 0 || data.expenditure > 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Financial Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Budget</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${totalBudget.toLocaleString()}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Expenditure</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${totalExpenditure.toLocaleString()}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Remaining Budget</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${(totalBudget - totalExpenditure).toLocaleString()}
            </dd>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Budget vs Expenditure by Project */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Budget vs Expenditure by Project</h2>
          <div className="h-80">
            {projectData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={projectData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="budget" fill="#059669" name="Budget" />
                  <Bar dataKey="expenditure" fill="#34d399" name="Expenditure" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No financial data available
              </div>
            )}
          </div>
        </div>

        {/* Costs by Category */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Costs by Category</h2>
          <div className="h-80">
            {categoryData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No cost tracking data available
              </div>
            )}
          </div>
        </div>

        {/* Monthly Costs Trend */}
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Costs Trend</h2>
          <div className="h-80">
            {monthlyData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#059669"
                    activeDot={{ r: 8 }}
                    name="Costs"
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No cost tracking data available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Financial Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Project Financial Details</h2>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expenditure
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remaining
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projectData.map((project) => {
                  const remaining = project.budget - project.expenditure;
                  const usage = project.budget > 0 ? (project.expenditure / project.budget) * 100 : 0;
                  
                  return (
                    <tr key={project.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${project.budget.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${project.expenditure.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${remaining.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-1 w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                usage > 90 ? 'bg-red-500' : usage > 70 ? 'bg-yellow-500' : 'bg-primary-500'
                              }`}
                              style={{ width: `${Math.min(usage, 100)}%` }}
                            />
                          </div>
                          <span className="ml-2 text-sm text-gray-500">{usage.toFixed(1)}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 