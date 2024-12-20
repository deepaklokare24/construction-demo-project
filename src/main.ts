// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostgresService } from './prisma/postgres.service';
import { MongoDBService } from './prisma/mongodb.service';
import { SupabaseService } from './supabase/supabase.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend application
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Accept,Authorization',
    credentials: true,
  });
  
  // Test Postgres Connection
  const postgresService = app.get(PostgresService);
  try {
    await postgresService.$connect();
    console.log('PostgreSQL connection successful');
  } catch (error) {
    console.error('Failed to connect to PostgreSQL:', error);
  }
  
  // Test Supabase Connection
  const supabaseService = app.get(SupabaseService);
  try {
    const { data, error } = await supabaseService.client
      .from('projects')
      .select('count');
    
    if (error) {
      console.warn('Supabase connection warning:', error.message);
    } else {
      console.log('Supabase connection successful. Projects count:', data[0]?.count || 0);
    }
  } catch (error) {
    console.error('Failed to connect to Supabase:', error);
  }

   // Test MongoDB Connection
   const mongoService = app.get(MongoDBService);
   try {
     await mongoService.$connect();
     // Test query to verify connection
     const financialCount = await mongoService.financial.count();
     console.log('MongoDB connection successful. Financial records count:', financialCount);
   } catch (error) {
     console.error('Failed to connect to MongoDB:', error);
   }
  
  console.log('All database connection tests completed');
  
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
  console.log('GraphQL Playground: http://localhost:3000/graphql');
}

bootstrap().catch((error) => {
  console.error('Application failed to start:', error);
  process.exit(1);
});