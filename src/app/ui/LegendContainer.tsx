import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface propTypes {
    heading?: string
    para?: string
    button?: string
    children?: ReactNode
    className?: string
}


const LegendContainer = ({ children , heading, para, button, className } : propTypes) => {
    
  return (
    <div className={twMerge("flex flex-col mt-5 gap-3", className)}>
        <h1 className="font-bold leading-[38px] md:leading-[45px] lg:leading-[60px] tracking-normal text-[#1D1D1D] text-[28px] md:text-[48px] lg:text-[48px] max-w-[540px}">
            {heading}
        </h1>
        {para && 
            <p className="text-[16px] text-[#1D1D1D] leading-6 tracking-wide font-normal" >{para}</p>
        }
        { button &&
            <button className={twMerge("  flex px-10 py-6 flex-col items-center gap-2.5 self-stretch text-slate-200 bg-[#017846] md:py-5 md:px-5", className)}>{button} </button>
        }
        {children}
    </div>
  )
}


export default LegendContainer 