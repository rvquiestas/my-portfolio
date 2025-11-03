import TechStack from "./TechStack"


const ToolsAndFrameworks = () => {
  return (
    <>
        <div className='mb-8'>
            {/* Tools and Frameworks Title */}
            <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-primary text-2xl 2xl:text-3xl font-bold'>Tools and Frameworks</p>
            </div>

            {/* Tools and Frameworks Card */}
            <div className='border rounded-2xl bg-project-bg p-8'>
                <div className='flex flex-row justify-between items-start'>
                    <div>
                        {/* Frontend */}
                        <p className='text-primary font-semibold text-lg 2xl:text-xl'>Frontend</p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <TechStack stack={"JavaScript"} />
                                <TechStack stack={"React JS"} />
                                <TechStack stack={"Tailwind CSS"} />
                                <TechStack stack={"Vite"} />
                                <TechStack stack={"Bootstrap"} />
                            </div>

                        {/* Backend */}
                        <p className='text-primary font-semibold text-lg 2xl:text-xl mt-4'>Backend</p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <TechStack stack={"Node.js"} />                          
                                <TechStack stack={"Express.js"} />                          
                                <TechStack stack={"JWT"} />                          
                                <TechStack stack={"Stripe"} />                          
                            </div>

                        {/* Database & Cloud */}
                        <p className='text-primary font-semibold text-lg 2xl:text-xl mt-4'>Database & Cloud </p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <TechStack stack={"MongoDB"} />                        
                                <TechStack stack={"MySQL"} />                        
                                <TechStack stack={"Cloudinary"} />                        
                            </div>

                        {/* Developer Tools */}
                        <p className='text-primary font-semibold text-lg 2xl:text-xl mt-4'>Developer Tools</p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <TechStack stack={"Git"} />                     
                                <TechStack stack={"Vercel"} />                     
                                <TechStack stack={"Visual Studio Code"} />                     
                                <TechStack stack={"Figma"} />                     
                                <TechStack stack={"Discord"} />                     
                            </div>

                        {/* Familiar Programming Languages */}
                        <p className='text-primary font-semibold text-lg 2xl:text-xl mt-4'>Familiar Programming Languages</p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <TechStack stack={"Java"} />                     
                                <TechStack stack={"Python"} />                     
                                <TechStack stack={"C#"} />                     
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ToolsAndFrameworks