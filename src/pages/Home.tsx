// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductGrid from '../components/product/ProductGrid';

interface HeroSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    link: string;
    btnText: string;
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
    page: { fontFamily: 'Inter, sans-serif', color: '#111827' },
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
        background: '#ec4899',
        color: '#fff',
        border: 'none',
    },
    introSection: { padding: '4rem 1.5rem', background: '#f8fafc', textAlign: 'center' as const },
    introContainer: { maxWidth: '800px', margin: '0 auto' },
    introTitle: { fontSize: '28px', fontWeight: 700, marginBottom: '1rem', color: '#111827' },
    introText: { fontSize: '16px', lineHeight: '1.6', color: '#4b5563' },
    featuredSection: { padding: '2.5rem 1.5rem' },
    sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
    sectionTitle: { fontSize: '22px', fontWeight: 700, color: '#111827' },
    viewAllLink: {
        fontSize: '14px', fontWeight: 500, color: '#ec4899',
        textDecoration: 'none', border: '1px solid #ec4899',
        padding: '6px 16px', borderRadius: '6px',
    },
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
                    {heroSlides.map((slide) => (
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

            {/* Introduction */}
            <section style={styles.introSection}>
                <div style={styles.introContainer}>
                    <h2 style={styles.introTitle}>Suvarna Agency – Comfort Meets Reliability</h2>
                    <p style={styles.introText}>
                        Enhance your home with thoughtfully designed appliances and kitchen solutions that simplify
                        everyday living. At Suvarna Agency, we focus on quality, durability, and comfort—creating
                        products that naturally fit into your lifestyle and make every day easier.
                    </p>
                </div>
            </section>

            {/* Featured Products — live from Supabase */}
            <section style={styles.featuredSection}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>Featured Products</h2>
                    <Link to="/category" style={styles.viewAllLink}>View All →</Link>
                </div>
                <ProductGrid limit={6} />
            </section>
        </div>
    );
}