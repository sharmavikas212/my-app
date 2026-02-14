export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 50,
      features: [
        "Logo Design",
        "SEO (Local Google Maps)",
        "Graphic Design",
        "Social Media Management",
        "Branding"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: 100,
      originalPrice: 200,
      discount: "50% off for first 4",
      features: [
        "Everything in Starter Plan",
        "SEO (Google & Bing)",
        "Google Analytics",
        "Website Maintenance",
        "Figma Design",
        "Website Development",
        "Domain & Hosting",
        "CMS Development",
        "3D Designs",
        "Google & Facebook Ads"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: 700,
      features: [
        "Everything in Starter & Growth",
        "24/7 Dedicated Team",
        "Complete Website Development",
        "CMS Development & Integration",
        "Lottie Animation",
        "All Social Media Management",
        "100% Guaranteed Leads",
        "Scriptwriting",
        "Video Production"
      ],
      popular: false
    }
  ]

  return (
    <section className="pricing">
      <div className="container">
        <h2>Comprehensive Service Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              {plan.discount && <p className="discount">{plan.discount}</p>}
              <div className="price">
                ${plan.price}
                {plan.originalPrice && <span className="original">${plan.originalPrice}</span>}
                <span>/month</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
