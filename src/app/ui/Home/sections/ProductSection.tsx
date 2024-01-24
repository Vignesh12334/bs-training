import LegendContainer from "../../LegendContainer";
import HeadingM from "../../Typography/HeadingM";
import TextL from "../../Typography/TextL";


const ProductSection = () => {
    return <div className="mt-10">
        <TextL className="my-2">Our Product</TextL>
        <div>
         <HeadingM className=" my-2">Carbon Management</HeadingM>
         <TextL>Measure carbon emissions and the supply chain of your business
           Develop de-carbonization projects
           Offset your carbon emissions through offset projects</TextL>

         <LegendContainer button="Book a demo" />

         <HeadingM className="py-5">ESG Strategy</HeadingM>
         <TextL>Integrate ESG strategies and governance frameworks
           Identify ESG risks and opportunities
           ESG dashboards & reports
           Generate a yearly ESG report</TextL>
           
         <LegendContainer  button="Book a demo" />

         </div>
    </div>
}




export default ProductSection;