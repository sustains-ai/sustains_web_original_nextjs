"use client";
import FeaturesSection from "./components/FeaturesSection";
import ProductsSection from "./components/ProductsSection";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection"; // Importing new Hero Section
import Quotes from "./components/Quotes";
import Sandbox from "./components/Sandbox";




export default function Home() {
  return (
    <>
      <HeroSection /> {/* Use the new Hero Section component */}
      <FeaturesSection />
         <Sandbox />
      <ProductsSection />
      <Testimonials />
        <Quotes />
    </>
  );
}
