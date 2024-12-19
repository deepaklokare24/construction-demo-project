// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PostgresService } from './postgres.service';
import { MongoDBService } from './mongodb.service';

@Global()
@Module({
  providers: [PostgresService, MongoDBService],
  exports: [PostgresService, MongoDBService],
})
export class PrismaModule {}