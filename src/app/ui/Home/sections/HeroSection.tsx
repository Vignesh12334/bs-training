import React from 'react'
import LegendContainer from '../../LegendContainer'
import Image from "next/image";
import HeadingM from '../../Typography/HeadingM';
import TextL from '../../Typography/TextL';


const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
      <div>
        <TextL className='text-center mt-8'>Trusted by companies</TextL>
        <div className='flex justify-around mt-5 space-x-2  '>
          <Image src='/bend.png' alt='company-logo-1' width={64} height={64} />
          <Image  src='/vizdale-com.png' alt='company-logo-2' width={63.107} height={63.107} />
          <h3 className='font-semibold text-4xl'>Vizdale</h3>
          <Image src='/frozen-iris.png' alt='company-logo-3' width={100} height={5}/>
        </div>
      </div> 
          
       <LegendContainer button='Action' />
       <TextL>Reduce your environmental impact by using a scientific data-driven approach.</TextL>
       <HeadingM>Let us Transform your sustainability journey.</HeadingM>
     

      <figure className="md:w-5/12">
        <div className="grayscale-0 transition-filter duration-300 sm:w-6/12 mx-auto md:w-11/12 md:ml-auto block relative z-10">
          <Image  src="/heroImage.jpg" alt="hero-img " width={526} height={447}   />
         </div>
        </figure>
       
   

        
    </section>
    
  )
}


export default HeroSection