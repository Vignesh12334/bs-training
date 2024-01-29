"use client"
import { useState } from 'react';
import LegendContainer from '../../LegendContainer';
import HeadingM from '../../Typography/HeadingM';
import TextL from '../../Typography/TextL';

const TestimonySection = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    '"Globally, 85 percent of people indicate that they have shifted their purchase behavior towards being more sustainable in the past five years"',
    ' many people should use this for their purchase behavior towards being more sustainable in the past five years',
    
  ];

  const nextQuote = () => {
    setActiveQuote((activeQuote + 1) % quotes.length);
  };

  const prevQuote = () => {
    setActiveQuote((activeQuote + quotes.length - 1) % quotes.length);
  };

  return (
    <div className="flex flex-col justify-start items-center  mt-8 md:py-16">
      <div className="max-w-lg bg-white rounded-lg p-8 relative">
        
        <p className="text-lg italic text-center">{quotes[activeQuote]}</p>
        
        <div className="absolute top-0 left-0 right-0 flex justify-between mt-4">
          <button
            className="text-black text-2xl p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={prevQuote}
          >
            &lt;
          </button>
          <button
            className="text-black text-2xl p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={nextQuote}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className=" flex flex-col items-center">
      <a href="#" className="text-gray-600 mt-2 text-center">Read more</a>

      <HeadingM className='py-10 md:inline-flex md:flex-col md:text-center md:gap-[32px]' >Find out how you can improve your sustainability journey with a free assessment</HeadingM>
      <LegendContainer className='md:text-slate-200' button="Let's do it" />
     
         
      </div>
    </div>
  );
};


export default TestimonySection;