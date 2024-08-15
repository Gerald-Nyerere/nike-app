import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide You
          <span className='text-coral-red'> Super</span>  
          <span className='text-coral-red'> Quality</span> shoes
        </h1>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style our meticulously crafted footwear is designed to eleate your experience proiding you with unwatced quality innovation and touch of elagance</p>
        <p className='mt-6 lg:max-w-lg info-text'>our decication to detail and excellence ensures your satisifaction</p>
        <div className='mt-11'>
          <Button label="view details"  />
        </div>  
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe8" width={570} height={520} className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality