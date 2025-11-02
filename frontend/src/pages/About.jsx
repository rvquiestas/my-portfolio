import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { ThemeProvider } from '../Context/ThemeContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'

const About = () => {
  useEffect(() => {
    document.body.classList.add("bg-bg");

    return () => {
      document.body.classList.remove("bg-bg");
    };
  }, []);

  return (
    <PageTransition key="about-content">
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar currentPage='About'/>
          <AboutMe />
          <Footer />
        </div>
      </ThemeProvider>
    </PageTransition>
  )
}

export default About