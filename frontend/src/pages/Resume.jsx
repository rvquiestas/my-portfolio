import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { ThemeProvider } from '../Context/ThemeContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Title from '../components/Title'
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa"

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
              <main className="flex flex-row items-start justify-between sm:mt-8 md:mt-12 pb-16 min-h-[30vh]">
                <Title text1={"Resume"} text2={""} />
                  
                  <div className='flex gap-2'>
                    <button
                    onClick={handleViewResume}
                    className="flex items-center justify-center gap-3 mx-auto bg-btn text-black border border-primary font-semibold px-8 py-3 rounded-lg transition duration-300 hover:scale-105 shadow-lg"
                  >
                    <span>View Resume</span>
                    <FaExternalLinkAlt size={16} />
                  </button>
                  
                  <button
                    onClick={onButtonClick}
                    className="flex items-center justify-center gap-3 mx-auto bg-btn text-black border border-primary font-semibold px-8 py-3 rounded-lg transition duration-300 hover:scale-105 shadow-lg"
                  >
                    <span>Download Resume</span>
                    <FaDownload size={16} />
                  </button>
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

export default Resume