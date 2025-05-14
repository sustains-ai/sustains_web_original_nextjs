"use client";

import ContactUS from "@/app/vertical/components/ContactUs";
import TailoredFor from "@/app/vertical/components/TailoredFor";
import VerticalDetails from "@/app/vertical/components/VerticalDetails";
import { motion } from "framer-motion";

const IntegratedRiskAnalysis = () => {

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
    };

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
                        title="Integrated Risk Analysis & Reporting"
                        subTitle="What We Deliver"
                        description="Modern investment and development projects face rising environmental, financial, and regulatory risks. Our platform helps you identify, assess, and monitor these risks across complex, cross-border projects and portfolios."
                        data={[
                            {
                                name: "Early Risk Indicators (ERI)",
                                desc: "Predictive alerts using machine learning and external datasets."
                            },
                            {
                                name: "ESG & Regulatory Monitoring",
                                desc: "Track evolving compliance risks across jurisdictions."
                            },
                            {
                                name: "NLP-Driven Analysis",
                                desc: "Extract critical insights from public disclosures, filings, and news."
                            },
                            {
                                name: "Executive Dashboards",
                                desc: "Visualize exposures, trends, and risk-adjusted opportunities."
                            }
                        ]}
                    />

                    <TailoredFor
                        title="Who It’s For"
                        description="Risk teams, internal analysts, and decision-makers in investment firms and corporates managing complex projects."
                    />

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Success Metrics</h3>
                        <ul className="list-none pl-0 text-gray-700">
                            {[
                                "Increased pre-deal risk identification",
                                "Reduced compliance issues post-investment",
                                "Hours saved in due diligence",
                                "Higher engagement with strategic dashboards",
                                "Lower false positive rates in risk alerts"
                            ].map((metric, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3 py-2"
                                    custom={i}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <span className="text-[#0ABF53] font-bold text-xl">✓</span>
                                    <span>{metric}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <ContactUS title="Comprehensive Risk Visibility for Strategic Investments" />
                </div>
            </div>
        </div>
    );
};

export default IntegratedRiskAnalysis;