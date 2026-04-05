// src/features/products/productSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductCategory } from '../../types/product';
import { productAPI } from './productAPI';

interface ProductState {
    items: Product[];
    selectedProduct: Product | null;
    loading: boolean;
    error: string | null;
    filters: {
        category: ProductCategory | null;
        priceRange: [number, number];
        brands: string[];
    };
}

const initialState: ProductState = {
    items: [],
    selectedProduct: null,
    loading: false,
    error: null,
    filters: {
        category: null,
        priceRange: [0, 100000],
        brands: [],
    },
};

// Async thunks
export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async () => {
        return await productAPI.getProducts();
    }
);

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchByCategory',
    async (category: ProductCategory) => {
        return await productAPI.getProductsByCategory(category);
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchById',
    async (id: string) => {
        return await productAPI.getProductById(id);
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<ProductCategory | null>) => {
            state.filters.category = action.payload;
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.filters.priceRange = action.payload;
        },
        toggleBrand: (state, action: PayloadAction<string>) => {
            const brand = action.payload;
            const index = state.filters.brands.indexOf(brand);
            if (index > -1) {
                state.filters.brands.splice(index, 1);
            } else {
                state.filters.brands.push(brand);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            })
            // Fetch by category
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            // Fetch by ID
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            });
    },
});

export const { setCategory, setPriceRange, toggleBrand } = productSlice.actions;
export default productSlice.reducer;