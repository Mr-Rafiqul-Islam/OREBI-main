import React from 'react'
import { Link } from 'react-router-dom'

const List = ({className,href,text,target}) => {
  return (
    <Link to={href} target={target}><li className={`${className} font-dmsans`}>{text}</li></Link>
  )
}

export default List