import React from 'react';

function Brand() {
  return (
    <section className="brand-section" id="brand">
      <div className="brand-content">
        <div className="brand-logo">
          <img 
            src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop&q=80" 
            alt="Goody2Shoes Matcha Logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%237ba05b' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='%23fff'%3E🍵%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
        <h1>Goody2Shoes Matcha</h1>
        <p>Experience artisanal matcha like never before at Jakarta's premier matcha pop-up</p>
      </div>
    </section>
  );
}

export default Brand;
