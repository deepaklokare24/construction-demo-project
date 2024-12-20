import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $name: String!
    $description: String!
    $location: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $status: ProjectStatus!
  ) {
    createProject(
      name: $name
      description: $description
      location: $location
      startDate: $startDate
      endDate: $endDate
      status: $status
    ) {
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

export const UPDATE_PROJECT_STATUS = gql`
  mutation UpdateProjectStatus($id: String!, $status: ProjectStatus!) {
    updateProjectStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

export const CREATE_FINANCIAL = gql`
  mutation CreateFinancial(
    $projectId: String!
    $budget: Float!
    $expenditure: Float!
  ) {
    createFinancial(
      projectId: $projectId
      budget: $budget
      expenditure: $expenditure
    ) {
      id
      projectId
      budget
      expenditure
    }
  }
`;

export const UPDATE_FINANCIAL = gql`
  mutation UpdateFinancial(
    $id: String!
    $budget: Float
    $expenditure: Float
  ) {
    updateFinancial(
      id: $id
      budget: $budget
      expenditure: $expenditure
    ) {
      id
      budget
      expenditure
    }
  }
`;

export const ADD_COST_TRACKING = gql`
  mutation AddCostTracking(
    $projectId: String!
    $financialId: String!
    $amount: Float!
    $category: String!
    $date: DateTime!
  ) {
    addCostTracking(
      projectId: $projectId
      financialId: $financialId
      amount: $amount
      category: $category
      date: $date
    ) {
      id
      amount
      category
      date
    }
  }
`;

export const ADD_INVOICE = gql`
  mutation AddInvoice(
    $projectId: String!
    $financialId: String!
    $invoiceNumber: String!
    $amount: Float!
    $status: InvoiceStatus!
    $date: DateTime!
  ) {
    addInvoice(
      projectId: $projectId
      financialId: $financialId
      invoiceNumber: $invoiceNumber
      amount: $amount
      status: $status
      date: $date
    ) {
      id
      invoiceNumber
      amount
      status
      date
    }
  }
`; 