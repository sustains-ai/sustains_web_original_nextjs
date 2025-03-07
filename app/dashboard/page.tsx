"use client";

import { useState } from "react";
import EVSalesChart from "@/app/dashboard/EVSalesChart";
import Link from "next/link";
import { ChevronRight, ChevronLeft, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navItems = [
        { id: "ev-sales", label: "EV Sales", icon: <BarChart2 className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#E6F4EA] via-[#A5D6A7] to-[#FFFFFF]">
            {/* Sidebar */}
            <aside
                className={`${
                    isSidebarOpen ? "w-64" : "w-16"
                } bg-[#0ABF53] text-white transition-all duration-500 flex-shrink-0 shadow-2xl`}
            >
                <div className="p-4 flex justify-between items-center">
                    {isSidebarOpen && (
                        <motion.h1
                            className="text-2xl font-extrabold tracking-tight"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            EV Analytics
                        </motion.h1>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 rounded-full hover:bg-[#089B45] transition-colors duration-300"
                    >
                        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                    </button>
                </div>
                <nav className="mt-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className="w-full flex items-center p-4 bg-[#089B45] text-white hover:bg-[#067F3A] transition-colors duration-300"
                        >
                            {item.icon}
                            {isSidebarOpen && (
                                <span className="ml-3 font-medium">{item.label}</span>
                            )}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.header
                    className="mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-md">
                        EV Analytics Dashboard
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 font-medium">
                        Real-time insights into 2023 electric vehicle sales
                    </p>
                </motion.header>

                {/* Chart Section */}
                <motion.section
                    className="mb-12 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 border border-gray-100/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">EV Sales Analysis</h2>
                    <div className="min-h-[600px]">
                        <EVSalesChart />
                    </div>
                </motion.section>

                {/* Consultancy Call-to-Action */}
                <motion.section
                    className="bg-gradient-to-r from-[#0ABF53] to-[#089B45] rounded-xl shadow-2xl p-6 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Need Deeper EV Insights?</h2>
                    <p className="text-white/90 mb-6">
                        Unlock tailored EV market analysis and forecasts for your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0ABF53] rounded-lg hover:bg-gray-100 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Contact Us
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.section>
            </main>
        </div>
    );
}