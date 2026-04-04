// src/services/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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