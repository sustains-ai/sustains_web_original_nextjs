import HeroAbout from "./components/HeroAbout";
import ANoteFromHeart from "./components/ANoteFromHeart";
import BusinessImpactCards from "./components/BusinessImpactCards";
import KeyTerms from "./components/KeyTerms";
import Quotes from "@/app/common/components/Quotes";
import TechEcosystem from "./components/TechEchoSystem";
import TeamSection from "./components/TeamSection";


export default function About() {
  return (
    <>
      <HeroAbout />
      <ANoteFromHeart />
      <BusinessImpactCards />
        <TechEcosystem/>
        <TeamSection/>
      <KeyTerms />
         <Quotes />
    </>
  );
}
