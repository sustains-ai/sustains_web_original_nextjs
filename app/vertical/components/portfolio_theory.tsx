// components/portfolio_theory.tsx
"use client";

import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import ContactUS from "./ContactUs";
import VerticalDetails from "./VerticalDetails";

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
                    "#FF5733",
                    "#E231E2",
                    "#111169",
                    "#78CDE2",
                    "#FA0202",
                    "#FA7A02",
                    "#028FFA",
                    "#FF007F",
                    "#05806D",
                    "#9BCE24"
                  ],
                borderWidth: 1,
                borderColor: "#FFFFFF",
            },
        ],
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

                <VerticalDetails
                    title="Portfolio Analysis"
                    subTitle="Risk Measures We Use"
                    description="Portfolio management involves selecting and managing an investment mix to achieve financial goals while balancing risk and return. At Sustains.ai, we use advanced analytics to assess risk, optimize allocations, and enhance performance."
                    data={[
                        { name: "Variance", desc: "Captures return volatility to indicate overall risk." },
                        { name: "Value at Risk (VaR)", desc: "Estimates maximum expected loss within a confidence level." },
                        { name: "Conditional Value at Risk (CVaR)", desc: "Measures average loss beyond the VaR threshold." },
                        { name: "Sharpe Ratio", desc: "Evaluates returns relative to risk taken." },
                        { name: "Sortino Ratio", desc: "Focuses on downside risk rather than total volatility." },
                        { name: "Maximum Drawdown", desc: "Highlights the largest historical portfolio drop." },
                    ]}
                />

                {/* Market Coverage with Pie Chart */}
                <motion.div
                    className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto mb-12"
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

                <ContactUS title="Tailored Portfolio Solutions" />
            </div>
        </div>
    );
}