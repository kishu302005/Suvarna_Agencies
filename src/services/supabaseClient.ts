// src/services/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://suiqbfhrghetnksylixh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1aXFiZmhyZ2hldG5rc3lsaXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MzY2MjAsImV4cCI6MjA5MTQxMjYyMH0.awJ7g1SzZIUTcf3T1KBvcx9XjprHX2UZSbMXXoETvJM'

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for type safety
export type Database = {
    public: {
        Tables: {
            products: {
                Row: {
                    id: string;
                    name: string;
                    description: string;
                    price: number;
                    category: string;
                    brand: string;
                    image_url: string;
                    images: string[];
                    stock: number;
                    specifications: any;
                    rating: number;
                    reviews_count: number;
                    warranty_months: number;
                    energy_rating: string | null;
                    created_at: string;
                };
            };
            users: {
                Row: {
                    id: string;
                    email: string;
                    full_name: string;
                    phone: string | null;
                    created_at: string;
                };
            };
        };
    };
};