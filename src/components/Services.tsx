export default function Services() {
  const serviceCategories = [
    {
      title: "Logo Design & Branding",
      services: ["Logo Design", "Business Card Design", "Sticker Design", "Icon Design", "Banner Design"]
    },
    {
      title: "Digital Marketing",
      services: ["Search Engine Optimisation (SEO)", "Content Marketing", "Analytics and Tracking", "SEM & PPC", "Social Media Marketing"]
    },
    {
      title: "Website Design & Development",
      services: ["Figma Design", "Webflow Development", "Domain & Hosting", "Website Maintenance", "CMS Development"]
    },
    {
      title: "Video Animation & Editing",
      services: ["Lottie Animation", "Scriptwriting", "Motion Graphics", "Colour Grading", "Social Media Reels"]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="service-card">
              <h3>{category.title}</h3>
              <ul>
                {category.services.map((service, sIdx) => (
                  <li key={sIdx}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
