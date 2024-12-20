export enum ProjectStatus {
  PLANNING = 'PLANNING',
  IN_PROGRESS = 'IN_PROGRESS',
  ON_HOLD = 'ON_HOLD',
  COMPLETED = 'COMPLETED',
}

export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  location: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string | null;
  createdAt: string;
}

export interface CostTracking {
  id: string;
  projectId: string;
  financialId: string;
  amount: number;
  category: string;
  date: string;
}

export interface Invoice {
  id: string;
  projectId: string;
  financialId: string;
  invoiceNumber: string;
  amount: number;
  status: InvoiceStatus;
  date: string;
}

export interface Financial {
  id: string;
  projectId: string;
  budget: number;
  expenditure: number;
  costTracking: CostTracking[];
  invoices: Invoice[];
}

export interface FinancialSummary {
  totalBudget: number;
  totalExpenditure: number;
  totalCosts: number;
  totalInvoiced: number;
  invoiceCollection: number;
  budgetUtilization: number;
} 