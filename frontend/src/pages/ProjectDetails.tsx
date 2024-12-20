import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {
  CurrencyDollarIcon,
  CalendarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { GET_PROJECT, GET_PROJECT_FINANCIALS, GET_FINANCIAL_SUMMARY } from '../graphql/queries';
import { UPDATE_PROJECT_STATUS, ADD_COST_TRACKING, ADD_INVOICE } from '../graphql/mutations';
import { Project, Financial, FinancialSummary, ProjectStatus, InvoiceStatus } from '../types/schema';

interface ProjectData {
  project: Project;
}

interface FinancialsData {
  projectFinancials: Financial[];
}

interface FinancialSummaryData {
  financialSummary: FinancialSummary;
}

interface ExpenseFormData {
  description: string;
  amount: string;
  category: string;
  date: string;
}

interface InvoiceFormData {
  invoiceNumber: string;
  amount: string;
  status: InvoiceStatus;
  date: string;
}

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [expenseData, setExpenseData] = useState<ExpenseFormData>({
    description: '',
    amount: '',
    category: 'MATERIAL',
    date: new Date().toISOString().split('T')[0],
  });
  const [invoiceData, setInvoiceData] = useState<InvoiceFormData>({
    invoiceNumber: '',
    amount: '',
    status: InvoiceStatus.PENDING,
    date: new Date().toISOString().split('T')[0],
  });

  const { loading: projectLoading, error: projectError, data: projectData } = 
    useQuery<ProjectData>(GET_PROJECT, {
      variables: { id },
    });

  const { loading: financialsLoading, error: financialsError, data: financialsData } = 
    useQuery<FinancialsData>(GET_PROJECT_FINANCIALS, {
      variables: { projectId: id },
    });

  const { loading: summaryLoading, error: summaryError, data: summaryData } = 
    useQuery<FinancialSummaryData>(GET_FINANCIAL_SUMMARY, {
      variables: { projectId: id },
    });

  const [updateProjectStatus] = useMutation(UPDATE_PROJECT_STATUS, {
    refetchQueries: [
      { query: GET_PROJECT, variables: { id } },
    ],
  });

  const [addCostTracking] = useMutation(ADD_COST_TRACKING, {
    refetchQueries: [
      { query: GET_PROJECT_FINANCIALS, variables: { projectId: id } },
      { query: GET_FINANCIAL_SUMMARY, variables: { projectId: id } },
    ],
  });

  const [addInvoice] = useMutation(ADD_INVOICE, {
    refetchQueries: [
      { query: GET_PROJECT_FINANCIALS, variables: { projectId: id } },
      { query: GET_FINANCIAL_SUMMARY, variables: { projectId: id } },
    ],
  });

  const handleStatusChange = async (status: ProjectStatus) => {
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

  const handleExpenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!financialsData?.projectFinancials[0]) return;

    try {
      await addCostTracking({
        variables: {
          projectId: id,
          financialId: financialsData.projectFinancials[0].id,
          amount: parseFloat(expenseData.amount),
          category: expenseData.description,
          date: new Date(expenseData.date).toISOString(),
        },
      });
      setIsExpenseModalOpen(false);
      setExpenseData({
        description: '',
        amount: '',
        category: 'MATERIAL',
        date: new Date().toISOString().split('T')[0],
      });
    } catch (err) {
      console.error('Error adding expense:', err);
    }
  };

  const handleInvoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!financialsData?.projectFinancials[0]) return;

    try {
      await addInvoice({
        variables: {
          projectId: id,
          financialId: financialsData.projectFinancials[0].id,
          invoiceNumber: invoiceData.invoiceNumber,
          amount: parseFloat(invoiceData.amount),
          status: invoiceData.status,
          date: new Date(invoiceData.date).toISOString(),
        },
      });
      setIsInvoiceModalOpen(false);
      setInvoiceData({
        invoiceNumber: '',
        amount: '',
        status: InvoiceStatus.PENDING,
        date: new Date().toISOString().split('T')[0],
      });
    } catch (err) {
      console.error('Error adding invoice:', err);
    }
  };

  if (projectLoading || financialsLoading || summaryLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (projectError || financialsError || summaryError) {
    return (
      <div className="text-red-500 p-4">
        Error: {projectError?.message || financialsError?.message || summaryError?.message}
      </div>
    );
  }

  const project = projectData!.project;
  const financial = financialsData?.projectFinancials[0];
  const summary = summaryData!.financialSummary;

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {project.name}
            </h2>
            <div className="flex items-center space-x-3">
              <select
                value={project.status}
                onChange={(e) => handleStatusChange(e.target.value as ProjectStatus)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                {Object.values(ProjectStatus).map((status) => (
                  <option key={status} value={status}>
                    {status.replace('_', ' ')}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setIsExpenseModalOpen(true)}
                className="btn-primary"
              >
                Add Cost
              </button>
              <button
                onClick={() => setIsInvoiceModalOpen(true)}
                className="btn-primary"
              >
                Add Invoice
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
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900">{project.location}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Timeline</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(project.startDate).toLocaleDateString()} - {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'TBD'}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Budget</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${summary.totalBudget.toLocaleString()}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Costs</dt>
            <dd className="mt-1 text-3xl font-semibold text-primary-600">
              ${summary.totalCosts.toLocaleString()}
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Budget Utilization</dt>
            <dd className="mt-1">
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      summary.budgetUtilization > 90 ? 'bg-red-500' : 
                      summary.budgetUtilization > 70 ? 'bg-yellow-500' : 
                      'bg-primary-500'
                    }`}
                    style={{ width: `${Math.min(summary.budgetUtilization, 100)}%` }}
                  />
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {summary.budgetUtilization.toFixed(1)}%
                </span>
              </div>
            </dd>
          </div>
        </div>
      </div>

      {/* Costs List */}
      {financial && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Costs</h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
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
                  {financial.costTracking.map((cost) => (
                    <tr key={cost.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {cost.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${cost.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(cost.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Invoices List */}
      {financial && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Invoices</h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Invoice Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {financial.invoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {invoice.invoiceNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${invoice.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`
                          px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${
                            invoice.status === InvoiceStatus.PAID
                              ? 'bg-green-100 text-green-800'
                              : invoice.status === InvoiceStatus.OVERDUE
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }
                        `}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(invoice.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Add Cost Modal */}
      {isExpenseModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <form onSubmit={handleExpenseSubmit} className="space-y-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    value={expenseData.category}
                    onChange={(e) => setExpenseData({ ...expenseData, category: e.target.value })}
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
                    Add Cost
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

      {/* Add Invoice Modal */}
      {isInvoiceModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <form onSubmit={handleInvoiceSubmit} className="space-y-4">
                <div>
                  <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="invoiceAmount" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      name="invoiceAmount"
                      id="invoiceAmount"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-7 pr-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      value={invoiceData.amount}
                      onChange={(e) => setInvoiceData({ ...invoiceData, amount: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="invoiceStatus" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    id="invoiceStatus"
                    name="invoiceStatus"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    value={invoiceData.status}
                    onChange={(e) => setInvoiceData({ ...invoiceData, status: e.target.value as InvoiceStatus })}
                  >
                    {Object.values(InvoiceStatus).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    value={invoiceData.date}
                    onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })}
                  />
                </div>

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:col-start-2 sm:text-sm"
                  >
                    Add Invoice
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInvoiceModalOpen(false)}
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