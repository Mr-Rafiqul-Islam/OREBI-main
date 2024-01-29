import React from 'react'

import Subheading from './Subheading'
import Paragraph from './Paragraph'
import { IoMdArrowDropup } from "react-icons/io";

function BrandFilter() {
  return (
    <div className='w-full mb-[53px]'>
        
        <div className="flex justify-between mb-[35px]">
        <Subheading className="" text="Shop by Brand"/>
        <IoMdArrowDropup />
        </div>

        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Brand 1" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Brand 2" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Brand 3" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Brand 4" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] pb-5">
        <Paragraph text="Brand 5" className='font-normal text-sm text-third'/>
        </div>
    </div>
  )
}

export default BrandFilter