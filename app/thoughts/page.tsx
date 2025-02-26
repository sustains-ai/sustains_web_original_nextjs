
import MonteCarlo from "./components/MonteCarlo";
import RiskMeasures from "./components/RiskMeasures";
import Quotes from "@/app/components/Quotes";
import HeroThoughts from "./components/HeroThoughts";
export default function About() {
  return (
    <>
        <HeroThoughts />
        <MonteCarlo />
         <RiskMeasures />
        <Quotes />

    </>
  );
}