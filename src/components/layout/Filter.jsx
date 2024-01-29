import React from 'react'
import Category from '../Category'
import ColorFilter from '../ColorFilter'
import BrandFilter from '../BrandFilter'
import PriceFilter from '../PriceFilter'

function Filter() {
  return (
    <div className='w-full'>
          <Category/>
          <ColorFilter/>
          <BrandFilter/>
          <PriceFilter/>
    </div>
  )
}

export default Filter