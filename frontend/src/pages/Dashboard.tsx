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
} from 'recharts';

const GET_DASHBOARD_DATA = gql`
  query GetDashboardData {
    projects {
      id
      name
      status
      startDate
      endDate
      budget
      expenses {
        amount
      }
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_DASHBOARD_DATA);

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

  const projects = data?.projects || [];
  
  const projectStats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'IN_PROGRESS').length,
    completed: projects.filter(p => p.status === 'COMPLETED').length,
  };

  const financialData = projects.map(project => ({
    name: project.name,
    budget: project.budget,
    expenses: project.expenses.reduce((sum, exp) => sum + exp.amount, 0),
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">{projectStats.total}</dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Active Projects</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">{projectStats.active}</dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Completed Projects</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">{projectStats.completed}</dd>
          </div>
        </div>
      </div>

      {/* Financial Overview Chart */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Financial Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={financialData}
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
              <Bar dataKey="budget" fill="#059669" name="Budget" />
              <Bar dataKey="expenses" fill="#34d399" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {projects.slice(0, 5).map((project) => (
              <li key={project.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-primary-600 truncate">{project.name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <span className={`
                      px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${project.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    `}>
                      {project.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 