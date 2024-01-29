import React from 'react'
import Image from './Image'
import Batch from './Batch'
import Flex from './Flex'
import Heading from './Heading'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";


const Product = ({src,batch,title,price,color}) => {
  return (
    <div className='w-full group'>

        {/* ==========upper part of card start========= */}
        <div className="w-full relative overflow-hidden">

            {/* ===========image part start====== */}
            <Image src={src} className='w-full'/>
            <Batch className='absolute top-5 left-6' text={batch}/>
            {/* ===========image part end====== */}

            {/* =====hover part start======= */}
            <div className="absolute bg-white w-full py-6 pe-[30px] -bottom-[160px] left-0 group-hover:bottom-0 duration-500">
                <Flex className="justify-end items-center gap-[15px]">
                    <Heading text="Add to Wish List" className='text-secondary text-base font-normal'/>
                    <FaHeart />
                </Flex>
                <Flex className="justify-end items-center gap-[15px] my-5">
                    <Heading text="Compare" className='text-secondary text-base font-normal'/>
                    <GrPowerCycle />
                </Flex>
                <Flex className="justify-end items-center gap-[15px]">
                    <Heading text="Add to Cart" className='text-primary text-base font-bold'/>
                    <FaShoppingCart />
                </Flex>
            </div>
            {/* =====hover part end======= */}
        </div>
        {/* =========upper part of card end========= */}

        {/* =========lower part of card========= */}
        <div className="w-full pt-[24px]">
            <div className='flex justify-between'>
            <Heading text={title} className='font-bold text-xl text-primary'/>
            <Heading text={price} className='font-normal text-base text-secondary'/>
            </div>
            <Heading className='font-normal text-base text-secondary mt-[15px]' text={color}/>
        </div>
        {/* =========lower part of card end========= */}
    </div>
  )
}

export default Product