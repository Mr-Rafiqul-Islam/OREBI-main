import React from 'react'
import Container from '../Container'
import Image from '../Image'
import phone from '../../assets/Ad_1.png'
import electronic from '../../assets/Ad_2.png'
import furniture from '../../assets/Ad_3.png'

const Sale = () => {
  return (
    <section className='mt-[140px] mb-[128px]'>
        <Container>
            <div className="grid grid-cols-2 gap-10">
                <a href='#' target='_blank'><Image src={phone} className="w-full"/></a>
                <div className="grid grid-rows-2 gap-10">
                <a href='#' target='_blank'><Image src={electronic} className="w-full"/></a>
                <a href='#' target='_blank'><Image src={furniture} className="w-full"/></a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Sale