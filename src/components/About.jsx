import React from 'react';

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About the Matcha Pop-Up</h2>
      <div className="about-content">
        <p>
          A limited-time matcha pop-up collaboration with Emji Coffee Eatery bringing you
          ceremonial pistachio matcha and delightful scones to the heart of Jakarta.
        </p>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=600&fit=crop&q=80" 
            alt="Matcha preparation ceremony"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1536013041451-27b69f388b0c?w=800&h=600&fit=crop&q=80";
            }}
          />
        </div>
        <p>
          Our pop-up brings together the finest ceremonial-grade matcha with innovative flavors
          in the heart of Jakarta. Each drink is handcrafted with precision and care, creating
          an unforgettable matcha experience that honors traditional Japanese tea culture while
          embracing modern creativity.
        </p>
      </div>
    </section>
  );
}

export default About;
