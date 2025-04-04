// components/portfolio_theory.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import Link from "next/link";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioTheory() {
    // Pie chart data for Markets We Cover
    const marketData = {
        labels: [
            "US (NYSE, NASDAQ, AMEX)",
            "UK (LSE)",
            "Canada (TSX, TSXV)",
            "Germany (XETRA, FWB)",
            "India (NSE, BSE)",
            "China (Shanghai, Shenzhen)",
            "Japan (Tokyo)",
            "Hong Kong (HKEX)",
            "Australia (ASX)",
            "Brazil (B3)",
        ],
        datasets: [
            {
                data: Array(10).fill(10), // Equal slices for demo
                backgroundColor: [
                    "#0ABF53", "#089B45", "#66BB6A", "#4CAF50", "#81C784",
                    "#A5D6A7", "#C8E6C9", "#D4E157", "#F4FF81", "#DCEDC8",
                ],
                borderWidth: 1,
                borderColor: "#FFFFFF",
            },
        ],
    };

    // Animation variants for risk measures
    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
    };

    return (
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
                {/* Header */}
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-lg mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Portfolio Analysis
                    <motion.span
                        className="block w-32 h-1 bg-gradient-to-r from-[#089B45] to-[#0ABF53] rounded-full mx-auto mt-2"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    />
                </motion.h1>

                {/* Portfolio Management Explanation */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0ABF53] mb-4">What is Portfolio Management?</h2>
                    <p className="text-gray-700 mb-6">
                        Portfolio management involves selecting and managing an investment portfolio to achieve financial goals while balancing risk and return. We utilize advanced risk measures to analyze and optimize portfolios.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Measures We Use</h3>
                    <ul className="list-none pl-0 text-gray-700">
                        {[
                            { name: "Variance", desc: "Measures the dispersion of returns, indicating overall risk." },
                            { name: "Value at Risk (VaR)", desc: "Estimates potential losses over a specified period at a given confidence level." },
                            { name: "Conditional Value at Risk (CVaR)", desc: "Measures the average loss beyond VaR (Expected Shortfall)." },
                            { name: "Sharpe Ratio", desc: "Evaluates risk-adjusted returns to compare investment performance." },
                            { name: "Sortino Ratio", desc: "Focuses on downside risk, refining the Sharpe Ratio." },
                            { name: "Maximum Drawdown", desc: "Identifies the largest decline from peak to trough." },
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start gap-3 py-2"
                                custom={i}
                                variants={listItemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="text-[#0ABF53] font-bold text-xl">→</span>
                                <div>
                                    <strong>{item.name}</strong>: {item.desc}
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Market Coverage with Pie Chart */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Markets We Cover</h3>
                    <p className="text-gray-700 mb-6">
                        We analyze stocks from major global markets using data from Yahoo Finance and Alpha Vantage.
                    </p>
                    <div className="h-64 mb-6">
                        <Pie
                            data={marketData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { position: "right", labels: { font: { size: 12 } } },
                                    tooltip: { enabled: true },
                                },
                            }}
                        />
                    </div>
                </motion.div>

                {/* Contact Us Section */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Tailored Portfolio Solutions</h3>
                    <p className="text-gray-700 mb-4">
                        Contact us for daily portfolio reports, risk analysis, and compliance solutions tailored to your needs—whether you’re a fund manager, investor, or institution.
                    </p>
                    <p className="text-lg font-semibold text-[#0ABF53] mb-6">We are your personal quant.</p>
                    <Link href="/contact">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#089B45] to-[#0ABF53] text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}