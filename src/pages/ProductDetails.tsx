// src/pages/ProductDetails.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { Product } from '../types/product';

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        if (id) fetchProduct(id);
    }, [id]);

    async function fetchProduct(productId: string) {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', productId)
            .single();

        if (error) {
            setError('Product not found.');
        } else {
            setProduct(data as Product);
            setSelectedImage(data.image_url);
        }
        setLoading(false);
    }

    if (loading) return (
        <div style={styles.center}>
            <div style={styles.spinner} />
        </div>
    );

    if (error || !product) return (
        <div style={styles.center}>
            <p style={{ color: '#ef4444', marginBottom: '1rem' }}>{error ?? 'Product not found.'}</p>
            <Link to="/category" className="btn btn-primary">Browse Products</Link>
        </div>
    );

    const fallbackImage = 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800';

    return (
        <div className="page product-details-page" style={styles.page}>
            {/* Breadcrumb */}
            <nav style={styles.breadcrumb}>
                <Link to="/" style={styles.crumb}>Home</Link>
                <span style={styles.sep}>/</span>
                <Link to="/category" style={styles.crumb}>Products</Link>
                <span style={styles.sep}>/</span>
                <span style={{ color: '#0f172a' }}>{product.name}</span>
            </nav>

            <div className="product-details-container">
                {/* Left: Images */}
                <div style={styles.imageSection}>
                    <img
                        src={selectedImage || fallbackImage}
                        alt={product.name}
                        style={styles.mainImage}
                        onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                    />
                    {product.images?.length > 0 && (
                        <div style={styles.thumbnails}>
                            {[product.image_url, ...product.images].slice(0, 4).map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`View ${i + 1}`}
                                    style={{
                                        ...styles.thumb,
                                        border: selectedImage === img ? '2px solid #ec4899' : '2px solid #e2e8f0',
                                    }}
                                    onClick={() => setSelectedImage(img)}
                                    onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Info */}
                <div className="product-info-container">
                    <p style={styles.brand}>{product.brand}</p>
                    <h1 style={styles.title}>{product.name}</h1>

                    {/* Rating */}
                    {product.rating > 0 && (
                        <div style={styles.ratingRow}>
                            <span style={styles.stars}>
                                {'★'.repeat(Math.round(product.rating))}
                                {'☆'.repeat(5 - Math.round(product.rating))}
                            </span>
                            <span style={styles.ratingText}>
                                {product.rating.toFixed(1)} ({product.reviews_count} reviews)
                            </span>
                        </div>
                    )}

                    <p className="price-large">₹{product.price.toLocaleString('en-IN')}</p>

                    <p style={styles.description}>{product.description}</p>

                    {/* Badges */}
                    <div style={styles.badges}>
                        {product.energy_rating && (
                            <span style={styles.badge}>⚡ Energy: {product.energy_rating}</span>
                        )}
                        {product.warranty_months > 0 && (
                            <span style={styles.badge}>🛡️ {product.warranty_months} Month Warranty</span>
                        )}
                        <span style={{
                            ...styles.badge,
                            background: product.stock > 0 ? '#dcfce7' : '#fee2e2',
                            color: product.stock > 0 ? '#166534' : '#991b1b',
                        }}>
                            {product.stock > 0 ? `✓ In Stock (${product.stock})` : '✗ Out of Stock'}
                        </span>
                    </div>

                    {/* Specifications */}
                    {product.specifications?.length > 0 && (
                        <div style={styles.specsBox}>
                            <h3 style={styles.specsTitle}>Specifications</h3>
                            <table style={styles.specsTable}>
                                <tbody>
                                    {product.specifications.map((spec, i) => (
                                        <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : 'white' }}>
                                            <td style={styles.specKey}>{spec.key}</td>
                                            <td style={styles.specVal}>{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="actions">
                        <button
                            className="btn btn-primary lg"
                            disabled={product.stock === 0}
                            style={{ opacity: product.stock === 0 ? 0.5 : 1, cursor: product.stock === 0 ? 'not-allowed' : 'pointer' }}
                        >
                            Add to Cart
                        </button>
                        <Link to="/cart" className="btn btn-secondary lg">Go to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: { paddingTop: '1.5rem', paddingBottom: '3rem' },
    center: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', gap: '1rem' },
    spinner: {
        width: '48px', height: '48px', border: '4px solid #f3f3f3',
        borderTop: '4px solid #ec4899', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
    },
    breadcrumb: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem' },
    crumb: { color: '#ec4899', fontWeight: 500 },
    sep: { color: '#94a3b8' },
    imageSection: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    mainImage: { width: '100%', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', objectFit: 'cover', maxHeight: '450px' },
    thumbnails: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
    thumb: { width: '72px', height: '72px', objectFit: 'cover', borderRadius: '0.5rem', cursor: 'pointer', transition: 'border-color 0.2s' },
    brand: { color: '#64748b', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' },
    title: { fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' },
    ratingRow: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' },
    stars: { color: '#f59e0b', fontSize: '1.1rem' },
    ratingText: { color: '#64748b', fontSize: '0.9rem' },
    description: { color: '#475569', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.95rem' },
    badges: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' },
    badge: { padding: '0.35rem 0.85rem', borderRadius: '999px', background: '#f1f5f9', color: '#475569', fontSize: '0.82rem', fontWeight: 500 },
    specsBox: { background: '#f8fafc', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '2rem', border: '1px solid #e2e8f0' },
    specsTitle: { padding: '0.85rem 1rem', fontSize: '1rem', fontWeight: 600, borderBottom: '1px solid #e2e8f0', background: 'white' },
    specsTable: { width: '100%', borderCollapse: 'collapse' },
    specKey: { padding: '0.6rem 1rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 500, width: '45%' },
    specVal: { padding: '0.6rem 1rem', color: '#0f172a', fontSize: '0.875rem' },
};
