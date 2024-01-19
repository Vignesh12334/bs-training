import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface propTypes {
    heading: string
    para?: string
    button?: string
    children?: ReactNode
    className?: string
}


const LegendContainer = ({ children , heading, para, button, className } : propTypes) => {
    
  return (
    <div className={twMerge("flex flex-col mt-5 gap-3 md:w-7/12", className)}>
        <h1 className="font-bold leading-[38px] md:leading-[45px] lg:leading-[60px] text-[25px] md:text-[30px] lg:text-[48px] max-w-[540px}  pl-11 ml-20">
            {heading}
        </h1>
        {para && 
            <p className="md:text-[20px] pl-11 ml-20" >{para}</p>
        }
        { button &&
            <button className="btn-primary py-12 md:py-2 h-[48px] w-full md:w-fit ml-32 bg-green-900 text-slate-100 ">button</button>
        }
        {children}
    </div>
  )
}


export default LegendContainer 