export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Ready to Work Together?</h2>
        <p>Let's discuss your project and create something amazing together.</p>
        <div className="contact-info">
          <a href="tel:0421862263" className="contact-link">📱 0421 862 263</a>
          <a href="mailto:info@brainstack.au" className="contact-link">✉️ info@brainstack.au</a>
        </div>
        <div className="contact-actions">
          <button className="btn btn-primary">Book A Strategy Call</button>
          <button className="btn btn-secondary">Send Enquiry</button>
        </div>
      </div>
    </section>
  )
}
