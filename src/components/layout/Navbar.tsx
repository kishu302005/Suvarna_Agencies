import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, ChevronDown, Lightbulb, Wind, Coffee, Tv } from 'lucide-react';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Categories matching the database/routes
  const categories = [
    { name: 'Refrigerators', slug: 'refrigerators', icon: <Coffee size={24} />, items: ['Single Door', 'Double Door', 'Side by Side'] },
    { name: 'Washing Machines', slug: 'washing-machines', icon: <Wind size={24} />, items: ['Front Load', 'Top Load', 'Semi-Automatic'] },
    { name: 'Air Conditioners', slug: 'air-conditioners', icon: <Wind size={24} />, items: ['Split AC', 'Window AC', 'Inverter AC'] },
    { name: 'Kitchen Appliances', slug: 'kitchen-appliances', icon: <Coffee size={24} />, items: ['Microwaves', 'Mixer Grinders', 'Water Purifiers'] },
  ];

  return (
    <nav className="navbar" onMouseLeave={() => setIsMegaMenuOpen(false)}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Suvarna</Link>

        <div className="navbar-links">
          {/* Category Trigger */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
          >
            <Link to="/category" className="nav-link category-trigger">
              Categories <ChevronDown size={16} className={isMegaMenuOpen ? 'rotate' : ''} />
            </Link>
          </div>

          <Link to="/about" className="nav-link">About Us</Link>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search products..." className="search-input" />
          <button className="search-button"><Search size={18} /></button>
        </div>

        <div className="navbar-actions">
          <Link to="/login" className="nav-link"><User size={20} /><span>Login</span></Link>
          <Link to="/cart" className="nav-link"><ShoppingCart size={20} /><span>Cart</span></Link>
        </div>
      </div>

      {/* Mega Menu Panel */}
      {isMegaMenuOpen && (
        <div className="megamenu-panel">
          <div className="megamenu-container">
            {categories.map((cat) => (
              <div key={cat.name} className="megamenu-column">
                <Link to={`/category/${cat.slug}`} className="category-header" onClick={() => setIsMegaMenuOpen(false)}>
                  {cat.icon}
                  {cat.name}
                </Link>
                <ul className="subcategory-list">
                  {cat.items.map(item => (
                    <li key={item}>
                      <Link 
                        to={`/category/${cat.slug}`} 
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}