import CuriositySection from "../ui/Home/sections/CuriousitySection";
import HeroSection from "../ui/Home/sections/HeroSection";
import ProductSection from "../ui/Home/sections/ProductSection"
import TestimonySection from "../ui/Home/sections/TestimonySection";
import Footer from "../ui/Footer";


export default function Home() {
    return ( 
      <main>
        <HeroSection />
        <CuriositySection/>
        <ProductSection />
        <TestimonySection/>
        {/* <Footer/> */}
      </main>
    )
      
}