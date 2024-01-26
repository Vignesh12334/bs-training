import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'
import Image from 'next/image'


export interface propTypes {
    color?: string
    children? : ReactNode
    className? : string
}



const HeadingM = ({children, className} : propTypes) => {
  return (
        <h1 className={twMerge(' text-[#1D1D1D] text-[28px] not-italic font-bold leading-[38px] tracking-[-0.4px]  md:text-[48px] md:leading-[56px]  md:tracking-[-1.92]',className)}>
            {children}
        </h1>
  )
}

// <HeadingM className="">Why our Product?</HeadingM>
export default HeadingM