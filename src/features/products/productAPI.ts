// src/features/products/productAPI.ts

import { Product, ProductCategory } from '../../types/product';

const API_URL = import.meta.env.VITE_API_URL;

export const productAPI = {
    // Fetch all products
    async getProducts(): Promise<Product[]> {
        const res = await fetch(`${API_URL}/products`);
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
    },

    // Fetch products by category
    async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
        const res = await fetch(`${API_URL}/products?category=${category}`);
        if (!res.ok) throw new Error('Failed to fetch category products');
        return res.json();
    },

    // Fetch single product
    async getProductById(id: string): Promise<Product> {
        const res = await fetch(`${API_URL}/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        return res.json();
    },

    // Search products
    async searchProducts(query: string): Promise<Product[]> {
        const res = await fetch(`${API_URL}/products/search?q=${query}`);
        if (!res.ok) throw new Error('Search failed');
        return res.json();
    },
};