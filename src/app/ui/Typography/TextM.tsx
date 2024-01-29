import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'
import Image from 'next/image'


export interface propTypes {
    color?: string
    children? : ReactNode
    className? : string
}



const TextM= ({children, className} : propTypes) => {
  return (
        <h1 className={twMerge(' text-[#1D1D1D] text-[14px] not-italic font-normal leading-[24px] md:items-center',className)}>
            {children}
        </h1>
  )
}

// <HeadingM className="">Why our Product?</HeadingM>
export default TextM;