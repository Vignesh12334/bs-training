

const Section2 = () => {
    return <section className="md:my-36 mt-36 mb-20 ">
     <p className="text-lg mb-3 font-medium">Our product</p> 
     <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
        <div className="w-full lg:w-6/12">
            <h3 className="font-bold mb-5 text-[24px] md:text[35px]">Carbon Management</h3>
            <p>Measure carbon emissions and the supply chain of your business</p>
            <p>Develop de-carbonization projects</p>
            <p>Offset your carbon emissions through offset projects</p>
            <a href="">
                <button className="btn-primary py-4 h-[48px] w-full md:w-fit mt-5">Book a demo</button>
            </a>
        </div>

        <div className="w-full lg:w-6/12">
            <h3 className="font-bold mb-5 text-[24px] md:text[35px]">ESG Management</h3>
            <p>Integrate ESG strategies and governance frameworks</p>
            <p>Identify ESG risks and opportunities</p>
            <p>ESG dashboards and reports</p>
            <p>Generate a yearly ESG report</p>
            <a href="">
                <button className="btn-primary py-4 h-[48px] w-full md:w-fit mt-5">Book a demo</button>
            </a>
        </div>

     </div>

    </section>
}



export default Section2;













