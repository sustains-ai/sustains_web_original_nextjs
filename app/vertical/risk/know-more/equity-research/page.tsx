"use client";

import ContactUS from "@/app/vertical/components/ContactUs";
import TailoredFor from "@/app/vertical/components/TailoredFor";
import VerticalDetails from "@/app/vertical/components/VerticalDetails";
import { motion } from "framer-motion";

const EquityResearch = () => {

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
                        title="AI-Integrated Equity Research & Valuation"
                        subTitle="Platform Features"
                        description="Traditional equity research is time-consuming and reactive. Our platform combines natural language processing with robust valuation models to streamline your analysis process."
                        data={[
                        {
                            name: "Earnings Call Insights",
                            desc: "NLP-driven summaries highlighting key themes, sentiment, and forward guidance."
                        },
                        {
                            name: "Automated Valuation Models",
                            desc: "AI supports DCF, Residual Income, Dividend Discount, and Multiples methodologies."
                        },
                        {
                            name: "Market-Aligned Forecasting",
                            desc: "Adjusts projections based on real-time macroeconomic shifts and market trends."
                        },
                        {
                            name: "AI Research Reports",
                            desc: "Instantly generate investment theses and research notes using AI."
                        }]}
                    />

                    <TailoredFor
                        title="Best For"
                        description="Equity analysts, advisory firms, and fund managers seeking scalable, repeatable, and explainable research outputs."
                    />

                    <ContactUS title="Faster, Smarter Equity Research with AI Support" />

                </div>
            </div>
        </div>
    );
};

export default EquityResearch;