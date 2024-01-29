import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <h2 className={`${className} font-dmsans font-bold text-xl text-primary`}>{text}</h2>
  )
}

export default Subheading