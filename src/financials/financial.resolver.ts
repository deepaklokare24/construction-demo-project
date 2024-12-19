// src/financials/financial.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FinancialService } from './financial.service';
import { Financial, Invoice, CostTracking, InvoiceStatus } from '@prisma/client';

@Resolver('Financial')
export class FinancialResolver {
  constructor(private financialService: FinancialService) {}

  @Query('projectFinancials')
  async getProjectFinancials(
    @Args('projectId') projectId: string,
  ): Promise<Financial[]> {
    return this.financialService.getProjectFinancials(projectId);
  }

  @Query('financialSummary')
  async getFinancialSummary(@Args('projectId') projectId: string) {
    return this.financialService.getFinancialSummary(projectId);
  }

  @Mutation('createFinancial')
  async createFinancial(
    @Args('projectId') projectId: string,
    @Args('budget') budget: number,
    @Args('expenditure') expenditure: number,
  ): Promise<Financial> {
    return this.financialService.createFinancial({
      projectId,
      budget,
      expenditure,
    });
  }

  @Mutation('addInvoice')
  async addInvoice(
    @Args('financialId') financialId: string,
    @Args('invoiceNumber') invoiceNumber: string,
    @Args('amount') amount: number,
    @Args('date') date: Date,
    @Args('status') status: InvoiceStatus,
  ): Promise<Invoice> {
    return this.financialService.addInvoice({
      financialId,
      invoiceNumber,
      amount,
      date,
      status,
    });
  }

  @Mutation('addCostTracking')
  async addCostTracking(
    @Args('financialId') financialId: string,
    @Args('category') category: string,
    @Args('amount') amount: number,
    @Args('date') date: Date,
  ): Promise<CostTracking> {
    return this.financialService.addCostTracking({
      financialId,
      category,
      amount,
      date,
    });
  }

  @Mutation('updateFinancial')
  async updateFinancial(
    @Args('id') id: string,
    @Args('expenditure') expenditure?: number,
    @Args('budget') budget?: number,
  ): Promise<Financial> {
    return this.financialService.updateExpenditureAndBudget(id, {
      expenditure,
      budget,
    });
  }
}