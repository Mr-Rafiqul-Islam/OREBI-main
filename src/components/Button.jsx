import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`${className} bg-primary text-white font-dmsans font-bold text-sm`}>{text}</button>
  )
}

export default Button