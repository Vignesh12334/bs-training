import React from 'react'
import LegendContainer from '../../LegendContainer'
import HeadingL from '../../Typography/HeadingL'
import TextL from '../../Typography/TextL'

const HeroSection = () => {
  return (
    <div className='md:flex md:flex-col  md:items-center md:gap-[24px]'>
       <HeadingL>Make all interactions between humans and the ecosystem regenerative in nature.</HeadingL>
       <TextL className='mt-5 md:font-[20px]  md:not-italic  md:leading-[28px]'>Change ecosystems and ways of life - Assist communities affected by climate change in creating sustainable means of subsistence.</TextL>
    </div>
  )
}


export default HeroSection