import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TaskData from "./components/TaskData";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeComp, setActiveComp] = useState(false);
  const [activeNav, setActiveNav] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setActiveComp(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const handleNavbar = (component) => {
    setActiveNav(component);
    setActiveComp(component !== 'About');
    document.getElementById(component).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App w-screen min-h-screen m-0 p-0 flex flex-col">

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
              <Navbar handleNavbar={handleNavbar} activeComp={activeComp} activeNav={activeNav} />
                <About />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/project" element={<TaskData />} />
          </Routes>
        </div>
        <Footer />
        {/* <FooterBottom /> */}
    </div>
  );
}

export default App;