import React from 'react'

const Skills = ({children, text}) => {
  return (
    <div className='flex flex-col justify-center items-center w-30 h-30 gap-2 rounded-lg bg-soft-purple/80 shadow-lg text-deep-navy cursor-pointer hover:scale-105 hover:bg-indigo-900 hover:text-purple-100 transition'>
        {children}
        <div className='text-base font-semibold'>{text}</div>
    </div>
  )
}

export default Skills