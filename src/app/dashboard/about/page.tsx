import HeroSection from "../../ui/About/section/HeroSection";
import Mission from "@/app/ui/About/section/MissionSection";
import CardSection from "@/app/ui/About/section/CardSection";
import Strategy from "@/app/ui/About/section/StrategySection";
import TeamSection from "@/app/ui/About/section/TeamSection";
import Footer from "@/app/ui/Footer";

export default function About() {
    return ( 
      <main>
        <HeroSection />
        <Mission />
        <CardSection />
        <Strategy />
        <TeamSection />
      </main>
    )
      
}
  
  