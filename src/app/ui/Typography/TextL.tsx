import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'
import Image from 'next/image'


export interface propTypes {
    color?: string
    children? : ReactNode
    className? : string
}



const TextL= ({children, className} : propTypes) => {
  return (
        <h1 className={twMerge(' text-[#1D1D1D] text-[16px] not-italic font-normal leading-[24px] tracking-[0.1px] md:text-[20px] md:leading-[24px]',className)}>
            {children}
        </h1>
  )
}

// <HeadingM className="">Why our Product?</HeadingM>
export default TextL;