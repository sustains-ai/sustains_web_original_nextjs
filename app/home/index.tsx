import CTA from "../common/components/CTA"
import FeaturesSection from "../common/components/FeaturesSection"
import HeroSection from "../common/components/HeroSection"
import ProductsSection from "../common/components/ProductsSection"
import QuotesSection from "../common/components/Quotes"
import Sandbox from "../common/components/Sandbox"
import Testimonials from "../common/components/Testimonials"

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <Sandbox />
            <ProductsSection />
            <Testimonials />
            <CTA />
            <QuotesSection />
        </>
    )
}

export default Home