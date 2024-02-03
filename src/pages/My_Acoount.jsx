import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import Paragraph from '../components/Paragraph'
import Input from '../components/Input'
import Button from '../components/Button'

function My_Acoount() {
  return (
    <section className='mt-[124px] mb-[140px]'>
        <Container>
            <Heading text='Login' className='text-5xl font-bold text-primary'/>
            <Breadcrumb/>
        </Container>
    </section> 
  )
}

export default My_Acoount