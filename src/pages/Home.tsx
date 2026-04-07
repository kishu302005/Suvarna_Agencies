import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HeroSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    link: string;
    btnText: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const heroSlides: HeroSlide[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
        title: 'Modern Kitchen Essentials',
        subtitle: 'Upgrade your kitchen with our top appliances',
        link: '/category',
        btnText: 'Shop Now',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=80',
        title: 'Smart Refrigerators',
        subtitle: 'Keep your food fresh with intelligent cooling',
        link: '/category/refrigerators',
        btnText: 'Explore',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
        title: 'Premium Laundry Solutions',
        subtitle: 'Powerful wash, gentle on your clothes',
        link: '/category/washing-machines',
        btnText: 'View All',
    },
];

const featuredProducts: Product[] = [
    {
        id: 1,
        name: 'Smart Refrigerator',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 2,
        name: 'Premium Washing Machine',
        price: 899,
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 3,
        name: 'Microwave Oven',
        price: 299,
        image: 'https://images.unsplash.com/photo-1585659722983-39cb8eca8da3?auto=format&fit=crop&q=80&w=400',
    },
];

const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

const styles: Record<string, React.CSSProperties> = {
    page: { fontFamily: 'sans-serif', color: '#111827' },
    sliderWrapper: { marginBottom: '2.5rem' },
    heroSlide: {
        height: '420px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideOverlay: {
        textAlign: 'center',
        background: 'rgba(0,0,0,0.42)',
        padding: '2rem 3rem',
        borderRadius: '10px',
    },
    slideTitle: { color: '#fff', fontSize: '28px', fontWeight: 600, marginBottom: '8px' },
    slideSubtitle: { color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '18px' },
    btnPrimary: {
        display: 'inline-block',
        padding: '10px 24px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        textDecoration: 'none',
        background: '#2563eb',
        color: '#fff',
        border: 'none',
    },
    btnSecondary: {
        display: 'inline-block',
        padding: '8px 18px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        textDecoration: 'none',
        background: 'transparent',
        border: '1px solid #d1d5db',
        color: '#374151',
    },
    featuredSection: { padding: '0 1.5rem 2.5rem' },
    sectionTitle: { fontSize: '22px', fontWeight: 600, marginBottom: '1.25rem' },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    productCard: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' },
    imageContainer: { height: '180px', overflow: 'hidden' },
    productImage: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
    productInfo: { padding: '14px 16px 16px' },
    productName: { fontSize: '15px', fontWeight: 500, marginBottom: '6px' },
    price: { fontSize: '16px', fontWeight: 600, color: '#2563eb', marginBottom: '12px' },
};

export default function Home() {
    return (
        <div style={styles.page}>
            <style>{`
        .slick-dots li button:before { color: #fff; opacity: 0.6; font-size: 10px; }
        .slick-dots li.slick-active button:before { color: #fff; opacity: 1; }
        .slick-prev { left: 16px; z-index: 10; }
        .slick-next { right: 16px; z-index: 10; }
        .slick-prev:before, .slick-next:before { font-size: 24px; color: #fff; }
      `}</style>

            {/* Hero Slider */}
            <div style={styles.sliderWrapper}>
                <Slider {...sliderSettings}>
                    {heroSlides.map((slide: HeroSlide) => (
                        <div key={slide.id}>
                            <div style={{ ...styles.heroSlide, backgroundImage: `url(${slide.image})` }}>
                                <div style={styles.slideOverlay}>
                                    <h2 style={styles.slideTitle}>{slide.title}</h2>
                                    <p style={styles.slideSubtitle}>{slide.subtitle}</p>
                                    <Link to={slide.link} style={styles.btnPrimary}>{slide.btnText}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Featured Products */}
            <section style={styles.featuredSection}>
                <h2 style={styles.sectionTitle}>Featured Products</h2>
                <div style={styles.productGrid}>
                    {featuredProducts.map((product: Product) => (
                        <div key={product.id} style={styles.productCard}>
                            <div style={styles.imageContainer}>
                                <img src={product.image} alt={product.name} style={styles.productImage} />
                            </div>
                            <div style={styles.productInfo}>
                                <h3 style={styles.productName}>{product.name}</h3>
                                <p style={styles.price}>${product.price.toLocaleString()}</p>
                                <Link to={`/product/${product.id}`} style={styles.btnSecondary}>View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}