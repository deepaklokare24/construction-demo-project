// src/financials/financial.module.ts
import { Module } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { FinancialResolver } from './financial.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FinancialService, FinancialResolver],
  exports: [FinancialService],
})
export class FinancialModule {}