"use client"; // ✅ Ensure this is a Client Component

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RiskProductsCard from "../../components/FinanceProductsCard";
import dynamic from "next/dynamic";
import MarketStatus from "@/app/vertical/components/GlobalMarketStatus";


// ✅ Dynamically import StockSearch to prevent SSR issues
const StockSearch = dynamic(() => import("../../components/StockSearch"), { ssr: false });

const riskProducts = [
    {
        id: "portfolio-analysis",
        title: "Portfolio Analysis",
        description: "Smarter Portfolio Management for Smarter Investing",
        img: "/images/portfolio_analysis.jpg",
        link: "/vertical/risk/know-more/portfolio-analysis"
    },
    {
        id: "risk-aware-planning",
        title: "Personalized Risk-Aware Wealth Planning",
        description: "Goal-Based Financial Planning for Emerging Market Retail Investors",
        img: "/images/company_overview.jpg",
        link: "/vertical/risk/know-more/risk-aware-planning"
    },
    {
        id: "integrated-risk-analysis",
        title: "Integrated Risk Analysis & Reporting",
        description: "Comprehensive Risk Visibility for Strategic Investments",
        img: "/images/trading.jpg",
        link: "/vertical/risk/know-more/integrated-risk-analysis"
    },
    {
        id: "equity-research",
        title: "AI-Integrated Equity Research & Valuation",
        description: "Faster, Smarter Equity Research with AI Support",
        img: "/images/valuation.jpg",
        link: "/vertical/risk/know-more/equity-research"
    },
    {
        id: "enhanced-stock-screener",
        title: "AI-Enhanced Stock Screener",
        description: "Discover Opportunities with Explainable AI Screening",
        img: "/images/company_overview.jpg",
        link: "/vertical/risk/know-more/enhanced-stock-screener"
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
    const [selectedStock, setSelectedStock] = useState<{ symbol: string; name: string } | null>(null);

    return (
        <section className="py-30 bg-gradient-to-b from-gray-50 to-white">
            <div className="sm:container mx-auto px-4">
                <motion.h1
                    className="text-5xl font-extrabold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] leading-normal"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Portfolio Strategies, Algorithms, and More
                </motion.h1>

                <div className="flex justify-center mb-12">
                    <MarketStatus/>
                </div>

                {selectedStock && (
                    <div className="mt-4 p-4 border rounded bg-gray-100 text-center">
                        <h3 className="text-lg font-semibold">Selected Stock</h3>
                        <p><strong>Symbol:</strong> {selectedStock.symbol}</p>
                        <p><strong>Name:</strong> {selectedStock.name}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {riskProducts.map((product) => (
                        <RiskProductsCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
