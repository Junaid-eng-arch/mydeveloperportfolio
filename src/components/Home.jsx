import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --cyan: #00d4e8;
          --cyan-dim: #00b8c9;
          --navy-deep: #050d1a;
          --navy-mid: #071428;
          --navy-light: #0a1f3d;
          --text-white: #e8f4f8;
          --text-muted: #8faabf;
        }

        body {
          background: var(--navy-deep);
          font-family: 'Rajdhani', sans-serif;
          color: var(--text-white);
          overflow-x: hidden;
        }

        /* ─── NAVBAR ─────────────────────────────────────── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 3rem;
          height: 64px;
          background: rgba(5, 13, 26, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 212, 232, 0.08);
        }

        .logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.3rem;
          font-weight: 900;
          letter-spacing: 1px;
          color: var(--text-white);
          text-decoration: none;
        }
        .logo span { color: var(--cyan); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-white);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-links a:hover { color: var(--cyan); }

        .nav-gallery-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-white) !important;
          font-size: 0.9rem;
        }

        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--cyan);
          color: var(--navy-deep) !important;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1px;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .resume-btn:hover {
          background: var(--cyan-dim);
          transform: translateY(-1px);
          color: var(--navy-deep) !important;
        }

        /* ─── HERO ───────────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 0 2rem;
        }

        /* Radial background glow */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 180, 220, 0.09) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 20% 80%, rgba(0, 80, 160, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(0, 60, 130, 0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Animated grid pattern */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 212, 232, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 232, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* Floating particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: var(--cyan);
          border-radius: 50%;
          opacity: 0;
          animation: float-up linear infinite;
        }

        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-20vh) translateX(30px); opacity: 0; }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        /* Staggered entrance animations */
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.3s; }
        .delay-3 { transition-delay: 0.5s; }
        .delay-4 { transition-delay: 0.7s; }
        .delay-5 { transition-delay: 0.9s; }

        .hero-name {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 900;
          letter-spacing: -1px;
          color: var(--text-white);
          line-height: 1.05;
          text-shadow: 0 0 60px rgba(0, 212, 232, 0.15);
          margin-bottom: 1rem;
        }

        .hero-roles {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          font-weight: 600;
          color: var(--cyan);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .hero-roles .sep {
          color: rgba(0, 212, 232, 0.4);
          margin: 0 0.75rem;
        }

        .hero-bio {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: var(--text-muted);
          font-weight: 400;
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 3rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--cyan);
          color: var(--navy-deep);
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.9rem 2.4rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 0 20px rgba(0, 212, 232, 0.25);
        }
        .btn-primary:hover {
          background: #00e8ff;
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0, 212, 232, 0.45);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-white);
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.9rem 2.4rem;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          border-radius: 6px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-secondary:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          transform: translateY(-2px);
        }

        /* Scroll chevron */
        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(0, 212, 232, 0.5);
          font-size: 1.4rem;
          animation: bounce 2s ease-in-out infinite;
          cursor: pointer;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <a className="logo" href="#">Vishnu<span>VS</span></a>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/experince">Experience</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="#">Accomplishments</a></li>
          <li><a href="#">Gallery</a></li>
          <li>
            <a href="#" className="nav-gallery-btn">
              <span>🖼</span> Full Gallery
            </a>
          </li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="#" className="resume-btn">
              ⬇ Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Grid overlay */}
        <div className="hero-grid" />

        {/* Floating particles */}
        <div className="particles">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i * 5.7 + 3) % 100}%`,
                animationDuration: `${8 + (i * 1.3) % 10}s`,
                animationDelay: `${(i * 0.7) % 8}s`,
                width: i % 3 === 0 ? "3px" : "2px",
                height: i % 3 === 0 ? "3px" : "2px",
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <h1 className={`hero-name fade-in delay-1 ${visible ? "visible" : ""}`}>
            Junaid P
          </h1>

          <p className={`hero-roles fade-in delay-2 ${visible ? "visible" : ""}`}>
            Python Full Stack Developer
            <span className="sep">|</span>
            freelance developer
            <span className="sep">|</span>
            Team Leader
          </p>

          <p className={`hero-bio fade-in delay-3 ${visible ? "visible" : ""}`}>
            As a passionate Full Stack Developer, I specialize in crafting dynamic web applications using Python, Django, and React. With a strong foundation in backend development and a keen eye for frontend design, I create seamless user experiences. My journey has been marked by successful freelance projects and internships, where I've honed my skills in building scalable solutions and leading teams to deliver impactful results.
          </p>

          <div className={`hero-actions fade-in delay-4 ${visible ? "visible" : ""}`}>
            <button className="btn-primary">View My Work</button>
            <button className="btn-secondary">Get In Touch</button>
          </div>
        </div>

        <div className="scroll-hint">∨</div>
      </section>
    </>
  );
}
