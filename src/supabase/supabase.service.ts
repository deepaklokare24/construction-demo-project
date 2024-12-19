// src/supabase/supabase.service.ts
import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  public client;

  constructor(private configService: ConfigService) {
    this.client = createClient(
      this.configService.get('SUPABASE_URL') as string,
      this.configService.get('SUPABASE_SERVICE_ROLE_KEY') as string,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );
  }
}