// src/types/product.ts

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    brand: string;
    image_url: string;
    images: string[]; // Multiple product images
    stock: number;
    specifications: Specification[];
    rating: number;
    reviews_count: number;
    warranty_months: number;
    energy_rating?: 'A+++' | 'A++' | 'A+' | 'A' | 'B' | 'C' | 'D';
    created_at: string;
}

export type ProductCategory =
    | 'refrigerators'
    | 'washing-machines'
    | 'air-conditioners'
    | 'microwaves'
    | 'dishwashers'
    | 'water-purifiers'
    | 'vacuum-cleaners'
    | 'kitchen-appliances';

export interface Specification {
    key: string;
    value: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface User {
    id: string;
    email: string;
    full_name: string;
    phone?: string;
    created_at: string;
}

export interface Order {
    id: string;
    user_id: string;
    items: CartItem[];
    total_amount: number;
    status: OrderStatus;
    shipping_address: Address;
    created_at: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface Address {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
}