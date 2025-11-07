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
                      className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-black border border-primary font-semibold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg transition duration-300 hover:scale-105 hover:text-secondary hover:border-secondary shadow-lg text-sm sm:text-base whitespace-nowrap"
                    >
                      <span>View Resume</span>
                      <FaExternalLinkAlt className="sm:w-4 sm:h-4" />
                    </button>
                    
                    <button
                      onClick={onButtonClick}
                      className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-black border border-primary font-semibold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg transition duration-300 hover:scale-105 hover:text-secondary hover:border-secondary shadow-lg text-sm sm:text-base whitespace-nowrap"
                    >
                      <span>Download Resume</span>
                      <FaDownload className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Experience Section */}
                <Experience 
                  expTitle={"Education"} 
                  jobTitle={"Bachelor of Science in Information Technology"} 
                  jobCompanyAndLoc={"STI College Calamba | Calamba, Laguna"} 
                  task1={"Cum Laude | GWA: 1.5"} 
                  task2={"Courses: Web Development, Mobile Application Development, Game Development, Object-Oriented Programming, Data Structures & Algorithm, Advance Database Systems, Application Development, Operating Systems, Cybersecurity"} 
                  date={"2021 - 2025"}
                />

                <Experience 
                  expTitle={"Work Experience"} 
                  jobTitle={"IT Intern"} 
                  jobCompanyAndLoc={"PCM Cosmetic Products Trading | Dasmariñas, Cavite"} 
                  task1={"Helped develop a task planner website to make it easier for the team to manage their daily tasks"} 
                  task2={"Gained hands-on experience in maintaining and troubleshooting office equipment, including cleaning and resolving issues with printers and CCTV systems."} 
                  date={"Feb 2025 - May 2025"}
                />

                <Experience 
                  expTitle={"Leadership Experience"} 
                  jobTitle={"Capstone Project Leader"} 
                  jobCompanyAndLoc={"STI College Calamba | Calamba, Laguna"} 
                  task1={"Led a capstone project team in creating a Computer Parts Website that offered an easy and smooth online shopping experience. Managed the project schedule, assigned tasks, and guided the team to work well together."}
                  task2={"Also worked as a MongoDB, Express JS, React JS, Node JS (MERN) Stack programmer, building important features like product management, user login, and a mobile-friendly design, leading to a fully working and successful project."}
                  date={"2023 - 2024"}
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