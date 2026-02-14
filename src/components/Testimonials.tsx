export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sobin has designed our website and is an excellent choice for those looking for an experienced and professional digital marketing expert. He helped us improve our website and our SEO ranking quickly and effectively. I couldn't be happier with the results.",
      author: "Bhupinder Singh",
      company: "CK Painting and Tiling",
      rating: 5
    },
    {
      quote: "Professional, reliable, and results-driven. Sobin delivered exactly what we needed within our timeline and budget.",
      author: "Client Name",
      company: "Section 44 Distillery",
      rating: 5
    },
    {
      quote: "Outstanding service and genuine care for our business growth. Highly recommended!",
      author: "Manager",
      company: "Migration Key",
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">{testimonial.author}</p>
              <p className="company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
