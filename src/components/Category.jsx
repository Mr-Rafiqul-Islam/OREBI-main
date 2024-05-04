import React from 'react'
import Subheading from './Subheading'
import Paragraph from './Paragraph'
import { FaPlus } from "react-icons/fa6";

function Category({categoryItems,filterItem}) {

    
  return (
    <div className='w-full mb-[53px]'>
        <Subheading className="mb-[35px]" text="Shop by Category"/>
        {categoryItems.map((items,i)=>(
          <div className="border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text={items} className='font-normal text-sm text-third capitalize cursor-pointer' key={i} onClick={()=>filterItem(items)}/>
        </div>
        ))}

    </div>
  )
}

export default Category