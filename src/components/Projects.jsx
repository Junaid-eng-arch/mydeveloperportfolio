import React from "react";

const projects = [
  {
    title: "Shadow Events (my-shadow-app.vercel.app)",
    subtitle: "Event management & bookings",
    url: "https://my-shadow-app.vercel.app",
    summary:
      "Guests explore and book experiences while admins receive, confirm, or cancel bookings in real time.",
    tags: [
      "Event discovery UI",
      "Slot/seat booking",
      "Admin approval & cancellation",
      "Live status updates",
      "Guest experience tracking",
      "Mobile-friendly flow",
    ],
    accent: "#00d4e8",
    highlight: true,
  },
   {
    title: "Paramedical Institute Website",
    subtitle: "Information portal",
    url: "https://hello-world-buddy-524.vercel.app",
    summary:
      "Showcases the institute, courses, facilities, and admission details so prospective students can explore easily.",
    tags: [
      "Course & syllabus pages",
      "About / vision / mission",
      "Admissions & eligibility",
      "Faculty highlights",
      "Gallery & labs overview",
      "Contact & enquiry form",
    ],
  },
  {
    title: "Travel Buddy",
    subtitle: "Trip planning & bookings",
    url: "https://myfrontendtravelwebsite.vercel.app",
    summary:
      "Curated travel packages, hotel search, and booking flows with clear pricing and destination highlights.",
    tags: [
      "Package listings",
      "Hotel & room search",
      "Booking & payments",
      "Itinerary highlights",
      "Location filters",
      "Responsive layouts",
    ],
  },
 
  {
    title: "Learning Hub (LLM)",
    subtitle: "AI study companion",
    summary:
      "LLM-powered hub for learning content with chat assistance, quick summaries, and quiz-style practice.",
    tags: [
      "Chat-based tutor",
      "Notes summarization",
      "Flashcards/quiz mode",
      "Prompt templates",
      "Vector search ready",
      "Progress tracking",
    ],
  },
  {
    title: "Sports Arena",
    subtitle: "Scores & fan engagement",
    summary:
      "Sports site delivering fixtures, live scores, standings, and team stats with a clean, fast UI.",
    tags: [
      "Live scores feed",
      "Match schedules",
      "Team & player stats",
      "Standings tables",
      "Ticket/merch CTAs",
      "Responsive dashboards",
    ],
  },
  {
    title: "travel buddy(mytravelwebsite-two.vercel.app)",
    subtitle: "Operations & billing",
    summary:
      "django app for travel agency to manage bookings, generate GST-inclusive bills, and track daily sales.",
    tags: [
      "Travel booking management",
      "KOT workflow",
      "expereince nature",
      "travekl package management",
      "season offers",
      "Role-based access",
    ],
  },
  {
    title: "School Tournament System",
    subtitle: "Sports event management",
    summary:
      "React + Django app to register players, create brackets, and keep scores visible to teams and admins.",
    tags: [
      "Team registrations",
      "Knockout brackets",
      "Match scheduling",
      "Live score inputs",
      "Result dashboards",
      "Announcements feed",
    ],
  },
];

function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        :root {
          --card-bg: #ffffff;
          --card-text: #0f172a;
          --muted: #6b7280;
          --pill: #f3f4f6;
          --border: #e5e7eb;
          --shadow: 0 12px 35px rgba(15, 23, 42, 0.12);
        }

        .projects-section {
          background: #f8fafc;
          color: var(--card-text);
          font-family: 'Inter', sans-serif;
          padding: 5rem 1.5rem;
        }

        .projects-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .projects-header h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          letter-spacing: 0.3px;
          font-weight: 700;
        }

        .projects-header span {
          color: #111827;
        }

        .projects-grid {
          display: grid;
          gap: 1.6rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.6rem 1.6rem 1.4rem;
          box-shadow: var(--shadow);
          transition: transform 0.18s ease, box-shadow 0.22s ease;
          min-height: 260px;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
        }

        .project-card.highlight {
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.2);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .project-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0b1327;
        }

        .project-subtitle {
          color: var(--muted);
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .project-summary {
          color: #4b5563;
          line-height: 1.6;
          margin: 0.35rem 0 0.9rem;
          font-size: 0.98rem;
        }

        .project-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          margin-bottom: 1rem;
          padding: 0.7rem 1.1rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          background: #0f172a;
          border-radius: 12px;
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        .project-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .project-tag {
          background: var(--pill);
          border: 1px solid var(--border);
          border-radius: 999px;
          color: #111827;
          padding: 0.32rem 0.85rem;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .project-tag:hover {
          background: #e5e7eb;
          border-color: #d1d5db;
        }

        @media (max-width: 640px) {
          .projects-section {
            padding: 4rem 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.1rem;
          }

          .project-card {
            padding: 1.2rem 1.15rem;
          }

          .project-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .project-title {
            font-size: 1.05rem;
          }

          .project-subtitle {
            white-space: normal;
            font-size: 0.9rem;
          }

          .project-summary {
            font-size: 0.95rem;
          }

          .project-cta {
            width: 100%;
          }

          .project-tags {
            gap: 0.45rem;
          }
        }
      `}</style>

      <section className="projects-section" id="projects">
        <div className="projects-wrapper">
          <div className="projects-header">
            <h2>Featured <span>Projects</span></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`project-card ${project.highlight ? "highlight" : ""}`}
                style={project.accent ? { borderColor: project.accent } : {}}
              >
                <div className="project-top">
                  <div className="project-title">{project.title}</div>
                  <div className="project-subtitle">{project.subtitle}</div>
                </div>
                <div className="project-summary">{project.summary}</div>
                {project.url && (
                  <a
                    className="project-cta"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit live {"->"}
                  </a>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
