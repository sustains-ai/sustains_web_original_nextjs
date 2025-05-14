"use client";

import ContactUS from "@/app/vertical/components/ContactUs";
import TailoredFor from "@/app/vertical/components/TailoredFor";
import VerticalDetails from "@/app/vertical/components/VerticalDetails";
import { motion } from "framer-motion";;

const RiskAwarePlanning = () => {

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
                        title="Personalized Wealth Strategy"
                        subTitle="What Sets Us Apart"
                        description="Most retail investors in emerging markets lack access to tailored, risk-aware financial advice. Our platform fills this gap by delivering dynamic, behaviorally intelligent planning tools designed for real-world use."
                        data={[
                            { name: "Behavioral Risk Profiling", desc: "Go beyond questionnaires using activity data and gamified assessments." },
                            { name: "Dynamic Goal Simulation", desc: "Monitor goal feasibility under different market scenarios." },
                            { name: "Localized Investment Mapping", desc: "Integrates diverse asset types (EPF, gold, chit funds, FDs, crypto)." },
                            { name: "Real-Time Adjustments", desc: "Adapts asset allocation based on macro/micro events and user behavior." },
                        ]}
                    />
                    <TailoredFor
                        title="Built For"
                        description="Retail investors in India, Southeast Asia, Africa, and other emerging economies seeking intuitive, affordable financial planning tools rooted in local realities."
                    />

                    <ContactUS title="Goal-Based Financial Planning for Emerging Market Retail Investors" />
                </div>
            </div>
        </div>
    );
};

export default RiskAwarePlanning;