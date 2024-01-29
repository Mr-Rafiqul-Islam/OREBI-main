import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import List from '../List'
import LOGO from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import Paragraph from '../Paragraph'

const Navbar = () => {
  return (
    <nav className='py-[32px]'>
        <Container>
            <Flex>
                <div className="w-1/3">
                  <Link to='/'><Image src={LOGO} /></Link>
                </div>
                <div className="w-1/3">
                    <ul>
                        <Flex className='justify-center'>
                          <List href='/' text='Home' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List href='shop' text='Shop' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List href='contact' text='Contacts' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List href='about' text='About' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List href='journal' text='Journal' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>                          
                        </Flex>
                    </ul>
                </div>
                <div className="w-1/3 flex gap-2 justify-end">
                  <Link><Paragraph text='EN' className='text-sm font-bold text-primary'/></Link>
                  <Link><Paragraph text='RU' className='text-sm font-normal text-third'/></Link>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar