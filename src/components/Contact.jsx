import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .contact-section {
          background: #071428;
          padding: 5rem 2rem;
          font-family: 'Rajdhani', sans-serif;
          color: #e8f4f8;
        }

        /* ── Header ── */
        .contact-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .contact-header h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #e8f4f8;
          letter-spacing: 1px;
        }

        .contact-header h2 span {
          color: #00d4e8;
        }

        .contact-header-underline {
          width: 60px;
          height: 3px;
          background: #00d4e8;
          margin: 0.8rem auto 1.2rem;
          border-radius: 2px;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #8faabf;
          font-weight: 400;
          margin-bottom: 3rem;
        }

        /* ── Layout ── */
        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        /* ── Left: Form Card ── */
        .contact-form-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 2.2rem;
        }

        .contact-form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e8f4f8;
          margin-bottom: 1.8rem;
        }

        .form-group {
          margin-bottom: 1.3rem;
        }

        .form-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: #c5d8e8;
          margin-bottom: 0.5rem;
          letter-spacing: 0.3px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          color: #e8f4f8;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #4a6a82;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(0, 212, 232, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .send-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: #00d4e8;
          color: #071428;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.85rem 2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 0 20px rgba(0, 212, 232, 0.2);
        }

        .send-btn:hover {
          background: #00e8ff;
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0, 212, 232, 0.4);
        }

        .send-btn svg {
          width: 18px;
          height: 18px;
        }

        .success-msg {
          margin-top: 1rem;
          color: #00d4e8;
          font-size: 0.95rem;
          font-weight: 600;
        }

        /* ── Right: Connect Cards ── */
        .contact-right h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e8f4f8;
          margin-bottom: 1.2rem;
        }

        .contact-info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 1.1rem 1.4rem;
          transition: border-color 0.2s;
          text-decoration: none;
        }

        .contact-info-card:hover {
          border-color: rgba(0, 212, 232, 0.3);
        }

        .contact-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(0, 212, 232, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.2rem;
        }

        .contact-info-label {
          font-size: 0.88rem;
          color: #8faabf;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }

        .contact-info-value {
          font-size: 1rem;
          color: #e8f4f8;
          font-weight: 600;
        }

        /* ── Collaboration Box ── */
        .collab-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 1.4rem 1.6rem;
        }

        .collab-box h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e8f4f8;
          margin-bottom: 0.6rem;
        }

        .collab-box p {
          font-size: 0.96rem;
          color: #8faabf;
          font-weight: 400;
          line-height: 1.65;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        {/* Header */}
        <div className="contact-header">
          <h2>Get in <span>Touch</span></h2>
          <div className="contact-header-underline" />
          <p className="contact-subtitle">Interested in working together? Let's talk.</p>
        </div>

        <div className="contact-container">
          {/* Left: Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="send-btn" type="submit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>

              {sent && <p className="success-msg">✓ Message sent successfully!</p>}
            </form>
          </div>

          {/* Right: Connect */}
          <div className="contact-right">
            <h3>Connect With Me</h3>

            <div className="contact-info-cards">
              <a href="mailto:vishnuxrobot@gmail.com" className="contact-info-card">
                <div className="contact-icon-wrap">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">pj399933@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/vishnu-vijayan-vs" target="_blank" rel="noreferrer" className="contact-info-card">
                <div className="contact-icon-wrap">💼</div>
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <div className="contact-info-value">linkedin.com/in/vishnu-vijayan-vs</div>
                </div>
              </a>

              <a href="tel:+918075840544" className="contact-info-card">
                <div className="contact-icon-wrap">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">+91 9656586984</div>
                </div>
              </a>
            </div>

            <div className="collab-box">
              <h4>Open for Collaboration</h4>
              <p>
                Whether you're looking for security consulting, training, or collaborative
                research, I'm always open to discussing new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}