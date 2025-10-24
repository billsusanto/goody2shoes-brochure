import React from 'react';

function CallToAction() {
  return (
    <section className="cta-section" id="cta">
      <h2>Visit Our Pop-Up</h2>
      <p>
        Experience the finest matcha at our pop-up locations in Mega Kuningan and PIK, Jakarta. 
        Order online for delivery or book your visit today!
      </p>
      <div className="cta-buttons">
        <a href="#about" className="cta-button primary">
          Find Our Locations
        </a>
        <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
          Order via WhatsApp
        </a>
        <a href="https://instagram.com/goody2shoes_stores" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
