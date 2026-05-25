import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Rajdhani:wght@500;600;700&display=swap');

        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          transition: box-shadow 0.35s ease, background 0.35s ease;
        }

        .navbar-root.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0 clamp(1rem, 4vw, 4rem);
          min-height: 88px;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(37, 99, 235, 0.12);
          position: relative;
        }

        .navbar-root.scrolled .navbar-inner {
          background: rgba(255, 255, 255, 0.95);
        }

        .navbar-logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 1px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        .navbar-logo span {
          color: #2563eb;
        }

        .navbar-logo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          display: inline-block;
          margin-left: 3px;
          margin-bottom: 8px;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
          justify-content: center;
        }

        .navbar-link {
          position: relative;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 1.7px;
          text-decoration: none;
          color: #334155;
          padding: 12px 18px;
          border-radius: 10px;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .navbar-link:hover {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.06);
        }

        .navbar-link.active {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
        }

        .navbar-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          background: #2563eb;
          border-radius: 2px;
        }

        .navbar-btn {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 1.6px;
          padding: 12px 26px;
          border: 1.8px solid #2563eb;
          background: transparent;
          color: #2563eb;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .navbar-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #2563eb;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
          z-index: 0;
        }

        .navbar-btn:hover::before {
          transform: scaleX(1);
        }

        .navbar-btn:hover {
          color: #fff;
        }

        .navbar-btn span {
          position: relative;
          z-index: 1;
        }

        .navbar-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 12px;
          background: rgba(37, 99, 235, 0.05);
          color: #2563eb;
          cursor: pointer;
          flex-shrink: 0;
        }

        .navbar-toggle svg {
          width: 22px;
          height: 22px;
        }

        .navbar-mobile-panel {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(37, 99, 235, 0.12);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .navbar-mobile-panel.open {
          display: block;
        }

        .navbar-mobile-links {
          display: grid;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .navbar-mobile-link {
          display: block;
          padding: 0.9rem 1rem;
          border-radius: 12px;
          text-decoration: none;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 800;
          letter-spacing: 1.4px;
          color: #334155;
          background: rgba(15, 23, 42, 0.03);
        }

        .navbar-mobile-link.active {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
        }

        .navbar-mobile-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 0.85rem;
          padding: 0.95rem 1rem;
          border-radius: 12px;
          text-decoration: none;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 800;
          letter-spacing: 1.4px;
          color: #ffffff;
          background: #2563eb;
          border: 1px solid #2563eb;
        }

        @media (max-width: 960px) {
          .navbar-links,
          .navbar-btn {
            display: none;
          }

          .navbar-toggle {
            display: inline-flex;
          }

          .navbar-inner {
            min-height: 76px;
          }
        }

        @media (min-width: 961px) {
          .navbar-mobile-panel {
            display: none !important;
          }
        }
      `}</style>

      <header className={`navbar-root ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" onClick={() => handleLinkClick("HOME")}>
            Alex <span>Design</span>
            <span className="navbar-logo-dot" />
          </a>

          <nav aria-label="Primary">
            <ul className="navbar-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`navbar-link ${activeLink === label ? "active" : ""}`}
                    onClick={() => handleLinkClick(label)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="navbar-btn" href="#contact" onClick={() => handleLinkClick("CONTACT")}>
            <span>CONTACT</span>
          </a>

          <button
            type="button"
            className="navbar-toggle"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>

          <div className={`navbar-mobile-panel ${mobileOpen ? "open" : ""}`}>
            <ul className="navbar-mobile-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`navbar-mobile-link ${activeLink === label ? "active" : ""}`}
                    onClick={() => handleLinkClick(label)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="navbar-mobile-cta" href="#contact" onClick={() => handleLinkClick("CONTACT")}>
              CONTACT
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
