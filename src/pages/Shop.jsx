import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import Filter from '../components/layout/Filter'
import Flex from '../components/Flex'
import Filter2 from '../components/layout/Filter2'
import ProductShop from '../components/layout/ProductShop'
import { useSelector } from 'react-redux'


const Shop = () => {
  let data = useSelector((state)=> state.breadcrumb.currentname)
  let breadC = window.location.pathname.replace("/", "").replace("-", " ")
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
          <Flex>
            <h1>{data}</h1>
            <div className="px-2">&gt;</div>
            <h1 className='first-letter:uppercase'>{breadC}</h1>
          </Flex>
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