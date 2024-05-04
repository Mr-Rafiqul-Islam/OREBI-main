import React from 'react'
import ColorFilter from '../ColorFilter'
import BrandFilter from '../BrandFilter'
import PriceFilter from '../PriceFilter'

function Filter() {
  return (
    <div className='w-full'>
          <ColorFilter/>
          <BrandFilter/>
          <PriceFilter/>
    </div>
  )
}

export default Filter