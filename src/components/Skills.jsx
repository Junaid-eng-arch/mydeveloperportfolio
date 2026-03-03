export default function Skills() {
  const skillCategories = [
    {
      icon: "⚛",
      title: "Frontend Development",
      highlight: false,
      skills: [
        "React.js", "JavaScript (ES6+)",
        "HTML5 & CSS3", "Tailwind CSS",
        "Redux / Context API",
        "REST API Integration",
        "Responsive Design",
      ],
    },
    {
      icon: "🐍",
      title: "Backend Development",
      highlight: true,
      skills: [
        "Django", "Django REST Framework",
        "Python", "PostgreSQL",
        "MySQL", "Redis",
        "JWT Authentication",
      ],
    },
    {
      icon: "☁",
      title: "DevOps & Deployment",
      highlight: false,
      skills: [
        "Docker", "Nginx",
        "AWS (EC2, S3)", "CI/CD Pipelines",
        "deployment",
        "Git & GitHub",
        "Github Desktop",
      ],
    },
    {
      icon: "🏨",
      title: "Hotel & Travel Projects",
      highlight: false,
      skills: [
        "Booking & Reservation Systems", "Room Management Dashboards",
        "Tour Package Listings", "Payment Integration",
        "Multi-language Support",
        "Google Maps Integration",
      ],
    },
    {
      icon: "🎓",
      title: "School & Education Projects",
      highlight: false,
      skills: [
        "Student Management Systems", "Online Admission Portals",
        "Timetable Schedulers", "Fee Management",
        "Parent–Teacher Portals",
        "Results & Grade Tracking",
      ],
    },
    {
      icon: "🛠",
      title: "Tools & Workflow",
      highlight: false,
      skills: [
        "VS Code", "Postman",
        "Figma (Handoff)", "GitHub Actions",
        "React Bootstrap", "Material UI",
        "Tailwind UI" ,
        "Google Stich design",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .skills-section {
          background: #071428;
          padding: 5rem 2rem;
          font-family: 'Rajdhani', sans-serif;
          color: #e8f4f8;
        }

        /* ── Header ── */
        .skills-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .skills-header h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #e8f4f8;
          letter-spacing: 1px;
        }

        .skills-header h2 span {
          color: #00d4e8;
        }

        .skills-header-underline {
          width: 60px;
          height: 3px;
          background: #00d4e8;
          margin: 0.8rem auto 0;
          border-radius: 2px;
        }

        /* ── Grid ── */
        .skills-grid {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ── Card ── */
        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.8rem;
          transition: border-color 0.25s, transform 0.2s;
        }

        .skill-card:hover {
          border-color: rgba(0, 212, 232, 0.3);
          transform: translateY(-3px);
        }

        .skill-card.highlight {
          border-color: rgba(0, 212, 232, 0.45);
          background: rgba(0, 212, 232, 0.04);
        }

        /* ── Card Header ── */
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.4rem;
        }

        .skill-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: rgba(0, 212, 232, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .skill-card.highlight .skill-icon {
          background: #00d4e8;
        }

        .skill-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #e8f4f8;
          letter-spacing: 0.3px;
        }

        /* ── Tags ── */
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #c5d8e8;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .skill-tag:hover {
          background: rgba(0, 212, 232, 0.1);
          border-color: rgba(0, 212, 232, 0.35);
          color: #00d4e8;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="skills-section" id="skills">
        {/* Header */}
        <div className="skills-header">
          <h2>Skills & <span>Expertise</span></h2>
          <div className="skills-header-underline" />
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className={`skill-card ${cat.highlight ? "highlight" : ""}`}>
              <div className="skill-card-header">
                <div className="skill-icon">{cat.icon}</div>
                <div className="skill-card-title">{cat.title}</div>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}