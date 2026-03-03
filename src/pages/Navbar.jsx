import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["HOME", "GALLERY", "ABOUT", "PROJECTS"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Rajdhani:wght@500;600;700&display=swap');

        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.35s ease;
        }

        .navbar-root.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 48px;
          height: 68px;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(37, 99, 235, 0.10);
          transition: background 0.35s ease;
        }

        .navbar-root.scrolled .navbar-inner {
          background: rgba(255, 255, 255, 0.95);
        }

        /* ── Logo ── */
        .navbar-logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 1px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
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

        /* ── Nav Links ── */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-link {
          position: relative;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-decoration: none;
          color: #64748b;
          padding: 6px 14px;
          border-radius: 6px;
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

        /* ── Contact Button ── */
        .navbar-btn {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 9px 22px;
          border: 1.5px solid #2563eb;
          background: transparent;
          color: #2563eb;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
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

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .navbar-inner {
            padding: 0 20px;
          }
          .navbar-links {
            display: none;
          }
        }
      `}</style>

      <header className={`navbar-root ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <a href="#" className="navbar-logo">
            Alex <span>Design</span>
            <span className="navbar-logo-dot" />
          </a>

          {/* Links */}
          <nav>
            <ul className="navbar-links">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`navbar-link ${activeLink === link ? "active" : ""}`}
                    onClick={(e) => { e.preventDefault(); setActiveLink(link); }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <button className="navbar-btn">
            <span>CONTACT</span>
          </button>

        </div>
      </header>
    </>
  );
};

export default Navbar;