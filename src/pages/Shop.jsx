import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import Filter from '../components/layout/Filter'
import Flex from '../components/Flex'
import Grid1 from '../components/Icons/Grid1'
import { FaList } from "react-icons/fa";
import Paragraph from '../components/Paragraph'
import Filter2 from '../components/layout/Filter2'
import ProductShop from '../components/layout/ProductShop'



const Shop = () => {
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
          <Heading text='Product' className='text-5xl font-bold text-primary'/>
          <Breadcrumb/>
          <Flex className='gap-[33px]'>
            {/* ==========sidebar start======= */}

            <aside className='w-[372px]'>
            <Filter/>
            </aside>

            {/* ==========sidebar end======= */}

            {/* ==========Shop view Start======= */}
            <aside>
            <Filter2 className='mb-[60px]'/>
            <ProductShop/>
            </aside>
            {/* ==========Shop view end======= */}
          </Flex>
        </Container>
    </section>
  )
}

export default Shop