import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
      status
      location
      startDate
      endDate
      createdAt
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($id: String!) {
    project(id: $id) {
      id
      name
      description
      status
      location
      startDate
      endDate
      createdAt
    }
  }
`;

export const GET_ALL_PROJECT_FINANCIALS = gql`
  query GetAllProjectFinancials {
    allProjectFinancials {
      id
      projectId
      budget
      expenditure
      costTracking {
        id
        amount
        category
        date
      }
      invoices {
        id
        invoiceNumber
        amount
        status
        date
      }
    }
  }
`;

export const GET_PROJECT_FINANCIALS = gql`
  query GetProjectFinancials($projectId: String!) {
    projectFinancials(projectId: $projectId) {
      id
      budget
      expenditure
      costTracking {
        id
        amount
        category
        date
      }
      invoices {
        id
        invoiceNumber
        amount
        status
        date
      }
    }
  }
`;

export const GET_FINANCIAL_SUMMARY = gql`
  query GetFinancialSummary($projectId: String!) {
    financialSummary(projectId: $projectId) {
      totalBudget
      totalExpenditure
      totalCosts
      totalInvoiced
      invoiceCollection
      budgetUtilization
    }
  }
`;