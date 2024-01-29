import React from 'react'
import LegendContainer from '../../LegendContainer'
import Image from "next/image";
import HeadingM from '../../Typography/HeadingM';
import TextL from '../../Typography/TextL';


const HeroSection = () => {
  return (
    <section className="md:flex md:flex-row-reverse md:py-16">

        <div className="grayscale-0 transition-filter duration-300 sm:w-6/12 mx-auto md:w-11/12 md:flex md:justify-end">
          <Image  src="/heroImage.jpg" alt="hero-img " width={526} height={447}   />
        </div>


        <div>
          <div className='md:py-10'>
            <HeadingM className='md:py-5'>Let us Transform your sustainability journey.</HeadingM> 
            <TextL className=''>Reduce your environmental impact by using a scientific data-driven approach.</TextL>
            <LegendContainer className='md:w-24 md:text-slate-200'   button='Action' />
          </div>
            <TextL className='text-center mt-8 md:mt-16 md:text-left md:ml-1'>Trusted by companies</TextL>
         <div className='flex justify-around mt-5 space-x-2  '>
          <Image src='/bend.png' alt='company-logo-1' width={64} height={64} />
          <Image  src='/vizdale-com.png' alt='company-logo-2' width={63.107} height={63.107} />
          <h3 className='font-semibold text-4xl'>Vizdale</h3>
          <Image src='/frozen-iris.png' alt='company-logo-3' width={100} height={5}/>
         </div>
          
        </div>
      
           
       

    
        
        
    </section>
    
  )
}


export default HeroSection