import React from 'react';

function CallToAction() {
  return (
    <section className="cta-section" id="cta">
      <h2>Visit Our Pop-Up</h2>
      <p>
        Visit our pop-up at Mega Kuningan and PIK, Jakarta. Order online or book private events now!
      </p>
      <div className="cta-buttons">
        <a href="#locations" className="cta-button primary">📍 Visit Pop-Up Locations</a>
        <a href="#order" className="cta-button secondary">🛒 Order Online</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
          📱 Follow on Instagram
        </a>
      </div>
    </section>
  );
}

export default CallToAction;