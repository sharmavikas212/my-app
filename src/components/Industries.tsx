export default function Industries() {
  const industries = [
    { name: "Restaurants", icon: "🍽️" },
    { name: "Painters", icon: "🎨" },
    { name: "Plumbers", icon: "🔧" },
    { name: "Migration Agents", icon: "✈️" },
    { name: "Removalists", icon: "🚚" },
    { name: "Landscapers", icon: "🌿" },
    { name: "Grocery Shops", icon: "🛒" },
    { name: "Electricians", icon: "⚡" },
    { name: "Concreters", icon: "🏗️" },
    { name: "Accountants", icon: "📊" },
    { name: "Breweries & Distilleries", icon: "🍺" },
    { name: "Barbers", icon: "✂️" },
    { name: "Cleaners", icon: "🧹" },
    { name: "Tilers", icon: "🧱" }
  ]

  return (
    <section className="industries">
      <div className="container">
        <h2>Industries We Serve</h2>
        <p>10+ years of experience across various industries</p>
        <div className="industries-grid">
          {industries.map((item, idx) => (
            <div key={idx} className="industry-item">
              <div className="industry-icon">{item.icon}</div>
              <div className="industry-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
