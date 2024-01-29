import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import p1 from '../../assets/np1.png'
import p2 from '../../assets/np2.png'
import p3 from '../../assets/np3.png'
import p4 from '../../assets/np4.png'

const New = () => {
  return (
    <section className='mb-[118px]'>
        <Container>
            <Heading text='New Arrivals' className="text-primary text-[39px] font-semibold mb-12"/>
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

export default New