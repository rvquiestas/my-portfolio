
const Experience = ({expTitle, jobTitle, jobCompanyAndLoc, task1, task2, date}) => {
  return (
    <div className='mb-6 sm:mb-8'>
      {/* Experience Title */}
      <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-primary text-xl sm:text-2xl 2xl:text-3xl font-bold'>{expTitle}</p>
      </div>

      {/* Experience Card */}
      <div className='border rounded-xl sm:rounded-2xl bg-project-bg p-4 sm:p-6 lg:p-8'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4'>
          <div className='flex-1 min-w-0'>
            <p className='text-primary font-semibold text-base sm:text-lg 2xl:text-xl wrap-break-word'>{jobTitle}</p>
            <p className='text-location font-medium text-sm sm:text-base wrap-break-word'>{jobCompanyAndLoc}</p>
          </div>
          <p className='rounded-full px-4 sm:px-6 lg:px-10 py-1 bg-secondary text-white text-xs font-semibold whitespace-nowrap self-start'>
            {date}
          </p>
        </div>

        <ol className='list-disc marker:text-secondary mt-4 ml-5 text-primary text-sm sm:text-base space-y-1'>
          <li className='wrap-break-word'>{task1}</li>
          <li className='wrap-break-word'>{task2}</li>
        </ol>    
      </div>
    </div>
  )
}

export default Experience