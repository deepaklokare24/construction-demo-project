import { registerEnumType } from '@nestjs/graphql';

export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE'
}

registerEnumType(InvoiceStatus, {
  name: 'InvoiceStatus',
  description: 'The status of an invoice',
}); 