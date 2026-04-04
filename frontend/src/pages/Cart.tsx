import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <div className="page cart-page">
            <h2>Your Shopping Cart</h2>
            <div className="cart-container">
                <div className="cart-items">
                    <div className="cart-item">
                        <img src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=200" alt="Item" />
                        <div className="item-details">
                            <h3>Smart Refrigerator</h3>
                            <p>Quantity: 1</p>
                        </div>
                        <div className="item-price">$1299.00</div>
                    </div>
                </div>
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>$1299.00</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>$1299.00</span>
                    </div>
                    <button className="btn btn-primary full-width">Proceed to Checkout</button>
                    <Link to="/" className="continue-shopping">Continue Shopping</Link>
                </div>
            </div>
        </div>
    )
}
