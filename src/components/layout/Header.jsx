import React, { useState, useEffect, useRef } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import user from '../../assets/Icon_user.png'
import cart from '../../assets/Icon_cart.png'
import Bar from '../Icons/Bar'
import Search from '../Icons/Search'
import UserPopup from './UserPopup'
import UserPopup2 from './UserPopup2'
import Close from '../Close'
import MenuCategory from '../MenuCategory'
import AddToCart from '../AddToCart'


const Header = () => {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [menu, setMenu] = useState(false)

    const menuClose = () => {
        setMenu(false);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const handleClose2 = () => {
        setOpen2(false);
      };

    // let menuRef = useRef();

    // useEffect(() => {
    //     let handler = (e)=>{
    //     if(!menuRef.current.contains(e.target)){
    //         setOpen(false);
    //         console.log(menuRef.current);
    //     }      
    //     };

    //     document.addEventListener('mousedown', handler);
        

    //     return() =>{
    //     document.removeEventListener('mousedown', handler);
    //     }
    // });
  return (
    <section className='bg-header py-[25px] border-b-2 border-borderColor'>
        <Container>
            <Flex className="items-center">
                <div className="w-1/3">
                    <button onClick={()=>{setMenu(!menu)}}>
                    <Flex className='items-center gap-2.5'>
                        <Bar/>
                        <p className='text-primary font-dmsans text-[14px] font-normal'>
                        Shop by Category
                        </p>
                    </Flex>
                    </button>
                    {menu && (
                        <Close onClose={menuClose}>
                            <MenuCategory/>
                        </Close>
                    )

                    }
                </div>
                <div className="w-1/3 relative">
                    <input type="text" placeholder='Search Products' className='w-full py-4 ps-[21px] placeholder:text-[14px] placeholder:text-[#C4C4C4] focus:outline-none'/>
                    <div className='absolute top-1/2 -translate-y-1/2 right-[17px]'>
                    <a href="#" className=''>
                        <Search/>
                    </a>
                    </div>
                </div>
                <div className="w-1/3">
                    <Flex className="justify-end">
                    <button onClick={()=>{setOpen(!open)}}><Image src={user} className='me-[41px]'/></button>
                    {open && (
                        <Close onClose={handleClose}>
                            <UserPopup />
                        </Close>
                    )
                    }
                    
                    <button onClick={()=>{setOpen2(!open2)}}><Image src={cart} className=''/></button>
                    {open2 && (
                        <Close onClose={handleClose2}>
                            <AddToCart className='absolute top-[165px] right-[100px]'/>
                        </Close>
                    )}
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Header