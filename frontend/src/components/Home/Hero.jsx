import Container from '../Container';
import { FaCircle } from "react-icons/fa";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { ThemeProvider } from '../../Context/ThemeContext';
import lightBg from '../../assets/img/rv-light-md.png';
import darkBg from '../../assets/img/rv-dark-md.png';

const Hero = () => {
  const { theme } = ThemeProvider.useTheme();
  
  return (
    <section id="section" className="h-full">
      <Container>
        <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between sm:mt-0 md:mt-12 pb-16">
          <div className="flex flex-col items-center md:items-start">
            <span className="mt-16 mb-6 flex items-center space-x-2 border border-secondary text-secondary text-sm rounded-full px-4 pr-3 py-1.5">
              <FaCircle size={8} className='mr-1'/>
              AVAILABLE FOR WORK
            </span>

            <h1 className="text-primary font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl">
              Hi, I'm RV Quiestas, an aspiring {" "}
              <span className="text-secondary underline underline-offset-12">web developer.</span>
            </h1>

            <p className="mt-8 text-primary font-light max-w-md text-l leading-relaxed">
              Web developer in the making, always learning and creating.
            </p>
          </div>

          <div aria-label="Photos of leaders" className="mt-12 pb-6">
            <img
              alt=""
              className="w-100 h-100 rounded-xl hover:scale-105 transition duration-300 object-cover shrink-0 shadow-lg"
              src={theme === "dark" ? darkBg : lightBg}
            />
            
            <div className='flex flex-col sm:flex-row justify-center md:justify-around gap-3 sm:gap-4 mt-4 w-full px-4 sm:px-0 text-primary'>             
              <a href="https://www.linkedin.com/in/rvq26/" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto flex items-center justify-center gap-2 border rounded-md px-6 sm:px-6 md:px-8 py-2.5 sm:py-2.5 cursor-pointer hover:scale-105 transition duration-300'>
                  <GrLinkedin size={20} className="sm:w-6 sm:h-6"/>
                  <span className="text-base sm:text-base">LinkedIn</span>
                </button>
              </a>

              <a href="https://github.com/rvquiestas" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto flex items-center justify-center gap-2 border rounded-md px-6 sm:px-6 md:px-8 py-2.5 sm:py-2.5 cursor-pointer hover:scale-105 transition duration-300'>
                  <GrGithub size={20} className="sm:w-6 sm:h-6"/>
                  <span className="text-base sm:text-base">GitHub</span>
                </button>              
              </a>           
            </div>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default Hero;