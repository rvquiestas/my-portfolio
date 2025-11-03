import TechStack from "./TechStack"

const ToolsAndFrameworks = () => {
  return (
    <div className='mb-6 sm:mb-8'>
      {/* Tools and Frameworks Title */}
      <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-primary text-xl sm:text-2xl 2xl:text-3xl font-bold'>Tools and Frameworks</p>
      </div>

      {/* Tools and Frameworks Card */}
      <div className='border rounded-xl sm:rounded-2xl bg-project-bg p-4 sm:p-6 lg:p-8'>
        <div className='space-y-4 sm:space-y-5'>
          {/* Frontend */}
          <div>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl mb-2'>Frontend</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <TechStack stack={"JavaScript"} />
              <TechStack stack={"React JS"} />
              <TechStack stack={"Tailwind CSS"} />
              <TechStack stack={"Vite"} />
              <TechStack stack={"Bootstrap"} />
            </div>
          </div>

          {/* Backend */}
          <div>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl mb-2'>Backend</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <TechStack stack={"Node.js"} />                          
              <TechStack stack={"Express.js"} />                          
              <TechStack stack={"JWT"} />                          
              <TechStack stack={"Stripe"} />                          
            </div>
          </div>

          {/* Database & Cloud */}
          <div>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl mb-2'>Database & Cloud</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <TechStack stack={"MongoDB"} />                        
              <TechStack stack={"MySQL"} />                        
              <TechStack stack={"Cloudinary"} />                        
            </div>
          </div>

          {/* Developer Tools */}
          <div>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl mb-2'>Developer Tools</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <TechStack stack={"Git"} />                     
              <TechStack stack={"Vercel"} />                     
              <TechStack stack={"Visual Studio Code"} />                 
              <TechStack stack={"Discord"} />                     
            </div>
          </div>

          {/* Design & 3D Tools */}
          <div>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl mb-2'>Design & 3D Tools</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">                 
              <TechStack stack={"Figma"} />                    
              <TechStack stack={"Spline (Basic 3D)"} />                    
              <TechStack stack={"Adobe Photoshop (Basic Editing)"} />                    
            </div>
          </div>

          {/* Familiar Programming Languages */}
          <div>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl mb-2'>Familiar Programming Languages</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <TechStack stack={"Java"} />                     
              <TechStack stack={"Python"} />                     
              <TechStack stack={"C#"} />                     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsAndFrameworks