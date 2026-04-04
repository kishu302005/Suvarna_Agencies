import { Link } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: 'Smart Refrigerator', price: 1299, image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Premium Washing Machine', price: 899, image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Microwave Oven', price: 299, image: 'https://images.unsplash.com/photo-1585659722983-39cb8eca8da3?auto=format&fit=crop&q=80&w=400' },
];

export default function Home() {
    return (
        <div className="page home-page">
            <header className="hero">
                <div className="hero-content">
                    <h1>Welcome to Appliance Store</h1>
                    <p>Find the best smart appliances for your modern home</p>
                    <Link to="/category" className="btn btn-primary">Shop Now</Link>
                </div>
            </header>

            <section className="featured-section">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="image-container">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="price">${product.price}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-secondary">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}