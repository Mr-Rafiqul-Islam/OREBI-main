import React from 'react'

const Paragraph = ({className,text}) => {
  return (
    <p className={`${className} font-dmsans`}>{text}</p>
  )
}

export default Paragraph