import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 Phone: +62 XXX-XXXX-XXXX</p>
            <p>📧 Email: hello@goody2shoes-matcha.com</p>
          </div>
          <div className="footer-section">
            <h3>Locations</h3>
            <p>📍 Mega Kuningan, Jakarta</p>
            <p>📍 PIK (Pantai Indah Kapuk), Jakarta</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📱</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Goody2Shoes Matcha. All rights reserved.</p>
          <p>🍵 Experience artisanal matcha like never before.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;