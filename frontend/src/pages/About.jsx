import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { ThemeProvider } from '../Context/ThemeContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Container from '../components/Container';
import chibiImg from '../assets/img/rv-sti-chibi.png';
import Title from '../components/Title';
import { FaChevronRight } from "react-icons/fa";

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
            <section id="section" className="grow">
              <Container>
                <main className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 sm:mt-8 md:mt-12 pb-16">

                  {/* Left Side - Image */}
                  <div className="flex justify-center lg:justify-start lg:shrink-0">
                    <img
                      alt="Profile chibi character"
                      className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto object-contain"
                      src={chibiImg}
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div className='flex-1 space-y-6'>
                    <Title text1={"About Me"} />
                    
                    <div className='space-y-4'>
                      <h2 className='text-secondary font-semibold text-xl lg:text-2xl'>
                        Aspiring Software Engineer (Web Development)
                      </h2>
                      
                      <p className='text-primary text-base lg:text-lg leading-relaxed'>
                        Hello! I'm Raphael Vincent Quiestas, passionate about building modern and user-friendly web applications.
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-3 pt-2'>
                      <div className='flex items-start'>
                        <FaChevronRight className='text-secondary mt-1 shrink-0 mr-3'/>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0'>
                          <span className='text-primary font-bold sm:mr-2 min-w-20'>Address:</span>
                          <span className='text-primary text-sm sm:text-base'>Santa Rosa City, Laguna (Philippines)</span>
                        </div>
                      </div>
                      
                      <div className='flex items-start'>
                        <FaChevronRight className='text-secondary mt-1 shrink-0 mr-3'/>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0'>
                          <span className='text-primary font-bold sm:mr-2 min-w-20'>E-mail:</span>
                          <span className='text-primary text-sm sm:text-base'>rvquiestas@gmail.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Beyond Coding Section */}
                    <div className='space-y-3 pt-4'>
                      <h3 className='text-primary text-lg lg:text-xl font-semibold'>
                        Beyond Coding
                      </h3>   
                      
                      <p className='text-primary text-sm lg:text-base leading-relaxed'>
                        When I'm not writing code, I enjoy biking, watching series or movies, listening to music, exploring new technologies, and learning from successful developers. Soon, I also plan to share my journey and experiences in web development through social media content.
                      </p>   
                    </div>
                  </div>
                </main>
              </Container>
            </section>
          <Footer />
        </div>
      </ThemeProvider>
    </PageTransition>
  )
}

export default About