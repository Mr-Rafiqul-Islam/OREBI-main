import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import Image from '../Image'
import p1 from '../../assets/sp1.png'
import p2 from '../../assets/sp2.png'
import p3 from '../../assets/sp3.png'
import p4 from '../../assets/sp4.png'
import phone from '../../assets/phone_of_the_year.png'

const Specialoffer = () => {
  return (
    <section className='mb-[140px]'>
        <Container>
            <div>
                <Image src={phone} className='mt-3 mb-32'/>
            </div>
            <Heading text='Special Offers' className="text-primary text-[39px] font-semibold mb-12"/>
            <Flex className='gap-10'>
              <div className="w-1/4">
                <Product src={p1} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="w-1/4">
                <Product src={p2} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="w-1/4">
                <Product src={p3} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="w-1/4">
                <Product src={p4} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Specialoffer