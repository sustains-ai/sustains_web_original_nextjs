"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PortfolioAnalyticsCard() {
    const router = useRouter();

    return (
        <motion.div
            className="rounded-xl shadow-lg overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Card Content */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Portfolio Analytics
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Gain deep insights into your portfolio with advanced analytics and risk assessment.
                </p>

                {/* Status Indicator */}
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                    Available Now
                </span>

                {/* Button */}
                <div className="mt-4">
                    <button
                        onClick={() => router.push("/vertical/risk/know-more/portfolio-analysis")}
                        className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Go to Portfolio Analysis →
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
