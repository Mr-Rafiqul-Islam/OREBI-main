import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
function Journal() {
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
        <Heading text='Journal' className='text-5xl font-bold text-primary'/>
        <Breadcrumb/>
        </Container>
    </section>
  )
}

export default Journal