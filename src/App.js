import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.css"

const App = () => {
  return (
    <div>
     
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
      
    </div>
  );
};

export default App;
