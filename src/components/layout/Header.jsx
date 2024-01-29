import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import user from '../../assets/Icon_user.png'
import cart from '../../assets/Icon_cart.png'
import Bar from '../Icons/Bar'
import Search from '../Icons/Search'


const Header = () => {
  return (
    <section className='bg-header py-[25px] border-b-2 border-borderColor'>
        <Container>
            <Flex className="items-center">
                <div className="w-1/3">
                    <Flex className='items-center gap-2.5'>
                        <Bar/>
                        <p className='text-primary font-dmsans text-[14px] font-normal'>
                        Shop by Category
                        </p>
                    </Flex>
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
                    <Image src={user} className='me-[41px]'/>
                    <Image src={cart} className=''/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Header