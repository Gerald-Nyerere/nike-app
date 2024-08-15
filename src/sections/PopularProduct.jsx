import React from 'react'
import {  products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'



const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'> Popular</span>Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience unparalleled quality and style with our highly sought-after selection of footwear. Dive into a world where comfort meets 
          cutting-edge design, offering exceptional value that redefines your expectations. Each pair is crafted to perfection, ensuring you not 
          only look great but also feel incredible with every step. Explore our collection and elevate your style quotient, discovering shoes that 
          perfectly blend fashion with function. Whether you’re seeking the latest trends or timeless classics, our range promises to satisfy your
          sartorial needs while providing the ultimate in comfort and durability. Step into a new era of footwear with us.
        </p>
      </div>
      <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProduct