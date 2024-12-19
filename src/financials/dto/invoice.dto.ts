import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { InvoiceStatus } from '../enums/invoice-status.enum';

@ObjectType()
export class Invoice {
  @Field(() => ID)
  id: string;

  @Field()
  projectId: string;

  @Field()
  financialId: string;

  @Field()
  invoiceNumber: string;

  @Field(() => Float)
  amount: number;

  @Field()
  date: Date;

  @Field(() => InvoiceStatus)
  status: InvoiceStatus;
} 