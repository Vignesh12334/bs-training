import React from 'react'
import LegendContainer from '../../LegendContainer'
import Image from 'next/image'
import HeadingM from '../../Typography/HeadingM'
import TextL from '../../Typography/TextL'

const CuriositySection = () => {
  return (
      <div className='mt-16  md:flex md:py-16'>
        <Image src='/hand.jpg' alt='hand-img' width={500} height={500} />

        <div className='md:mx-20 md:mt-10'>
         <HeadingM>Why become a sustainale business?</HeadingM>
         <ul className=' md:flex flex-col'>
          <li className="text-base my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /><TextL>Reduce cost</TextL> </li>
          <li className="text-base  my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /><TextL>Competitive advantage</TextL> </li>
          <li className="text-base  my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /> <TextL>Transparency to customers and investors</TextL> </li>
          <li className="text-base  my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /><TextL>Be ahead of climate regulations and compliances</TextL> </li>
         </ul>
          <a href="https://beyondsustainability.medium.com/business-case-why-make-your-business-sustainable-36df066c6a8b" target="_blank" rel="noreferrer">
          <TextL className=' mt-5'>Read more detailed case study > </TextL>
          </a>
        </div> 

         
     </div>
   
   
  )
}


export default CuriositySection




      
      

      
       
     

      {/* 2 1  2 1*/}

   

