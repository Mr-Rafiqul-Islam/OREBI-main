import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import List from '../List'
import LOGO from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import Paragraph from '../Paragraph'
import { useDispatch } from 'react-redux'
import { pageName } from '../../slices/breadcrumbSlice'

const Navbar = () => {
    let dispatch = useDispatch();

    let handleBreadcrumb = (name) => {
      dispatch(pageName(name));
    };
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
                          <List onClick={() => handleBreadcrumb("Home")} href='/' text='Home' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List onClick={() => handleBreadcrumb("Shop")} href='shop' text='Shop' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List onClick={() => handleBreadcrumb("Contact")} href='contact' text='Contacts' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List onClick={() => handleBreadcrumb("About")} href='about' text='About' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                          <List onClick={() => handleBreadcrumb("Journal")} href='journal' text='Journal' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>                          
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