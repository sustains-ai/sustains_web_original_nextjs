"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import StockDataFetcher from "../../../../alpha_vantage/StockDataFetcher";
import PortfolioManager from "../../../../alpha_vantage/PortfolioManager";
import { motion } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";

// Dynamically import StockSearch
const StockSearch = dynamic(() => import("../../../components/StockSearch"), { ssr: false });

export default function PortfolioAnalysisPage() {
    const [selectedStock, setSelectedStock] = useState<{ symbol: string; name: string } | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);

    // Hydration guard
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null; // Or a loading spinner
    }

    return (
        <div className="min-h-screen bg-[#FFFFFF] text-gray-800 overflow-hidden relative">
            {/* Background Decorative Elements - No Blur */}
            <motion.div
                className="absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-[#0ABF53] rounded-full opacity-5"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.05 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-[#089B45] rounded-full opacity-5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.05 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Header */}
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-lg mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Portfolio Analysis
                </motion.h1>

                {/* Stock Search */}
                <motion.div
                    className="bg-white/95 p-6 rounded-xl shadow-xl border border-[#0ABF53]/30 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(10, 191, 83, 0.2)" }}
                >
                    <div className="flex items-center gap-4">
                        <Search className="w-6 h-6 text-[#0ABF53]" />
                        <StockSearch onSelect={(symbol, name) => setSelectedStock({ symbol, name })} />
                    </div>
                </motion.div>

                {/* Selected Stock */}
                {selectedStock && (
                    <motion.div
                        className="bg-white/90 p-6 rounded-xl shadow-xl border-t-4 border-[#0ABF53] mb-12 max-w-md mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
                    >
                        <h3 className="text-2xl font-semibold text-[#0ABF53] mb-4">Selected Stock</h3>
                        <p className="text-lg"><strong className="text-gray-700">Symbol:</strong> {selectedStock.symbol}</p>
                        <p className="text-lg"><strong className="text-gray-700">Name:</strong> {selectedStock.name}</p>
                    </motion.div>
                )}

                {/* Data and Portfolio Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Stock Data Fetcher */}
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] transition-all duration-300 hover:shadow-3xl hover:border-[#089B45]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-2xl font-bold text-[#0ABF53] mb-6 drop-shadow-md">Stock Data</h3>
                        <StockDataFetcher />
                    </motion.div>

                    {/* Portfolio Manager */}
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] transition-all duration-300 hover:shadow-3xl hover:border-[#089B45]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-2xl font-bold text-[#0ABF53] mb-6 drop-shadow-md">Portfolio Overview</h3>
                        <PortfolioManager />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};