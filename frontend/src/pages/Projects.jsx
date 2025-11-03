import { useEffect } from 'react'
import PageTransition from '../components/PageTransition';
import { ThemeProvider } from '../Context/ThemeContext';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Title from '../components/Title';

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
              <Title text1={"Real-World Projects"} />
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
