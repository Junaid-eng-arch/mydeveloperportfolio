import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap');

        .hero {
          position: relative;
          min-height: calc(100vh - 88px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 4vw, 2rem) 5rem;
          background: #050d1a;
          color: #e8f4f8;
          font-family: 'Rajdhani', sans-serif;
        }

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
          background: #00d4e8;
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
          width: 100%;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.3s; }
        .delay-3 { transition-delay: 0.5s; }
        .delay-4 { transition-delay: 0.7s; }

        .hero-name {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2.6rem, 7vw, 5.5rem);
          font-weight: 900;
          letter-spacing: -1px;
          color: #e8f4f8;
          line-height: 1.05;
          text-shadow: 0 0 60px rgba(0, 212, 232, 0.15);
          margin: 0 0 1rem;
        }

        .hero-roles {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          font-weight: 600;
          color: #00d4e8;
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
          color: #8faabf;
          font-weight: 400;
          line-height: 1.7;
          max-width: 640px;
          margin: 0 auto 3rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          min-height: 48px;
        }

        .btn-primary {
          background: #00d4e8;
          color: #050d1a;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.9rem 2.1rem;
          border: none;
          border-radius: 10px;
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
          color: #e8f4f8;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.9rem 2.1rem;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          border-radius: 10px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }

        .btn-secondary:hover {
          border-color: #00d4e8;
          color: #00d4e8;
          transform: translateY(-2px);
        }

        .scroll-hint {
          position: absolute;
          bottom: 1.5rem;
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

        @media (max-width: 640px) {
          .hero {
            min-height: auto;
            padding: 3rem 1rem 4.5rem;
          }

          .hero-name {
            font-size: clamp(2.2rem, 12vw, 3rem);
          }

          .hero-roles {
            font-size: 0.95rem;
            letter-spacing: 0.8px;
            line-height: 1.6;
          }

          .hero-roles .sep {
            display: inline-block;
            margin: 0 0.35rem;
          }

          .hero-bio {
            font-size: 0.98rem;
            line-height: 1.65;
            margin-bottom: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            width: min(100%, 320px);
            margin: 0 auto;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            padding: 0.9rem 1.2rem;
          }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-grid" />

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
            <a className="btn-primary" href="#projects">View My Work</a>
            <a className="btn-secondary" href="#contact">Get In Touch</a>
          </div>
        </div>

        <div className="scroll-hint">∨</div>
      </section>
    </>
  );
}
