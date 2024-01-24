import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'
import Image from 'next/image'


export interface propTypes {
    color?: string
    children? : ReactNode
    className? : string
}



const HeadingS = ({children, className} : propTypes) => {
  return (
        <h1 className={twMerge(' text-[#1D1D1D] text-[24px] not-italic font-bold leading-[32px] tracking-[-0.1px]',className)}>
            {children}
        </h1>
  )
}

// <HeadingM className="">Why our Product?</HeadingM>
export default HeadingS;