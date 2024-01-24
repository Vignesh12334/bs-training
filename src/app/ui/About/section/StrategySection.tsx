import LegendContainer from "../../LegendContainer"
import HeadingL from "../../Typography/HeadingL";
import TextM from "../../Typography/TextM";
import HeadingS from "../../Typography/HeadingS";
import TextL from "../../Typography/TextL";
const Strategy = () => {
    return <div className=" mt-10">
        <HeadingL> How we do it?</HeadingL>
        <TextM className="py-2">We achieve our vision and mission By providing the businesses with the products and services they need to become sustainable.</TextM>

        <div>
           <HeadingS>Carbon Management</HeadingS>
           <TextL className="py-2">Measure carbon emissions and the supply chain of your business
              Develop de-carbonization projects
              Offset your carbon emissions through offset projects</TextL>
            <LegendContainer button="Book a demo" />


            <HeadingS className="mt-5">ESG Strategy</HeadingS>
            <TextL className="py-2">Integrate ESG strategies and governance frameworks
              Identify ESG risks and opportunities
              ESG dashboards & reports
              Generate a yearly ESG report</TextL>
              <LegendContainer button="Book a demo" />


            
        </div>
       <HeadingS className="mt-9">Find out how you can improve your sustainability journey with a free assessment</HeadingS>
       <LegendContainer button="Let's do it" />
    </div>

    
}



export default Strategy;