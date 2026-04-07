// src/features/products/productAPI.ts

import { supabase } from '../../services/supabaseClient';
import { Product, ProductCategory } from '../../types/product';

export const productAPI = {
    // Fetch all products
    async getProducts(): Promise<Product[]> {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Product[];
    },

    // Fetch products by category
    async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('category', category)
            .order('rating', { ascending: false });

        if (error) throw error;
        return data as Product[];
    },

    // Fetch single product
    async getProductById(id: string): Promise<Product> {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Product;
    },

    // Search products
    async searchProducts(query: string): Promise<Product[]> {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .ilike('name', `%${query}%`)
            .limit(20);

        if (error) throw error;
        return data as Product[];
    },
};