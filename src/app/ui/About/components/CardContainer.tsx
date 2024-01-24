import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'
import Image from 'next/image'


export interface cardProps {
   
    heading : string
    para? : string
    className? : string
 
}



const CardContainer = ({ heading, para, className} : cardProps) => {
  return (
     <div className={twMerge('flex flex-col mt-5 gap-3 py-3 px-3 ', className)}>
        <h1 className=' text-[#FFF]  text-[24px] not-italic leading-[24px] font-bold '>
            {heading}
        </h1>

        { para &&
         <p className=' text-[#FFF] text-[16px] not-italic leading-[20px]  font-normal'>{para} </p>
        }

     </div>
  )
}


export default CardContainer