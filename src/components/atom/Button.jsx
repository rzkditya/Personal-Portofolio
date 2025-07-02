import React from 'react'

const buttonStyle = 'wave inline-flex justify-center items-center w-[150px] h-[100%] bg-muted-mauve rounded-md text-lg text-deep-navy font-semibold'

const Button = ({children}) => {
  return (
    <a href="" className={buttonStyle}>{children}</a>
  )
}

export default Button