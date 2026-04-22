// src/pages/Category.tsx
import { Link, useParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { Lightbulb, Wind, Coffee, Tv, ShoppingBag } from 'lucide-react';

const categories = [
    { slug: 'refrigerators',     label: 'Refrigerators',     icon: <ShoppingBag size={28} /> },
    { slug: 'washing-machines',  label: 'Washing Machines',  icon: <Wind size={28} /> },
    { slug: 'microwaves',        label: 'Microwaves',        icon: <Coffee size={28} /> },
    { slug: 'air-conditioners',  label: 'Air Conditioners',  icon: <Lightbulb size={28} /> },
    { slug: 'kitchen-appliances',label: 'Kitchen Appliances',icon: <Tv size={28} /> },
];

export default function Category() {
    const { slug } = useParams<{ slug?: string }>();
    const activeCategory = categories.find(c => c.slug === slug);

    return (
        <div className="page category-page" style={styles.page}>

            {/* Category Pills */}
            <div style={styles.pills}>
                <Link to="/category" style={{ ...styles.pill, ...(slug === undefined ? styles.pillActive : {}) }}>
                    All
                </Link>
                {categories.map(cat => (
                    <Link
                        key={cat.slug}
                        to={`/category/${cat.slug}`}
                        style={{ ...styles.pill, ...(slug === cat.slug ? styles.pillActive : {}) }}
                    >
                        {cat.label}
                    </Link>
                ))}
            </div>

            {/* Heading */}
            <div style={styles.header}>
                <h2 style={styles.title}>
                    {activeCategory ? activeCategory.label : 'All Products'}
                </h2>
                <p style={styles.subtitle}>
                    {activeCategory
                        ? `Showing all ${activeCategory.label.toLowerCase()} available in store`
                        : 'Browse our complete range of home appliances'}
                </p>
            </div>

            {/* Live product grid from Supabase */}
            <ProductGrid category={slug} />
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: { paddingTop: '1.5rem', paddingBottom: '3rem' },
    pills: {
        display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
        marginBottom: '2rem',
    },
    pill: {
        padding: '0.45rem 1.1rem', borderRadius: '999px',
        border: '1px solid #e2e8f0', color: '#475569',
        fontSize: '0.875rem', fontWeight: 500, transition: 'all 0.2s',
        textDecoration: 'none', background: 'white',
    },
    pillActive: {
        background: '#ec4899', color: 'white',
        border: '1px solid #ec4899',
    },
    header: { marginBottom: '1.5rem' },
    title: { fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' },
    subtitle: { color: '#64748b', fontSize: '0.95rem' },
};
