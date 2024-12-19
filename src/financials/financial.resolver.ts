// src/financials/financial.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FinancialService } from './financial.service';
import { Financial, Invoice, CostTracking, InvoiceStatus } from '../../prisma/mongodb/generated/mongodb';

@Resolver(() => 'Financial')
export class FinancialResolver {
  constructor(private financialService: FinancialService) {}

  @Query(() => [Financial])
  async projectFinancials(@Args('projectId') projectId: string) {
    return this.financialService.getFinancialsByProjectId(projectId);
  }

  @Query(() => FinancialSummary)
  async financialSummary(@Args('projectId') projectId: string) {
    return this.financialService.getFinancialSummary(projectId);
  }

  @Mutation(() => Financial)
  async createFinancial(
    @Args('projectId') projectId: string,
    @Args('budget') budget: number,
    @Args('expenditure') expenditure: number,
  ) {
    return this.financialService.createFinancial({
      projectId,
      budget,
      expenditure,
    });
  }

  @Mutation(() => Invoice)
  async addInvoice(
    @Args('projectId') projectId: string,
    @Args('financialId') financialId: string,
    @Args('invoiceNumber') invoiceNumber: string,
    @Args('amount') amount: number,
    @Args('date') date: Date,
    @Args('status') status: InvoiceStatus,
  ) {
    return this.financialService.addInvoice({
      projectId,
      financialId,
      invoiceNumber,
      amount,
      date,
      status,
    });
  }

  @Mutation(() => CostTracking)
  async addCostTracking(
    @Args('projectId') projectId: string,
    @Args('financialId') financialId: string,
    @Args('category') category: string,
    @Args('amount') amount: number,
    @Args('date') date: Date,
  ): Promise<CostTracking> {
    return this.financialService.addCostTracking({
      projectId,
      financialId,
      category,
      amount,
      date,
    });
  }

  @Mutation(() => Financial)
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