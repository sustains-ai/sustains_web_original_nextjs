import Blog from "../common/components/Blog"
import CTA from "../common/components/CTA"
import FeaturesTab from "../common/components/Features"
import FeaturesSection from "../common/components/FeaturesSection"
import HeroSection from "../common/components/HeroSection"
import QuotesSection from "../common/components/Quotes"
import Testimonials from "../common/components/Testimonials"

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <FeaturesTab />
            <CTA />
            <Testimonials />
            <QuotesSection />
            <Blog />
        </>
    )
}

export default Home