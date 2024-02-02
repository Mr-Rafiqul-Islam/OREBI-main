import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import Paragraph from '../components/Paragraph'
import Input from '../components/Input'
import Button from '../components/Button'

function SignUp() {
  return (
    <section className='mt-[124px] mb-[140px]'>
        <Container>
        <Heading text='Sign Up' className='text-5xl font-bold text-primary'/>
            <Breadcrumb/>
            <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className='text-third text-base font-normal w-[644px] leading-[30px]' />
            <hr className='mb-[57px] mt-[62px]'/>
        <Heading text='Your Personal Details' className='text-[39px] font-bold text-primary  mb-[42px]'/>
        <form action="" method="post">
                <div className="grid grid-cols-3 gap-10 mb-7">
                    <Input inputype='text' labelname='First Name' inputph='First Name' />
                    <Input inputype='text' labelname='Last Name' inputph='Last Name' />
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <Input inputype='email' labelname='Email Address' inputph='company@domain.com' />
                    <Input inputype='tel' labelname='Telephone' inputph='Your phone number' />
                </div>
                <hr className='mt-[70px] mb-[57px]'/>
                <Heading text='New Customer' className='text-[39px] font-bold text-primary mb-[42px]'/>
                <div className="grid grid-cols-3 gap-10 mb-7">
                    <Input inputype='text' labelname='Address 1' inputph='4279 Zboncak Port Suite 6212' />
                    <Input inputype='text' labelname='Address 2' inputph='-' />
                </div>
                <div className="grid grid-cols-3 gap-10 mb-7">
                    <Input inputype='text' labelname='City' inputph='Your City' />
                    <Input inputype='text' labelname='Post Code' inputph='05228' />
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <Input inputype='text' labelname='Country' inputph='Your City' />
                    </div>
                    <div>
                    <Input inputype='text' labelname='Region/State' inputph='05228' />
                    </div>
                </div>
                <hr className='mt-[70px] mb-[57px]'/>
                <Heading text='Your Password' className='text-[39px] font-bold text-primary mb-[42px]'/>
                <div className="grid grid-cols-3 gap-10 mb-7">
                    <Input inputype='password' labelname='Password' inputph='password' />
                    <Input inputype='password' labelname='Repeat Password' inputph='Repeat password' />
                </div>


                
                <Button text="Log in" className='py-4 ps-[77px] pe-[83px]'/>
        </form>
        </Container>

    </section>
  )
}

export default SignUp