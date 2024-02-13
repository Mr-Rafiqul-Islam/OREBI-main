import React from 'react'
import Image from './Image'
import watch from '../assets/cartimage.png'
import Subheading from '../components/Subheading'
import { ImCross } from "react-icons/im";
import Button from './Button';
import { Link } from 'react-router-dom';


function AddToCart({className}) {
  return (
    <div className={`w-[360px] h-[242px] bg-white border border-[#F0F0F0] ${className}`}>
        <div className="h-[120px] w-full bg-[#F5F5F3] p-[21px] flex">
                <Image src={watch} alt='watch' className='me-[22px]'/>
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <Subheading text='Black Smart Watch' className='text-sm font-bold'/>
                        <Subheading text='$44.00' className='text-sm font-bold'/>
                    </div>
                    <ImCross className='cursor-pointer'/>
                </div>
        </div>
        <div className="h-[120px] p-[20px] w-full bg-white">
              <p className='text-base text-third'>SubTotal: <Subheading text='$44.00' className='inline-block text-sm font-bold'/></p>
              <div className="w-full mt-3 flex justify-between">
               <Link to='/cart-list'><Button text='View Cart' className='py-4 px-10 bg-white text-primary border border-primary hover:bg-primary hover:text-white duration-300'/></Link>
               <Link to='/checkout'><Button text='Checkout' className='py-4 px-10 bg-white text-primary border border-primary hover:bg-primary hover:text-white duration-300'/></Link>
              </div>
        </div>
    </div>
  )
}

export default AddToCart