// src/financials/financial.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FinancialService } from './financial.service';
import { Financial, FinancialSummary } from './dto/financial.dto';
import { Invoice } from './dto/invoice.dto';
import { CostTracking } from './dto/cost-tracking.dto';
import { InvoiceStatus } from './enums/invoice-status.enum';

@Resolver(() => Financial)
export class FinancialResolver {
  constructor(private financialService: FinancialService) {}

  @Query(() => [Financial])
  async projectFinancials(@Args('projectId') projectId: string) {
    return this.financialService.getFinancialsByProjectId(projectId);
  }

  @Query(() => [Financial])
  async allProjectFinancials() {
    return this.financialService.getAllFinancials();
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
    @Args('status', { type: () => InvoiceStatus }) status: InvoiceStatus,
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
  ) {
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
    @Args('expenditure', { nullable: true }) expenditure?: number,
    @Args('budget', { nullable: true }) budget?: number,
  ) {
    return this.financialService.updateFinancial(id, {
      ...(expenditure !== undefined && { expenditure }),
      ...(budget !== undefined && { budget }),
    });
  }
}