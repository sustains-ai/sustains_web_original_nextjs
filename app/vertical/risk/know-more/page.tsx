"use client";

import React from "react";
import { motion } from "framer-motion";
import RiskProductsCard from "../../components/FinanceProductsCard";

const riskProducts = [
    {
        id: "portfolio-analyser",
        title: "Portfolio Analyser",
        description: "Analyze and optimize your portfolio with advanced AI-driven risk insights.",
        img: "/images/portfolio_analysis.jpg",
        link: "/vertical/risk/know-more/portfolio-analyser"
    },
    {
        id: "trading-algorithms",
        title: "Trading Algorithms",
        description: "Automated trading strategies designed to enhance your trading performance.",
        img: "/images/trading.jpg",
        link: "/vertical/risk/know-more/trading-algorithms"
    },
    {
        id: "valuation",
        title: "Valuation",
        description: "Accurate company valuation tools for smarter investment decisions.",
        img: "/images/valuation.jpg",
        link: "/vertical/risk/know-more/valuation"
    },
    {
        id: "news",
        title: "News",
        description: "Stay ahead with real-time financial news and insights.",
        img: "/images/news.jpg",
        link: "/vertical/risk/know-more/news"
    }
];

export default function RiskKnowMorePage() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.h1
                    className="text-5xl font-extrabold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] leading-normal"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Portfolio Strategies, Algorithms, and More
                </motion.h1>
                <motion.p
                    className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Explore our cutting-edge tools for portfolio analysis, algorithmic trading, valuation, and financial news.
                </motion.p>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {riskProducts.map((product) => (
                        <RiskProductsCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
