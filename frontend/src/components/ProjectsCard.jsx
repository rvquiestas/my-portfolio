import { ThemeProvider } from '../Context/ThemeContext';
import { GrGithub } from "react-icons/gr";
import { IoEye, IoEyeOff } from "react-icons/io5";

import lightProj1 from '../assets/img/proj1-light.png';
import darkProj1 from '../assets/img/proj1-dark.png';
import lightProj2 from '../assets/img/proj2-light.png';
import darkProj2 from '../assets/img/proj2-dark.png';
import lightProj3 from '../assets/img/proj3-light.png';
import darkProj3 from '../assets/img/proj3-dark.png';

const ProjectsCard = () => {
    const { theme } = ThemeProvider.useTheme();

  return (
    <div className="flex gap-8 flex-wrap justify-evenly mt-12 pb-6 ">
        {/* Project 1 - MGWR */}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? darkProj1 : lightProj1}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/MGWRPC-WEBSITE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><GrGithub size={20} className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="https://mgwrpc-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><IoEye size={20} className="sm:w-6 sm:h-6"/>Live Preview</a>
            </div>
        </div>

        {/* Project 2 - SKUDL */}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? darkProj2 : lightProj2}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/SKUDL_Website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><GrGithub size={20} className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 pointer-events-none"><IoEyeOff size={20} className="sm:w-6 sm:h-6"/>No Preview</a>
            </div>
        </div>
        
        {/* Project 3 - PORTFOLIO */}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? darkProj3 : lightProj3}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/my-portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><GrGithub size={20} className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 pointer-events-none"><IoEyeOff size={20} className="sm:w-6 sm:h-6"/>No Preview</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard
