// src/components/product/ProductGrid.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import { Product } from '../../types/product';

interface ProductGridProps {
    category?: string;
    limit?: number;
}

export default function ProductGrid({ category, limit }: ProductGridProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
    }, [category]);

    async function fetchProducts() {
        setLoading(true);
        setError(null);

        let query = supabase.from('products').select('*');

        if (category) {
            query = query.eq('category', category);
        }
        if (limit) {
            query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) {
            setError('Failed to load products. Please try again.');
            console.error('Error fetching products:', error);
        } else {
            setProducts(data as Product[]);
        }
        setLoading(false);
    }

    if (loading) {
        return (
            <div style={styles.loadingWrapper}>
                {[...Array(6)].map((_, i) => (
                    <div key={i} style={styles.skeleton} />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div style={styles.errorBox}>
                <p>{error}</p>
                <button style={styles.retryBtn} onClick={fetchProducts}>Retry</button>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div style={styles.emptyBox}>
                <p>No products found.</p>
            </div>
        );
    }

    return (
        <div style={styles.grid}>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="image-container">
                        <img
                            src={product.image_url}
                            alt={product.name}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80';
                            }}
                        />
                    </div>
                    <div className="product-info">
                        <h3 style={styles.productName}>{product.name}</h3>
                        <p style={styles.brand}>{product.brand}</p>
                        <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
                        {product.rating > 0 && (
                            <p style={styles.rating}>
                                {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
                                <span style={styles.ratingCount}> ({product.reviews_count})</span>
                            </p>
                        )}
                        <div style={styles.actions}>
                            <Link to={`/product/${product.id}`} className="btn btn-primary" style={styles.viewBtn}>
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem',
    },
    loadingWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
    },
    skeleton: {
        height: '380px',
        borderRadius: '1rem',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
    },
    errorBox: {
        textAlign: 'center',
        padding: '3rem',
        color: '#ef4444',
    },
    retryBtn: {
        marginTop: '1rem',
        padding: '0.5rem 1.5rem',
        background: '#ec4899',
        color: 'white',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        fontWeight: 600,
    },
    emptyBox: {
        textAlign: 'center',
        padding: '3rem',
        color: '#64748b',
    },
    productName: {
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '0.25rem',
        color: '#0f172a',
    },
    brand: {
        fontSize: '0.85rem',
        color: '#64748b',
        marginBottom: '0.5rem',
    },
    rating: {
        color: '#f59e0b',
        fontSize: '0.9rem',
        marginBottom: '0.75rem',
    },
    ratingCount: {
        color: '#64748b',
        fontSize: '0.8rem',
    },
    actions: {
        marginTop: '0.75rem',
    },
    viewBtn: {
        width: '100%',
        textAlign: 'center',
        padding: '0.6rem 1rem',
        fontSize: '0.9rem',
    },
};
