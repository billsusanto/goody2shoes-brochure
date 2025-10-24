import React from 'react';

function Menu() {
  const menuItems = [
    {
      name: "Ceremonial Pistachio Matcha",
      description: "Rich, creamy, and handcrafted with premium ceremonial-grade matcha and roasted pistachio. Our signature drink.",
      price: "Rp 55.000",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=400&fit=crop&q=80"
    },
    {
      name: "Classic Matcha Latte",
      description: "Smooth and refreshing, made with premium Japanese matcha powder and perfectly steamed milk.",
      price: "Rp 45.000",
      image: "https://images.unsplash.com/photo-1536013041451-27b69f388b0c?w=600&h=400&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop&q=80"
    },
    {
      name: "Artisan Scones",
      description: "Freshly baked daily, perfectly flaky scones with subtle sweetness that complement your matcha.",
      price: "Rp 30.000",
      image: "https://images.unsplash.com/photo-1612182062223-e5e705ab46be?w=600&h=400&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1562440499-64c9a740f190?w=600&h=400&fit=crop&q=80"
    }
  ];

  return (
    <section className="menu-section" id="menu">
      <h2>Signature Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-image">
              <img 
                src={item.image} 
                alt={item.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.fallback;
                }}
              />
            </div>
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
