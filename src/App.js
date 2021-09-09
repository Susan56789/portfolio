import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Copyright from 'react-copyright';


export default function App() {
  const mystyle={
    backgroundcolor: "navyblue",
    color: "white",
    align: "centre"
    }

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Copyright  style={mystyle}/>
    </main>
  );
}
