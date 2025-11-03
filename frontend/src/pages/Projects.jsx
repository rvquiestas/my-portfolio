import { useEffect } from 'react'
import PageTransition from '../components/PageTransition';
import { ThemeProvider } from '../Context/ThemeContext';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  useEffect(() => {
    document.body.classList.add("bg-bg");

    return () => {
      document.body.classList.remove("bg-bg");
    };
  }, []);

  return (
    <PageTransition key="projects-content">
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar currentPage='Projects'/>

          <section className="grow">
            <Container>
            <main>
              <div className='sm:mt-8 md:mt-12'>
                <Title text1={"Real-World Projects"} />
                <p className='mt-4 text-primary text-lg'>These are projects I developed for schools, small businesses, and communities. They showcase how I apply my knowledge to build practical solutions that make a real impact and turn concepts into working systems that help others in meaningful ways.</p>
                <ProjectsCard />
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

export default Projects
