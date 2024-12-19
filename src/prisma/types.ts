import { PrismaClient as MongoDBPrismaClient } from '../../prisma/mongodb/generated/mongodb';
import { PrismaClient as PostgresPrismaClient } from '../../prisma/postgres/generated/postgres';

export type MongoDBClient = MongoDBPrismaClient;
export type PostgresClient = PostgresPrismaClient; 