// src/financials/financial.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { MongoDBService } from '../prisma/mongodb.service';
import { Prisma } from '../../prisma/mongodb/generated/mongodb';

export type InvoiceStatus = 'PENDING' | 'PAID' | 'OVERDUE';

@Injectable()
export class FinancialService {
  constructor(private mongodb: MongoDBService) {}

  async createFinancial(data: {
    projectId: string;
    budget: number;
    expenditure: number;
  }) {
    try {
      return await this.mongodb.financial.create({
        data,
        include: {
          invoices: true,
          costTracking: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create financial record: ${error.message}`);
    }
  }

  async getFinancialsByProjectId(projectId: string) {
    try {
      return await this.mongodb.financial.findMany({
        where: { projectId },
        include: {
          invoices: true,
          costTracking: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch financial records: ${error.message}`);
    }
  }

  async addInvoice(data: {
    financialId: string;
    invoiceNumber: string;
    amount: number;
    date: Date;
    status: InvoiceStatus;
  }) {
    try {
      return await this.mongodb.invoice.create({
        data: {
          ...data,
          date: new Date(data.date),
        },
      });
    } catch (error) {
      throw new Error(`Failed to create invoice: ${error.message}`);
    }
  }

  async addCostTracking(data: {
    financialId: string;
    category: string;
    amount: number;
    date: Date;
  }) {
    try {
      return await this.mongodb.costTracking.create({
        data: {
          ...data,
          date: new Date(data.date),
        },
      });
    } catch (error) {
      throw new Error(`Failed to create cost tracking record: ${error.message}`);
    }
  }

  async updateFinancial(
    id: string,
    data: {
      budget?: number;
      expenditure?: number;
    }
  ) {
    try {
      return await this.mongodb.financial.update({
        where: { id },
        data,
        include: {
          invoices: true,
          costTracking: true,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Financial record with ID ${id} not found`);
        }
      }
      throw new Error(`Failed to update financial record: ${error.message}`);
    }
  }

  async getFinancialSummary(projectId: string) {
    try {
      const financials = await this.mongodb.financial.findMany({
        where: { projectId },
        include: {
          invoices: true,
          costTracking: true,
        },
      });

      const totalBudget = financials.reduce((sum, f) => sum + f.budget, 0);
      const totalExpenditure = financials.reduce((sum, f) => sum + f.expenditure, 0);
      const totalInvoiced = financials.reduce(
        (sum, f) => sum + f.invoices.reduce((iSum, i) => iSum + i.amount, 0),
        0
      );
      const totalCosts = financials.reduce(
        (sum, f) => sum + f.costTracking.reduce((cSum, c) => cSum + c.amount, 0),
        0
      );

      return {
        totalBudget,
        totalExpenditure,
        totalInvoiced,
        totalCosts,
        budgetUtilization: totalBudget > 0 ? (totalExpenditure / totalBudget) * 100 : 0,
        invoiceCollection: totalInvoiced > 0 ? (totalInvoiced / totalExpenditure) * 100 : 0,
      };
    } catch (error) {
      throw new Error(`Failed to generate financial summary: ${error.message}`);
    }
  }

  async getInvoicesByStatus(status: InvoiceStatus) {
    try {
      return await this.mongodb.invoice.findMany({
        where: { status },
        orderBy: {
          date: 'desc',
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch invoices: ${error.message}`);
    }
  }

  async getCostTrackingByCategory(category: string) {
    try {
      return await this.mongodb.costTracking.findMany({
        where: { category },
        orderBy: {
          date: 'desc',
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch cost tracking records: ${error.message}`);
    }
  }
}