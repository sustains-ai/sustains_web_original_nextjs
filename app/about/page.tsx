import HeroAbout from "./components/HeroAbout";
import ANoteFromHeart from "./components/ANoteFromHeart";
import BusinessImpactCards from "./components/BusinessImpactCards";
import KeyTerms from "./components/KeyTerms";
import Quotes from "@/app/components/Quotes";

export default function About() {
  return (
    <>
      <HeroAbout />
      <ANoteFromHeart />
      <BusinessImpactCards />
      <KeyTerms />
         <Quotes />
    </>
  );
}
