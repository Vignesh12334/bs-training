import LegendContainer from "../../LegendContainer";
import HeadingM from "../../Typography/HeadingM";
import TextL from "../../Typography/TextL";


const ProductSection = () => {
    return <div className="mt-10 md:py-16">
        <TextL className="my-2">Our Product</TextL>
        <div className="md:flex md:flex-row md:gap-10">
          <div>
              <HeadingM className=" my-2 md:my-5">Carbon Management</HeadingM>
              <TextL>Measure carbon emissions and the supply chain of your business
               Develop de-carbonization projects
               Offset your carbon emissions through offset projects</TextL>

              <LegendContainer className='md:w-40 md:text-slate-200'   button="Book a demo" />
          </div>
          <div className=" ">
                         <HeadingM className="py-5">ESG Strategy</HeadingM>
                         <TextL>Integrate ESG strategies and governance frameworks
                            Identify ESG risks and opportunities
                            ESG dashboards & reports
                            Generate a yearly ESG report</TextL>
                         <LegendContainer className='md:w-40 md:text-slate-200'  button="Book a demo" />
         </div>    

         </div>
    </div>
}




export default ProductSection;