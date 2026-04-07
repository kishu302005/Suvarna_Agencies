import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Appliances Store
        </Link>
        
        <div className="navbar-links">
          <Link to="/category" className="nav-link">Categories</Link>
          <Link to="/login" className="nav-link">
            <User size={20} />
            <span>Login</span>
          </Link>
          <Link to="/cart" className="nav-link">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
