import Image from "next/image";

const Section = () => {
    return <section className="hands flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-10 my-40">
        <div className="flex flex-col mt-5 gap-3 md:w-6/12">
          <h2 className="font-bold text-[25px] md:text-[30px] lg:text-[48px] max-w-[540px}">Why make your<br /> business <br /> sustainable?</h2>

          <ul>
          <li className="text-base md:text-[20px] my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /><p>Reduce cost</p></li>
          <li className="text-base md:text-[20px] my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /><p>Competitve advantage</p></li>
          <li className="text-base md:text-[20px] my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} /><p>Transparendy to customers and investors</p></li>
          <li className="text-base md:text-[20px] my-2 flex items-start gap-2"><Image src='/icon.png' alt="tick-img" width={20} height={24} />Be ahead of climate regulations and compliances<p></p></li>
        </ul>
        <a href="https://beyondsustainability.medium.com/business-case-why-make-your-business-sustainable-36df066c6a8b" target="_blank" rel="noreferrer">
        <p className="font-medium flex items-center gap-3">Read more detailed case study > </p>
        </a>
        </div>

        <figure className="md:w-6/12">
          <div className="grayscale-1 md:w-11/12 mx-auto sm:6/12 md:ml-auto block">
            <Image src='/hand.jpg' alt="hand-img" width={500} height={500} />
          </div>

        </figure>

     
    </section>


}

export default Section;