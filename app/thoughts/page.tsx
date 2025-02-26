import RiskMeasures from "./components/RiskMeasures";
import Quotes from "@/app/components/Quotes";
import HeroThoughts from "./components/HeroThoughts";
import Blogs from "./components/blogs";
export default function About() {
  return (
    <>
        <HeroThoughts />
        <Blogs />
         <RiskMeasures />
        <Quotes />

    </>
  );
}