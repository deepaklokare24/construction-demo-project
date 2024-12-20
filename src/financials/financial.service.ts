import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { MongoDBService } from '../prisma/mongodb.service';
import { PostgresService } from '../prisma/postgres.service';
import { validate as uuidValidate } from 'uuid';
import { Prisma } from '@prisma/client';

@Injectable()
export class FinancialService {
  constructor(
    private readonly mongodb: MongoDBService,
    private readonly postgres: PostgresService, // Add this to verify project existence
  ) {}

  async getAllFinancials() {
    try {
      return await this.mongodb.financial.findMany({
        include: {
          invoices: true,
          costTracking: true,
        },
      });
    } catch (error: any) {
      throw new Error(`Failed to fetch all financial records: ${error.message}`);
    }
  }

  async createFinancial(data: {
    projectId: string;
    budget: number;
    expenditure: number;
  }) {
    // Validate UUID format
    if (!uuidValidate(data.projectId)) {
      throw new BadRequestException('Invalid project ID format');
    }

    // Validate monetary values
    if (data.budget < 0 || data.expenditure < 0) {
      throw new BadRequestException('Monetary values must be positive');
    }

    // Verify project exists in Postgres
    const project = await this.postgres.project.findUnique({
      where: { id: data.projectId },
    });

    if (!project) {
      throw new NotFoundException(`Project with ID ${data.projectId} not found`);
    }

    try {
      return await this.mongodb.financial.create({
        data: {
          projectId: data.projectId,
          budget: Number(data.budget),
          expenditure: Number(data.expenditure),
        },
      });
    } catch (error: any) {
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
    } catch (error: any) {
      throw new Error(`Failed to fetch financial records: ${error.message}`);
    }
  }

  async addInvoice(data: {
    projectId: string;
    financialId: string;
    invoiceNumber: string;
    amount: number;
    date: Date;
    status: 'PENDING' | 'PAID' | 'OVERDUE';
  }) {
    if (!uuidValidate(data.projectId)) {
      throw new BadRequestException('Invalid project ID format');
    }

    if (data.amount <= 0) {
      throw new BadRequestException('Invoice amount must be greater than zero');
    }

    try {
      const financial = await this.mongodb.financial.findUnique({
        where: { id: data.financialId },
      });

      if (!financial) {
        throw new NotFoundException(`Financial record with ID ${data.financialId} not found`);
      }

      return await this.mongodb.invoice.create({
        data: {
          ...data,
          date: new Date(data.date),
          amount: Number(data.amount),
        },
      });
    } catch (error: any) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to create invoice: ${error.message}`);
    }
  }

  async addCostTracking(data: {
    projectId: string;
    financialId: string;
    category: string;
    amount: number;
    date: Date;
  }) {
    if (!uuidValidate(data.projectId)) {
      throw new BadRequestException('Invalid project ID format');
    }

    if (data.amount <= 0) {
      throw new BadRequestException('Cost amount must be greater than zero');
    }

    try {
      const financial = await this.mongodb.financial.findUnique({
        where: { id: data.financialId },
      });

      if (!financial) {
        throw new NotFoundException(`Financial record with ID ${data.financialId} not found`);
      }

      return await this.mongodb.costTracking.create({
        data: {
          ...data,
          date: new Date(data.date),
          amount: Number(data.amount),
        },
      });
    } catch (error: any) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to create cost tracking record: ${error.message}`);
    }
  }

  async updateFinancial(
    id: string,
    data: {
      budget?: number;
      expenditure?: number;
    },
  ) {
    if (data.budget !== undefined && data.budget < 0) {
      throw new BadRequestException('Budget must be positive');
    }

    if (data.expenditure !== undefined && data.expenditure < 0) {
      throw new BadRequestException('Expenditure must be positive');
    }

    try {
      return await this.mongodb.financial.update({
        where: { id },
        data: {
          ...data,
          budget: data.budget !== undefined ? Number(data.budget) : undefined,
          expenditure: data.expenditure !== undefined ? Number(data.expenditure) : undefined,
        },
        include: {
          invoices: true,
          costTracking: true,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Financial record with ID ${id} not found`);
        }
      }
      throw new Error(`Failed to update financial record: ${error.message}`);
    }
  }

  async getFinancialSummary(projectId: string) {
    if (!uuidValidate(projectId)) {
      throw new BadRequestException('Invalid project ID format');
    }

    try {
      // Verify project exists
      const project = await this.postgres.project.findUnique({
        where: { id: projectId },
      });

      if (!project) {
        throw new NotFoundException(`Project with ID ${projectId} not found`);
      }

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
        0,
      );
      const totalCosts = financials.reduce(
        (sum, f) => sum + f.costTracking.reduce((cSum, c) => cSum + c.amount, 0),
        0,
      );

      return {
        totalBudget,
        totalExpenditure,
        totalInvoiced,
        totalCosts,
        budgetUtilization: totalBudget > 0 ? (totalExpenditure / totalBudget) * 100 : 0,
        invoiceCollection: totalInvoiced > 0 ? (totalInvoiced / totalExpenditure) * 100 : 0,
      };
    } catch (error: any) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to generate financial summary: ${error.message}`);
    }
  }
}