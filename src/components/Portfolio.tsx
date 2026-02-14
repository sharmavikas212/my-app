export default function Portfolio() {
  const projects = [
    {
      name: "White Lemon Productions",
      description: "Video production made easy and affordable",
      tags: ["Digital Marketing", "Logo Design", "Video Animation", "Website Design"],
      image: "🎬"
    },
    {
      name: "Section 44",
      description: "Premium handcrafted gin and single malt whisky distillery",
      tags: ["Ecommerce", "Logo Design", "Website Design", "Digital Marketing"],
      image: "🥃"
    },
    {
      name: "One Stop Removals",
      description: "Removal company based in Melbourne",
      tags: ["Logo Design", "Website Design", "Digital Marketing"],
      image: "🚚"
    },
    {
      name: "Migration Key",
      description: "Consultancy for education and migration to Australia",
      tags: ["Digital Marketing", "Logo Design", "Website Design"],
      image: "🗝️"
    },
    {
      name: "Coinbound Gaming",
      description: "Blockchain gaming investment platform",
      tags: ["Logo Design", "Digital Marketing", "Website Design"],
      image: "🎮"
    },
    {
      name: "CK Painting & Tiling",
      description: "Painting and tiling services in Hobart, Tasmania",
      tags: ["Logo Design", "Website Design", "Digital Marketing"],
      image: "🎨"
    },
    {
      name: "Brown Burgers",
      description: "American burger restaurant in Moonah",
      tags: ["Logo Design", "Website Design", "Digital Marketing"],
      image: "🍔"
    },
    {
      name: "BOS Brewery",
      description: "Family-owned craft brewery in Hobart, Tasmania",
      tags: ["Digital Marketing", "Ecommerce", "Logo Design", "Website Design"],
      image: "🍺"
    }
  ]

  return (
    <section id="works" className="portfolio">
      <div className="container">
        <h2>Latest Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary">View All Work</button>
      </div>
    </section>
  )
}
