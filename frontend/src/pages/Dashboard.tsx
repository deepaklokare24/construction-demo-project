import { useQuery } from '@apollo/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { GET_PROJECTS, GET_ALL_PROJECT_FINANCIALS } from '../graphql/queries';
import { Project, Financial, ProjectStatus } from '../types/schema';

interface ProjectsData {
  projects: Project[];
}

interface AllFinancialsData {
  allProjectFinancials: Financial[];
}

export default function Dashboard() {
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

  const projects = projectsData?.projects || [];
  const financials = financialsData?.allProjectFinancials || [];
  
  const projectStats = {
    total: projects.length,
    active: projects.filter(p => p.status === ProjectStatus.IN_PROGRESS).length,
    completed: projects.filter(p => p.status === ProjectStatus.COMPLETED).length,
  };

  // Calculate financial data for each project
  const financialData = projects.map(project => {
    const financial = financials.find(f => f.projectId === project.id);
    return {
      name: project.name,
      budget: financial?.budget || 0,
      expenditure: financial?.expenditure || 0,
    };
  }).filter(data => data.budget > 0 || data.expenditure > 0);

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
          {financialData.length > 0 ? (
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
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
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

      {/* Recent Projects */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {projects.slice(0, 5).map((project) => {
              const projectFinancial = financials.find(f => f.projectId === project.id);
              const budgetUtilization = projectFinancial && projectFinancial.budget > 0
                ? (projectFinancial.expenditure / projectFinancial.budget) * 100 
                : 0;

              return (
                <li key={project.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-primary-600 truncate">{project.name}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(project.startDate).toLocaleDateString()} - {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'TBD'}
                      </p>
                      <p className="text-sm text-gray-500">Location: {project.location}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex flex-col items-end">
                      <span className={`
                        px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${project.status === ProjectStatus.COMPLETED ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {project.status.replace('_', ' ')}
                      </span>
                      {projectFinancial && projectFinancial.budget > 0 && (
                        <p className="mt-1 text-sm text-gray-500">
                          Budget Utilization: {budgetUtilization.toFixed(1)}%
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
} 