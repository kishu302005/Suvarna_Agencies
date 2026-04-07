import './Footer.css';
import { Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="amazon-footer">
      {/* Back to top row */}
      <div className="footer-back-to-top" onClick={scrollToTop}>
        <span>Back to top</span>
      </div>

      {/* Main Links Area */}
      <div className="footer-main">
        <div className="footer-links-container">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
            <a href="#">Appliance Science</a>
          </div>

          <div className="footer-column">
            <h3>Connect with Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>

          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <a href="#">Sell on Store</a>
            <a href="#">Sell under Accelerator</a>
            <a href="#">Protect and Build Your Brand</a>
            <a href="#">Global Selling</a>
            <a href="#">Supply to Store</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Fulfilment by Store</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Pay on Merchants</a>
          </div>

          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <a href="#">Your Account</a>
            <a href="#">Returns Centre</a>
            <a href="#">Recalls and Product Safety</a>
            <a href="#">100% Purchase Protection</a>
            <a href="#">App Download</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>

      {/* Middle logo and region settings */}
      <div className="footer-middle">
        <a href="/" className="footer-logo">
          Appliance<span>.in</span>
        </a>
        <div className="footer-settings">
          <button className="footer-btn">
            <Globe size={16} /> English
          </button>
          <button className="footer-btn">
            🇮🇳 India
          </button>
        </div>
      </div>

      {/* Bottom Secondary Links */}
      <div className="footer-bottom">
        <div className="footer-bottom-grid">
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">SmartHomeBooks</span>
              <span className="item-desc">Books, art & collectibles</span>
            </a>
          </div>
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">Appliance Web Services</span>
              <span className="item-desc">Scalable Cloud Computing</span>
            </a>
          </div>
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">Audible</span>
              <span className="item-desc">Download Audio Books</span>
            </a>
          </div>
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">IMDb</span>
              <span className="item-desc">Movies, TV & Celebrities</span>
            </a>
          </div>
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">Shopbop</span>
              <span className="item-desc">Designer Fashion Brands</span>
            </a>
          </div>
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">Appliance Business</span>
              <span className="item-desc">Everything For Your Business</span>
            </a>
          </div>
          <div className="footer-bottom-item">
            <a href="#">
              <span className="item-title">Prime Music</span>
              <span className="item-desc">100 million songs, ad-free</span>
            </a>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="footer-copyright">
          <div className="copyright-links">
            <a href="#">Conditions of Use & Sale</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Interest-Based Ads</a>
          </div>
          <p>© 2026, Appliances Store Simulator, or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}
