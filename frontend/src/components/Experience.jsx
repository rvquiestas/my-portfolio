import React from 'react'

const Experience = ({expTitle, jobTitle, jobCompanyAndLoc, task1, task2, date}) => {
  return (
    <>
    <div className='mb-8'>
        {/* Experience Title */}
        <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-primary text-2xl 2xl:text-3xl font-bold'>{expTitle}</p>
        </div>

        {/* Experience Card */}
        <div className='border rounded-2xl bg-project-bg p-8'>
            <div className='flex flex-row justify-between items-start'>
                <div>
                    <p className='text-primary font-semibold text-lg 2xl:text-xl'>{jobTitle}</p>
                    <p className='text-location font-medium'>{jobCompanyAndLoc}</p>
                </div>
                <p className='rounded-4xl px-10 py-1 bg-secondary text-white text-xs font-semibold'>{date}</p>
            </div>

            <ol className='list-disc marker:text-secondary mt-4 ml-5 text-primary'>
                <li>{task1}</li>
                <li>{task2}</li>
            </ol>    
        </div>
    </div>
    </>

  )
}

export default Experience
