export default function WhyChooseMe() {
  const reasons = [
    {
      number: "1",
      title: "Affordable Pricing Plans",
      description: "Get top notch digital marketing without breaking your bank. Services starting at just $50/month."
    },
    {
      number: "2",
      title: "AI-Powered Efficiency",
      description: "Harness advanced AI tools for faster and more accurate results. Handle up to 80% of workload efficiently."
    },
    {
      number: "3",
      title: "No Contracts, No Risks",
      description: "Experience our services with complete flexibility. Walk away anytime if unsatisfied with no risk guarantee."
    },
    {
      number: "4",
      title: "Personalized Attention",
      description: "Work directly with experts who understand your needs. Tailored services to achieve your specific goals."
    },
    {
      number: "5",
      title: "Comprehensive Service Offering",
      description: "All your digital marketing needs under one roof. No-code platforms specializing in modern web development."
    },
    {
      number: "6",
      title: "Local Expertise",
      description: "10+ years of experience with local Australian businesses. Deep understanding of market dynamics."
    }
  ]

  return (
    <section className="why-choose">
      <div className="container">
        <h2>Why Choose Me?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-card">
              <div className="number">{reason.number}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
