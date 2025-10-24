import React from 'react';

function Menu() {
  const menuItems = [
    {
      name: "Ceremonial Pistachio Matcha",
      description: "Rich, creamy, and handcrafted.",
      price: "$5.50",
      icon: "🥜🍵"
    },
    {
      name: "Classic Matcha Latte",
      description: "Smooth and refreshing, made with premium matcha.",
      price: "$4.50",
      icon: "🍵"
    },
    {
      name: "Special Scones",
      description: "Perfectly baked to complement your matcha.",
      price: "$3.00",
      icon: "🥐"
    }
  ];

  return (
    <section className="menu-section" id="menu">
      <h2>Signature Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-image">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;