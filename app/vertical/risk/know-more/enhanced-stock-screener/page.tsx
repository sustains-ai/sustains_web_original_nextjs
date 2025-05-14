"use client";

import ContactUS from "@/app/vertical/components/ContactUs";
import TailoredFor from "@/app/vertical/components/TailoredFor";
import VerticalDetails from "@/app/vertical/components/VerticalDetails";
import { motion } from "framer-motion";

const EnhancedStockScreener = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="bg-[#FFFFFF] text-gray-800 overflow-hidden relative mt-16">
                {/* Background Decorative Elements */}
                <motion.div
                    className="absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-[#0ABF53] rounded-full opacity-5"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.05 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                    className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-[#089B45] rounded-full opacity-5"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: 0.05 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                />

                <div className="sm:container mx-auto px-4 py-16 relative z-10">

                    <VerticalDetails
                        title="AI-Enhanced Stock Screener"
                        subTitle="Key Capabilities"
                        description="Go beyond static filters. Our AI-driven screener lets you explore markets using natural language, behavioral filters, and explainable ranking algorithms—so you can make informed decisions with confidence."
                        data={[
                            {
                                name: "Conversational Filtering",
                                desc: "Screen using natural phrases like 'undervalued tech stocks with low debt'."
                            },
                            {
                                name: "Explainable Results",
                                desc: "Understand why each stock appears using SHAP values and feature weights."
                            },
                            {
                                name: "Sentiment Integration",
                                desc: "Analyze sentiment from earnings calls, news, and overall market tone."
                            },
                            {
                                name: "User-Adaptive Screening",
                                desc: "Personalized filters based on your past actions and risk preferences."
                            }
                        ]}
                    />

                    <TailoredFor
                        title="Ideal For"
                        description="Analysts, portfolio managers, and informed retail investors who want deeper insights and smarter screening in real time."
                    />

                    <ContactUS title="Discover Opportunities with Explainable AI Screening" />
                </div>
            </div>
        </div>
    );
};

export default EnhancedStockScreener;