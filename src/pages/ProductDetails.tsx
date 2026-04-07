import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
    const { id } = useParams();

    return (
        <div className="page product-details-page">
            <div className="product-details-container">
                <div className="product-image-container">
                    <img 
                        src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800" 
                        alt="Product" 
                    />
                </div>
                <div className="product-info-container">
                    <h2>Smart Refrigerator Model {id}</h2>
                    <p className="price-large">$1299.00</p>
                    <p className="description">
                        This state-of-the-art refrigerator comes with smart cooling technology, 
                        spacious compartments, and energy-saving features. Perfect for any modern kitchen.
                    </p>
                    <div className="actions">
                        <button className="btn btn-primary lg">Add to Cart</button>
                        <Link to="/cart" className="btn btn-secondary lg">Go to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
