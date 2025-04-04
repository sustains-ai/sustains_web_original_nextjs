import Blog from "../common/components/Blog"
import CTA from "../common/components/CTA"
import FeaturesTab from "../common/components/Features"
import FeaturesSection from "../common/components/FeaturesSection"
import HeroSection from "../common/components/HeroSection"
import QuotesSection from "../common/components/Quotes"
import Testimonials from "../common/components/Testimonials"
import CuratedNews from "../common/components/CuratedNews"

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <FeaturesTab />
            <CTA />
            <Testimonials />
            <CuratedNews />
            <QuotesSection />

        </>
    )
}

export default Home