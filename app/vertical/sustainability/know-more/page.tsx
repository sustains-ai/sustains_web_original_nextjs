"use client";

import React from "react";
import { motion } from "framer-motion";
import EnergyProductsCard from "../../components/EnergyProductsCard";

const energyPortfolioProducts = [
    {
        id: "energy-optimization",
        title: "Resource Optimization",
        description: "Optimize energy assets and investment decisions with AI-powered forecasting.",
        img: "/images/energy-optimization.jpg",
        link: "/vertical/sustainability/know-more/energy-optimization"
    },
    {
        id: "oil-data",
        title: "Global Oil Dashboard",
        description: "Visualize monthly oil data trends across countries for strategic insights.",
        img: "/images/oil-dashboard.jpg",
        link: "/vertical/sustainability/know-more/oil-data"
    },

    {
        id: "grid-analytics",
        title: "Grid Analytics & Risk Assessment",
        description: "Evaluate energy infrastructure risks and optimize grid efficiency for stable power flow.",
        img: "/images/grid-analytics.jpg",
        link: "/vertical/sustainability/know-more/grid-analytics"
    },
    {
        id: "sustainability-reporting",
        title: "Energy Portfolio Sustainability Reporting",
        description: "Automate carbon footprint tracking and sustainability reports for energy investments.",
        img: "/images/sustainability-reporting.jpg",
        link: "/vertical/sustainability/know-more/sustainability-reporting"
    }
];

export default function SustainabilityKnowMorePage() {
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
                    AI-Driven Energy Portfolio Analysis
                </motion.h1>
                <motion.p
                    className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Maximize the efficiency of your energy investments with cutting-edge AI analytics.
                    Our platform enables energy portfolio managers, grid operators, and investors
                    to optimize assets, mitigate risks, and track sustainability metrics effortlessly.
                </motion.p>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {energyPortfolioProducts.map((product) => (
                        <EnergyProductsCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
