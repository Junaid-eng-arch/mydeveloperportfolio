import React from "react";
import profile from "../assets/profile.jpeg";

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .about-section {
          min-height: auto;
          background: linear-gradient(135deg, #0f1b2d, #13243d);
          color: #ffffff;
          padding: clamp(4rem, 8vw, 6rem) clamp(1rem, 6vw, 5rem);
          font-family: 'Rajdhani', sans-serif;
          overflow: hidden;
        }

        .about-shell {
          display: grid;
          grid-template-columns: minmax(240px, 340px) minmax(0, 1fr);
          align-items: center;
          gap: clamp(2rem, 6vw, 5rem);
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-visual {
          display: flex;
          justify-content: center;
        }

        .about-image-frame {
          width: min(100%, 320px);
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(145deg, #1c2b45, #0f1b2d);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          border: 4px solid rgba(255, 255, 255, 0.08);
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .about-content {
          min-width: 0;
        }

        .about-heading {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .about-text {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          line-height: 1.85;
          color: #cfd8e3;
          margin: 0 0 1.2rem;
          white-space: pre-line;
        }

        .about-quote {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin: 1.8rem 0 2.2rem;
        }

        .about-quote-bar {
          width: 5px;
          height: 48px;
          background: #00d4ff;
          border-radius: 999px;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .about-quote-text {
          margin: 0;
          font-style: italic;
          color: #b0c4de;
          line-height: 1.65;
        }

        .about-subheading {
          margin: 0 0 1rem;
          font-size: clamp(1.35rem, 2.4vw, 1.9rem);
          color: #ffffff;
        }

        .about-affiliations {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .about-pill {
          padding: 0.95rem 1.3rem;
          background: rgba(30, 47, 77, 0.95);
          color: #00d4ff;
          border: 1px solid rgba(0, 212, 255, 0.18);
          border-radius: 999px;
          font-size: 0.98rem;
          font-weight: 600;
          cursor: default;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .about-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 212, 255, 0.35);
        }

        @media (max-width: 900px) {
          .about-shell {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .about-visual {
            order: -1;
          }

          .about-image-frame {
            width: min(72vw, 280px);
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 3.5rem 1rem;
          }

          .about-shell {
            gap: 1.5rem;
          }

          .about-heading {
            font-size: clamp(1.8rem, 9vw, 2.4rem);
            text-align: center;
          }

          .about-text {
            font-size: 0.98rem;
            line-height: 1.75;
          }

          .about-quote {
            margin: 1.4rem 0 2rem;
          }

          .about-subheading {
            text-align: center;
          }

          .about-affiliations {
            flex-direction: column;
          }

          .about-pill {
            width: 100%;
            text-align: center;
            border-radius: 14px;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-shell">
          <div className="about-visual">
            <div className="about-image-frame">
              <img src={profile} alt="Profile portrait" className="about-image" />
            </div>
          </div>

          <div className="about-content">
            <h1 className="about-heading">Who I Am</h1>

            <p className="about-text">
              As a Full Stack Developer with one year of hands-on experience through freelancing and internships, I have built and deployed dynamic web applications using Python, Django, and React.
              {"\n\n"}
              My journey began with backend systems, RESTful APIs, and database design, where I learned the importance of clean, secure, and scalable code. Through freelance projects and internship opportunities, I've worked closely with clients and teams to transform ideas into functional, user-friendly applications.
              {"\n\n"}
              On the frontend, I use React to build responsive and interactive user interfaces that deliver seamless user experiences. On the backend, I focus on performance optimization, authentication systems, and structured database design.
              {"\n\n"}
              These experiences have strengthened not only my technical skills but also my communication, problem-solving, and project management abilities.
            </p>

            <div className="about-quote">
              <span className="about-quote-bar" />
              <p className="about-quote-text">"Development is not a product - it's a practice."</p>
            </div>

            <h2 className="about-subheading">Current Affiliations</h2>

            <div className="about-affiliations">
              <button type="button" className="about-pill">Able folks Solutions</button>
              <button type="button" className="about-pill">Daxis Solutions</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
