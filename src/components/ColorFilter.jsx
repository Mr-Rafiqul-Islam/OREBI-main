import React from 'react'
import Subheading from './Subheading'
import Paragraph from './Paragraph'
import { IoMdArrowDropup } from "react-icons/io";
import DotColor from './Icons/DotColor';

function ColorFilter() {
  return (
    <div className='w-full mb-[53px]'>
        
        <div className="flex justify-between mb-[35px]">
        <Subheading className="" text="Shop by Color"/>
        <IoMdArrowDropup />
        </div>

        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <DotColor fill='black'/>
        <Paragraph text="Color 1" className='ms-[10px] font-normal text-sm text-third'/>
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
            <DotColor fill='#FF8686'/>
        <Paragraph text="Color 2" className='ms-[10px] font-normal text-sm text-third'/>
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
            <DotColor fill='#7ED321'/>
        <Paragraph text="Color 3" className='ms-[10px] font-normal text-sm text-third'/>
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
            <DotColor fill='#B6B6B6'/>
        <Paragraph text="Color 4" className='ms-[10px] font-normal text-sm text-third'/>
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] pb-5">
            <DotColor fill='#15CBA5'/>
        <Paragraph text="Color 5" className='ms-[10px] font-normal text-sm text-third'/>
        </div>
    </div>
  )
}

export default ColorFilter