import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import ProjectDetail from './components/portfolio/projects/ProjectDetail'
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.css";

// Layout component to maintain sidebar across all pages
const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        {children}
      </main>
    </div>
  );
};

// Main page component that contains all sections
const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio/:title" element={<ProjectDetail />} />
          {/* Add additional routes for other sections if needed */}
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;