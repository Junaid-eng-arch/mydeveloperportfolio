import { useState } from "react";

const experiences = [
  {
    title: "Freelance website developer",
    company: "Ablefolks solutions",
    period: "2025–Present",
    points: [
      "Designed and developed responsive websites for small businesses using React and Django",
      "Implemented user authentication and database management for client projects",
      "Collaborated with clients to gather requirements and deliver tailored web solutions",
      "Optimized website performance and SEO to enhance user experience and visibility",
      "Provided ongoing maintenance and support for deployed websites",
    ],
  },
  {
    title: "Junior full stack developer",
    company: "Daxis solutions",
    period: "2025–2026",
    points: [
      "A travel website provides users with a seamless platform to explore destinations, plan trips, and make bookings all in one place. It allows travelers to discover popular locations through curated guides, detailed itineraries, and rich visuals. Users can search and book flights, hotels, and holiday packages while accessing real-time pricing and availability. The platform often includes personalized recommendations based on user preferences, along with reviews and ratings to help make informed decisions. Integrated tools like Google Maps enhance navigation and trip planning, while secure payment systems ensure safe transactions. Additionally, features such as user accounts, saved favorites, multilingual support, and customer assistance make the overall travel experience convenient, efficient, and enjoyable.",
    ],
  },
  // {
  //   title: "Security Analyst & Pentest Lead",
  //   company: "Zilicon Technologies",
  //   period: "2020–2021",
  //   points: [
  //     "Led penetration testing engagements across web, mobile, and network environments",
  //     "Conducted vulnerability assessments and risk analysis for multiple enterprise clients",
  //     "Developed and maintained security testing frameworks and internal toolsets",
  //     "Coordinated with development teams to integrate secure coding practices",
  //     "Produced detailed security assessment reports and presented findings to stakeholders",
  //   ],
  // },
  // {
  //   title: "Penetration Tester",
  //   company: "Zilicon Technologies",
  //   period: "2019–2020",
  //   points: [
  //     "Performed manual and automated penetration tests on web applications and infrastructure",
  //     "Identified and documented security vulnerabilities using industry-standard methodologies",
  //     "Assisted in the development of security policies and procedures",
  //     "Supported incident response activities and forensic investigations",
  //     "Contributed to threat intelligence gathering and analysis",
  //   ],
  // },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .exp-section {
          background: #071428;
          padding: 5rem 2rem;
          font-family: 'Rajdhani', sans-serif;
          color: #e8f4f8;
          min-height: 100vh;
        }

        /* ── Section Header ── */
        .exp-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .exp-header h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #e8f4f8;
          letter-spacing: 1px;
        }

        .exp-header h2 span {
          color: #00d4e8;
        }

        .exp-header-underline {
          width: 60px;
          height: 3px;
          background: #00d4e8;
          margin: 0.8rem auto 0;
          border-radius: 2px;
        }

        /* ── Layout ── */
        .exp-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* ── Left Tab List ── */
        .exp-tabs {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .exp-tab {
          padding: 1rem 1.2rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s, border-left 0.2s;
          border-left: 3px solid transparent;
          background: transparent;
        }

        .exp-tab:hover {
          background: rgba(0, 212, 232, 0.05);
        }

        .exp-tab.active {
          background: rgba(255, 255, 255, 0.07);
          border-left: 3px solid #00d4e8;
        }

        .exp-tab-title {
          font-size: 1rem;
          font-weight: 700;
          color: #e8f4f8;
          margin-bottom: 0.2rem;
        }

        .exp-tab.active .exp-tab-title {
          color: #ffffff;
        }

        .exp-tab-meta {
          font-size: 0.88rem;
          font-weight: 400;
          color: #8faabf;
        }

        /* ── Right Detail Panel ── */
        .exp-detail {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 212, 232, 0.1);
          border-radius: 8px;
          padding: 2rem 2.2rem;
        }

        .exp-detail-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e8f4f8;
          margin-bottom: 0.4rem;
        }

        .exp-detail-meta {
          font-size: 1rem;
          font-weight: 600;
          color: #00d4e8;
          margin-bottom: 1.8rem;
        }

        .exp-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exp-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 1rem;
          color: #c5d8e8;
          line-height: 1.6;
          font-weight: 400;
        }

        .exp-points li::before {
          content: '▸';
          color: #00d4e8;
          font-size: 0.9rem;
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .exp-container {
            grid-template-columns: 1fr;
          }
          .exp-tabs {
            flex-direction: row;
            overflow-x: auto;
            gap: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .exp-tab {
            min-width: 200px;
            border-left: none;
            border-bottom: 3px solid transparent;
          }
          .exp-tab.active {
            border-left: none;
            border-bottom: 3px solid #00d4e8;
          }
        }
      `}</style>

      <section className="exp-section" id="experience">
        {/* Header */}
        <div className="exp-header">
          <h2>Professional <span>Experience</span></h2>
          <div className="exp-header-underline" />
        </div>

        <div className="exp-container">
          {/* Left Tabs */}
          <div className="exp-tabs">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="exp-tab-title">{exp.title}</div>
                <div className="exp-tab-meta">{exp.company} • {exp.period}</div>
              </div>
            ))}
          </div>

          {/* Right Detail */}
          <div className="exp-detail">
            <h3 className="exp-detail-title">{experiences[active].title}</h3>
            <p className="exp-detail-meta">
              {experiences[active].company} • {experiences[active].period}
            </p>
            <ul className="exp-points">
              {experiences[active].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}