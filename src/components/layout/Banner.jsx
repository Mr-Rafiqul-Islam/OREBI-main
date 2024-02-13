import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banner from '../../assets/bannner.png'
import { FaTruck,FaUndo } from "react-icons/fa";
import Two from '../Icons/Two'

const Banner = () => {
  return (
    <section className=''>
        <a href="#" ><Image src={banner} className="w-full"/></a>
        <div className='py-[30px] border-y-2 border-[#F0F0F0]'>
        <Container>
            <Flex className="items-center">
            <div className="w-1/3 flex items-center text-third text-base font-normal font-dmsans gap-4"> <Two/> Two years warranty</div>
            <div className="w-1/3 flex items-center text-third text-base font-normal font-dmsans justify-center gap-4"> <FaTruck className='text-primary text-2xl'/> Free shipping</div>
            <div className="w-1/3 flex items-center text-third text-base font-normal font-dmsans justify-end gap-4"> <FaUndo className='text-primary text-xl'/>  Return policy in 30 days</div>
            </Flex>
        </Container>
        </div>
    </section>
  )
}

export default Banner