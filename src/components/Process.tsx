export default function Process() {
  const steps = [
    { number: "01", title: "Discovery" },
    { number: "02", title: "UX/Wireframing" },
    { number: "03", title: "Web Design" },
    { number: "04", title: "Webflow Development" },
    { number: "05", title: "Analytics Setup" }
  ]

  return (
    <section className="process">
      <div className="container">
        <h2>My Process</h2>
        <p>Tried & tested, the fastest path to the perfect website. Zero email thread BS and meeting hysteria.</p>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
