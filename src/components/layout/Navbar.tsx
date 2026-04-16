import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, ChevronDown, Lightbulb, Wind, Coffee, Tv } from 'lucide-react';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Example data structure for the menu
  const categories = [
    { name: 'Lights', icon: <Lightbulb size={24} />, items: ['Bulbs', 'Battens', 'Table Lamps'] },
    { name: 'Fans', icon: <Wind size={24} />, items: ['Ceiling Fans', 'Table Fans', 'Exhaust Fans'] },
    { name: 'Appliances', icon: <Coffee size={24} />, items: ['Mixers', 'Irons', 'Air Coolers'] },
    { name: 'TV & Audio', icon: <Tv size={24} />, items: ['Smart TVs', 'Speakers', 'Soundbars'] },
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
            <button className="nav-link category-trigger">
              Categories <ChevronDown size={16} className={isMegaMenuOpen ? 'rotate' : ''} />
            </button>
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
                <div className="category-header">
                  {cat.icon}
                  {cat.name}
                </div>
                <ul className="subcategory-list">
                  {cat.items.map(item => (
                    <li key={item}><Link to={`/category/${item.toLowerCase()}`}>{item}</Link></li>
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