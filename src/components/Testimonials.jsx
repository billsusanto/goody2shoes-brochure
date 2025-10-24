import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "The best matcha experience in Jakarta!",
      author: "Sarah L.",
      icon: "👩"
    },
    {
      quote: "Cozy vibe, amazing drinks.",
      author: "Rudi T.",
      icon: "👨"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-image">{testimonial.icon}</div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;