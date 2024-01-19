import Image from "next/image";

const Main = () => {
  return (
    <header className="md:my-32 my-20">
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col mt-5 gap-3 md:w-7/12">
          <h1 className="font-bold leading-[38px] md:leading-[45px] lg:leading-[60px] text-[25px] md:text-[30px] lg:text-[48px] max-w-[540px}  pl-11 ml-20">Let us Transform your sustainability journey.</h1>
          <p className="md:text-[20px] pl-11 ml-20" >Reduce your environmental impact by using a <br /> scientific data-driven approach and restore damage.</p>
          <button className="btn-primary py-12 md:py-2 h-[48px] w-full md:w-fit ml-32 bg-green-900 text-slate-100 ">Contact Us</button>
        </div>
        <figure className="md:w-5/12">
         <div className="grayscale-0 transition-filter duration-300 sm:w-6/12 mx-auto md:w-11/12 md:ml-auto block relative z-10">
          <Image  src="/heroImage.jpg" alt="hero-img " width={526} height={447}   />
         </div>
        </figure>
      </section>
      <div>
         <p className="  ml-[115px]">Trusted by companies</p> 
         <div className="flex  space-x-8 mt-5 ml-24">
        
         <Image src='/bend.png' alt="bend-img"  width={64} height={64} />
         <Image src='/vizdale-com.png' alt=" vizdale communitiy image" width={63.107} height={63.107}  />
         {/* <Image src='/Vizdale.png' alt="vizdale-logo" width={130} height={47.33}  /> */}
         <h4 className="font-semibold text-5xl text-slate-700">Vizdale</h4>
         <Image src='/frozen-iris.png' alt="frozen-logo " width={243} height={35} /> 
         </div>
      </div>

    </header>
    

  )
}


export default Main;