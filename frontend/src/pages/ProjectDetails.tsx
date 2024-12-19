import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  CurrencyDollarIcon,
  CalendarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      startDate
      endDate
      budget
      expenses {
        id
        description
        amount
        date
        category
      }
    }
  }
`;

const ADD_EXPENSE = gql`
  mutation AddExpense($input: CreateExpenseInput!) {
    createExpense(input: $input) {
      id
      description
      amount
      date
      category
    }
  }
`;

const UPDATE_PROJECT_STATUS = gql`
  mutation UpdateProjectStatus($id: ID!, $status: ProjectStatus!) {
    updateProjectStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [expenseData, setExpenseData] = useState({
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    category: 'MATERIAL',
  });

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  const [addExpense] = useMutation(ADD_EXPENSE, {
    refetchQueries: [{ query: GET_PROJECT, variables: { id } }],
  });

  const [updateProjectStatus] = useMutation(UPDATE_PROJECT_STATUS, {
    refetchQueries: [{ query: GET_PROJECT, variables: { id } }],
  });

  const handleExpenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addExpense({
        variables: {
          input: {
            projectId: id,
            ...expenseData,
            amount: parseFloat(expenseData.amount),
          },
        },
      });
      setIsExpenseModalOpen(false);
      setExpenseData({
        description: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: 'MATERIAL',
      });
    } catch (err) {
      console.error('Error adding expense:', err);
    }
  };

  const handleStatusChange = async (status: string) => {
    try {
      await updateProjectStatus({
        variables: {
          id,
          status,
        },
      });
    } catch (err) {
      console.error('Error updating project status:', err);
    }
  };

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

  const project = data.project;
  const totalExpenses = project.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const budgetUsage = (totalExpenses / project.budget) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {project.name}
            </h2>
            <div className="flex items-center space-x-3">
              <select
                value={project.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                <option value="PLANNING">Planning</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="ON_HOLD">On Hold</option>
              </select>
              <button
                onClick={() => setIsExpenseModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">{project.description}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Budget</dt>
              <dd className="mt-1 text-sm text-gray-900">${project.budget.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Total Expenses</dt>
              <dd className="mt-1 text-sm text-gray-900">${totalExpenses.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Budget Usage</dt>
              <dd className="mt-1">
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        budgetUsage > 90 ? 'bg-red-500' : budgetUsage > 70 ? 'bg-yellow-500' : 'bg-primary-500'
                      }`}
                      style={{ width: `${Math.min(budgetUsage, 100)}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{budgetUsage.toFixed(1)}%</span>
                </div>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Timeline</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Expenses List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Expenses</h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {project.expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {expense.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {expense.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${expense.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(expense.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Expense Modal */}
      {isExpenseModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <form onSubmit={handleExpenseSubmit} className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    value={expenseData.description}
                    onChange={(e) => setExpenseData({ ...expenseData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-7 pr-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      value={expenseData.amount}
                      onChange={(e) => setExpenseData({ ...expenseData, amount: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    value={expenseData.category}
                    onChange={(e) => setExpenseData({ ...expenseData, category: e.target.value })}
                  >
                    <option value="MATERIAL">Material</option>
                    <option value="LABOR">Labor</option>
                    <option value="EQUIPMENT">Equipment</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    value={expenseData.date}
                    onChange={(e) => setExpenseData({ ...expenseData, date: e.target.value })}
                  />
                </div>

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:col-start-2 sm:text-sm"
                  >
                    Add Expense
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsExpenseModalOpen(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 