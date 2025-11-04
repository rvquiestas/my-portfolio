import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { ThemeProvider } from '../Context/ThemeContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Title from '../components/Title'
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa"
import Experience from '../components/Experience'
import ToolsAndFrameworks from '../components/ToolsAndFrameworks'

const Resume = () => {
  useEffect(() => {
    document.body.classList.add("bg-bg");

    return () => {
      document.body.classList.remove("bg-bg");
    };
  }, []);

  const handleViewResume = () => {
    window.open('/rv-resume.pdf', '_blank');
  };

  const onButtonClick = () => {
    const pdfUrl = "/rv-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "rv-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition key="resume-content">
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar currentPage='Resume'/>
          
          <section className="grow">
            <Container>
              <main>
                {/* Header Section with Title and Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-4 sm:mt-8 md:mt-12 min-h-[10vh]">
                  <Title text1={"Resume"} />
                  
                  {/* Buttons Container */}
                  <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto'>
                    <button
                      onClick={handleViewResume}
                      className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-black border border-primary font-semibold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg transition duration-300 hover:scale-105 shadow-lg text-sm sm:text-base whitespace-nowrap"
                    >
                      <span>View Resume</span>
                      <FaExternalLinkAlt className="sm:w-4 sm:h-4" />
                    </button>
                    
                    <button
                      onClick={onButtonClick}
                      className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-black border border-primary font-semibold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg transition duration-300 hover:scale-105 shadow-lg text-sm sm:text-base whitespace-nowrap"
                    >
                      <span>Download Resume</span>
                      <FaDownload className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Experience Section */}
                <Experience 
                  expTitle={"Work Experience"} 
                  jobTitle={"IT Intern"} 
                  jobCompanyAndLoc={"PCM Cosmetic Products Trading | Dasmariñas, Cavite"} 
                  task1={"Developed a task planner website, improving task management efficiency for office staff."} 
                  task2={"Gained hands-on experience in maintaining and troubleshooting office equipment, including cleaning and resolving issues with printers and CCTV systems."} 
                  date={"Feb 2025 - May 2025"}
                />

                <Experience 
                  expTitle={"Leadership Experience"} 
                  jobTitle={"Capstone Project Leader"} 
                  jobCompanyAndLoc={"STI College Calamba | Calamba, Laguna"} 
                  task1={"Led a team of 4 in designing and developing a fully functional MERN Stack e-commerce platform."} 
                  task2={"Implemented product management, secure user authentication, and mobile-responsive design, resulting in a seamless shopping experience."} 
                  date={"2023 - 2024"}
                />

                <Experience 
                  expTitle={"Education"} 
                  jobTitle={"Bachelor of Science in Information Technology"} 
                  jobCompanyAndLoc={"STI College Calamba | Calamba, Laguna"} 
                  task1={"Cum Laude | GWA: 1.5"} 
                  task2={"Courses: Web Development, Mobile Application Development, Game Development, Object-Oriented Programming, Data Structures & Algorithm, Advance Database Systems, Cybersecurity"} 
                  date={"2021 - 2025"}
                />

                {/* Tools and Frameworks */}
                <ToolsAndFrameworks/>
              </main>
            </Container>
          </section>

          <Footer />
        </div>
      </ThemeProvider>
    </PageTransition>
  )
}

export default Resume