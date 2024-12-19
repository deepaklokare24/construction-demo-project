// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { SupabaseService } from './supabase/supabase.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Test Prisma Connection
  const prismaService = app.get(PrismaService);
  await prismaService.$connect();
  
  // Test Supabase Connection
  const supabaseService = app.get(SupabaseService);
  const { data, error } = await supabaseService.client
    .from('projects')
    .select('count');
  
  console.log('Database connections established');
  
  await app.listen(3000);
}
bootstrap();