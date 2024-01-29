import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import Paragraph from '../components/Paragraph'
import Input from '../components/Input'
import Button from '../components/Button'  

function Login() {
  return (
    <section className='mt-[124px] mb-[140px]'>
        <Container>
            <Heading text='Login' className='text-5xl font-bold text-primary'/>
            <Breadcrumb/>
            <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className='text-third text-base font-normal mb-[62px] w-[644px] leading-[30px]' />
            <hr />
            <Heading text='Returning Customer' className='text-[39px] font-bold text-primary mt-[57px] mb-[42px]'/>
            <form action="" method="post">
                <div className="grid grid-cols-3 gap-10 mb-7">
                    <Input inputype='email' labelname='Email Address' inputph='company@domain.com' />
                    <Input inputype='password' labelname='Password' inputph='minimum 8 digits' />
                </div>
                <button className='text-primary bg-transparent border-2 py-4 ps-[77px] pe-[83px] mb-[70px] text-sm font-bold font-dmsans'>Log in</button>
            </form>
            <hr />
            <Heading text='New Customer' className='text-[39px] font-bold text-primary mt-[57px] mb-[42px]'/> 
            
            <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className='text-third text-base font-normal mb-[41px] mt-[38px] w-[644px] leading-[30px]' />
            <Button className="py-4 ps-[65px] pe-[71px]" text="Continue" />
        </Container>
    </section>
  )
}

export default Login
