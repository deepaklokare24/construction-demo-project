import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Invoice } from './invoice.dto';
import { CostTracking } from './cost-tracking.dto';

@ObjectType()
export class Financial {
  @Field(() => ID)
  id: string;

  @Field()
  projectId: string;

  @Field(() => Float)
  budget: number;

  @Field(() => Float)
  expenditure: number;

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @Field(() => [CostTracking], { nullable: true })
  costTracking?: CostTracking[];
}

@ObjectType()
export class FinancialSummary {
  @Field(() => Float)
  totalBudget: number;

  @Field(() => Float)
  totalExpenditure: number;

  @Field(() => Float)
  totalInvoiced: number;

  @Field(() => Float)
  totalCosts: number;

  @Field(() => Float)
  budgetUtilization: number;

  @Field(() => Float)
  invoiceCollection: number;
} 