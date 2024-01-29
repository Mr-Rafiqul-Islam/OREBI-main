import React from 'react'

const Batch = ({className,text}) => {
  return (
    <div className={`${className} font-dmsans text-sm font-bold text-white bg-primary px-8 py-2.5`}>{text}</div>
  )
}

export default Batch