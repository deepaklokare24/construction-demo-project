import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
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

const GET_FINANCIAL_DATA = gql`
  query GetFinancialData {
    projects {
      id
      name
      budget
      status
      expenses {
        id
        amount
        category
        date
      }
    }
  }
`;

const COLORS = ['#059669', '#10B981', '#34D399', '#6EE7B7'];

export default function Financials() {
  const { loading, error, data } = useQuery(GET_FINANCIAL_DATA);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-red-500 p-4">
      Error: {error.message}
    </div>
  );

  const projects = data.projects;

  // Calculate total budget and expenses
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const totalExpenses = projects.reduce(
    (sum, project) => sum + project.expenses.reduce((expSum, exp) => expSum + exp.amount, 0),
    0
  );

  // Calculate expenses by category
  const expensesByCategory = projects.reduce((categories, project) => {
    project.expenses.forEach((expense) => {
      categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
    });
    return categories;
  }, {});

  const categoryData = Object.entries(expensesByCategory).map(([name, value]) => ({
    name,
    value,
  }));

  // Calculate monthly expenses
  const monthlyExpenses = projects.reduce((months, project) => {
    project.expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      months[monthKey] = (months[monthKey] || 0) + expense.amount;
    });
    return months;
  }, {});

  const monthlyData = Object.entries(monthlyExpenses)
    .sort()
    .map(([month, amount]) => ({
      month,
      amount,
    }));

  // Project-wise budget vs expenses
  const projectData = projects.map((project) => ({
    name: project.name,
    budget: project.budget,
    expenses: project.expenses.reduce((sum, exp) => sum + exp.amount, 0),
  }));

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
            <dt className="text-sm font-medium text-gray-500 truncate">Total Expenses</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${totalExpenses.toLocaleString()}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Remaining Budget</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${(totalBudget - totalExpenses).toLocaleString()}
            </dd>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Budget vs Expenses by Project */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Budget vs Expenses by Project</h2>
          <div className="h-80">
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
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" fill="#059669" name="Budget" />
                <Bar dataKey="expenses" fill="#34d399" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expenses by Category */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Expenses by Category</h2>
          <div className="h-80">
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
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Expenses Trend */}
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Expenses Trend</h2>
          <div className="h-80">
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
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#059669"
                  activeDot={{ r: 8 }}
                  name="Expenses"
                />
              </LineChart>
            </ResponsiveContainer>
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
                    Expenses
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
                  const remaining = project.budget - project.expenses;
                  const usage = (project.expenses / project.budget) * 100;
                  
                  return (
                    <tr key={project.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${project.budget.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${project.expenses.toLocaleString()}
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