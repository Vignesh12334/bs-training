import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'
import Image from 'next/image'


export interface propTypes {
    color?: string
    children? : ReactNode
    className? : string
}



const HeadingL = ({children, className} : propTypes) => {
  return (
        <h1 className={twMerge(' text-[#1D1D1D] text-[32px] not-italic font-bold leading-[38px] md:text-[56px] md:text-center md:leading-[60px] md:tracking-[-1px]  ',className)}>
            {children}
        </h1>
  )
}

// <HeadingL className="">Why our Product?</HeadingL>
export default HeadingL