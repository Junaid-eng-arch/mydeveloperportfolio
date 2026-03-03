import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />  
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;