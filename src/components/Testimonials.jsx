import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "The best matcha experience in Jakarta! The ceremonial pistachio matcha is absolutely divine. The quality and attention to detail is unmatched.",
      author: "Sarah L.",
      role: "Food Blogger",
      icon: "👩"
    },
    {
      quote: "Cozy atmosphere, amazing drinks, and incredible service. This is my new favorite spot for matcha in the city. Highly recommend the classic matcha latte!",
      author: "Rudi T.",
      role: "Coffee Enthusiast",
      icon: "👨"
    },
    {
      quote: "Authentic Japanese matcha right here in Jakarta! The quality is phenomenal and the scones pair perfectly with the drinks. A must-visit!",
      author: "Maya K.",
      role: "Tea Lover",
      icon: "👩"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-image">{testimonial.icon}</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-author">— {testimonial.author}</p>
            <p className="testimonial-role" style={{fontSize: '0.9rem', color: '#7ba05b', marginTop: '0.25rem'}}>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
