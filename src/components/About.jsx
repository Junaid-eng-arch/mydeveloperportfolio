import React from "react";
import profile from "../assets/profile.jpeg"; // change extension if needed

const About = () => {
  const styles = {
    section: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1b2d, #13243d)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      padding: "80px 10%",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "80px",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    left: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    imageWrapper: {
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "#1c2b45",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    right: {
      flex: 1.5,
    },
    heading: {
      fontSize: "42px",
      marginBottom: "25px",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#cfd8e3",
      marginBottom: "20px",
    },
    quoteContainer: {
      display: "flex",
      alignItems: "center",
      margin: "30px 0",
    },
    quoteBar: {
      width: "5px",
      height: "40px",
      backgroundColor: "#00d4ff",
      marginRight: "15px",
    },
    quoteText: {
      fontStyle: "italic",
      color: "#b0c4de",
    },
    subHeading: {
      marginTop: "40px",
      marginBottom: "20px",
      fontSize: "28px",
    },
    affiliations: {
      display: "flex",
      gap: "20px",
    },
    button: {
      padding: "15px 30px",
      backgroundColor: "#1e2f4d",
      color: "#00d4ff",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* LEFT IMAGE */}
        <div style={styles.left}>
          <div style={styles.imageWrapper}>
            <img src={profile} alt="Profile" style={styles.image} />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div style={styles.right}>
          <h1 style={styles.heading}>Who I Am</h1>

          <p style={styles.paragraph}>
            As a Full Stack Developer with one year of hands-on experience through freelancing and internships, I have built and deployed dynamic web applications using Python, Django, and React. My journey began with developing backend systems, creating RESTful APIs, and managing databases, where I learned the importance of writing clean, secure, and scalable code.

Through freelance projects and internship opportunities, I’ve worked closely with clients and teams to transform ideas into functional, user-friendly applications. On the frontend, I use React to build responsive and interactive user interfaces that deliver seamless user experiences. On the backend, I focus on performance optimization, authentication systems, and structured database design.

These experiences have strengthened not only my technical skills but also my communication, problem-solving, and project management abilities. I am passionate about continuous learning, improving my development practices, and contributing to meaningful software solutions.
          </p>

          <p style={styles.paragraph}>
           
          </p>

          <div style={styles.quoteContainer}>
            <span style={styles.quoteBar}></span>
            <p style={styles.quoteText}>
              "Development is not a product — it's a practice."
            </p>
          </div>

          <h2 style={styles.subHeading}>Current Affiliations</h2>

          <div style={styles.affiliations}>
            <button style={styles.button}>Able folks Solutions</button>
            <button style={styles.button}>daxis Solutions</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;