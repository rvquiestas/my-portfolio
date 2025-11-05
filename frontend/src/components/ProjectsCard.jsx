import { ThemeProvider } from '../Context/ThemeContext';
import { GrGithub } from "react-icons/gr";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { assets } from "../assets/assets.js";

const ProjectsCard = () => {
    const { theme } = ThemeProvider.useTheme();

  return (
    <div className="flex gap-8 flex-wrap justify-evenly mt-12 pb-6 ">
        {/* Project 1 - MGWR */}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? assets.darkProj1 : assets.lightProj1}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/MGWRPC-WEBSITE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><GrGithub className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="https://mgwrpc-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><IoEye className="sm:w-6 sm:h-6"/>Live Preview</a>
            </div>
        </div>

        {/* Project 1A - MGWR ADMIN*/}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? assets.darkProj1a : assets.lightProj1a}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/MGWRPC-WEBSITE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><GrGithub className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="https://mgwrpc-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><IoEye className="sm:w-6 sm:h-6"/>Live Preview</a>
            </div>
        </div>

        {/* Project 2 - SKUDL */}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? assets.darkProj2 : assets.lightProj2}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/SKUDL_Website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><GrGithub className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 pointer-events-none"><IoEyeOff className="sm:w-6 sm:h-6"/>No Preview</a>
            </div>
        </div>
        
        {/* Project 3 - PORTFOLIO */}
        <div className='hover:scale-105 transition duration-300'>
            <img
            alt=""
            className="shadow-2xl sm:w-100 sm:h-100 md:w-120 md:h-120 rounded-t-lg object-cover shrink-0"
            src={theme === "dark" ? assets.darkProj3 : assets.lightProj3}
            />
            <div className='flex items-center justify-evenly rounded-b-lg pt-4 pb-8 bg-project-bg text-primary'>
                <a href="https://github.com/rvquiestas/my-portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><GrGithub className="sm:w-6 sm:h-6"/>View on GitHub</a>
                <a href="https://www.figma.com/design/je3wT5hlCSuQoxOZ0hTFGU/MY-PORTFOLIO-WEBSITE?m=auto&t=9w72PmC9oSWHOfaZ-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary"><FiFigma className="sm:w-6 sm:h-6"/>View UI Design</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard
