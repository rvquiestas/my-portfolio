import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 uppercase'>
      <p className='text-primary text-2xl 2xl:text-4xl font-bold underline decoration-secondary underline-offset-8'>{text1} <span className='text-primary font-bold underline decoration-secondary'>{text2}</span></p>
    </div>
  )
}

export default Title