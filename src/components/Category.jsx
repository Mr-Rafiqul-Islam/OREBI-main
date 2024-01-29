import React from 'react'
import Subheading from './Subheading'
import Paragraph from './Paragraph'
import { FaPlus } from "react-icons/fa6";

function Category() {

    
  return (
    <div className='w-full mb-[53px]'>
        <Subheading className="mb-[35px]" text="Shop by Category"/>

        <div className="flex justify-between items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Category 1" className='font-normal text-sm text-third '/>
        <FaPlus className='text-third'/>
        </div>
        <div className="border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Category 2" className='font-normal text-sm text-third '/>
        </div>
        <div className="flex justify-between items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Category 3" className='font-normal text-sm text-third '/>
        <FaPlus className='text-third'/>
        </div>
        <div className="border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="Category 4" className='font-normal text-sm text-third '/>
        </div>
        <div className="border-b-2 border-[#F0F0F0] pb-5">
        <Paragraph text="Category 5" className='font-normal text-sm text-third '/>
        </div>
    </div>
  )
}

export default Category