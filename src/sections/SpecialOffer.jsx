import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={683} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'> Special</span> Offer
        </h1>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style our meticulously crafted footwear is designed to eleate your experience proiding you with unwatced quality innovation and touch of elagance</p>
        <p className='mt-6 lg:max-w-lg info-text'>our decication to detail and excellence ensures your satisifaction</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now" iconURL={arrowRight}  />
          <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>  
      </div>
    </section>
  )
}

export default SpecialOffer