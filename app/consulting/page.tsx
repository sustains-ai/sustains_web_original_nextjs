"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, FileText, BarChart2 } from "lucide-react";

const consultingProjects = [
    {
        title: "Electricity Demand Forecasting",
        description: "Advanced AI models for precise demand forecasting in energy markets.",
        image: "/images/projects/demand_forecasting.jpg",
        report: "/reports/demand_forecasting_2023.pdf",
    },
    {
        title: "EV Sales Analysis & Projections",
        description: "Predictive analytics on electric vehicle adoption and future trends.",
        image: "/images/projects/ev_sales.jpg",
        report: "/reports/ev_sales_2023.pdf",
    },
    {
        title: "Carbon Market & Emissions Trading",
        description: "Optimizing carbon credit trading for sustainability-focused businesses.",
        image: "/images/projects/carbon_trading.jpg",
        report: "/reports/carbon_trading_2023.pdf",
    },
    {
        title: "Smart Grid & Load Flow Analysis",
        description: "Enhancing grid efficiency with real-time AI-driven analytics.",
        image: "/images/projects/grid_analysis.jpg",
        report: "/reports/grid_analysis_2023.pdf",
    },
];

const navItems = [
    { id: "projects", label: "Projects", icon: <FileText className="w-5 h-5" /> },
    { id: "dashboard", label: "Insights", icon: <BarChart2 className="w-5 h-5" /> },
];

export default function ConsultingKnowMorePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState("projects");
    const [evData, setEvData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedSection === "dashboard") {
            async function fetchEVData() {
                setLoading(true);
                try {
                    const response = await fetch("/api/ev-sales?year=2023");
                    const result = await response.json();
                    if (result.status === "success") {
                        setEvData(result.data);
                    } else {
                        throw new Error(result.message);
                    }
                } catch (err) {
                    const errorMessage = err instanceof Error ? err.message : String(err);
                    setError(errorMessage);
                } finally {
                    setLoading(false);
                }
            }
            fetchEVData();
        }
    }, [selectedSection]);

    // Calculate stats for Insights section
    const totalSales = evData
        .filter((d) => d.Parameter === "EV sales" && d.unit === "Vehicles")
        .reduce((sum, d) => sum + d.value, 0);
    const topRegion = evData
        .filter((d) => d.Parameter === "EV sales" && d.unit === "Vehicles")
        .reduce((max, d) => (d.value > (max?.value || 0) ? d : max), null)?.region || "N/A";

    return (
        <div className="flex mt-16 min-h-screen bg-gradient-to-br from-[#E6F4EA] via-[#A5D6A7] to-[#FFFFFF]">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-64" : "w-16"} bg-[#0ABF53] text-white transition-all duration-300 flex-shrink-0 shadow-lg`}
            >
                <div className="h-30 flex justify-around items-center mt-5">
                    {isSidebarOpen && <h1 className="text-xl text-white font-bold">Consulting Insights</h1>}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="mb-2 rounded-full hover:bg-[#089B45]"
                    >
                        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                    </button>
                </div>
                <nav className="mt-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedSection(item.id)}
                            className={`w-full flex items-center p-4 hover:bg-[#089B45] ${selectedSection === item.id ? "bg-[#089B45]" : ""}`}
                        >
                            {item.icon}
                            {isSidebarOpen && <span className="ml-3">{item.label}</span>}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 max-w-7xl mx-auto py-10">
                <motion.header
                    className="mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="py-2 text-4xl md:text-5xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53]">
                        Consulting Insights & Projects
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Explore our cutting-edge consulting work and download detailed reports.
                    </p>
                </motion.header>

                {selectedSection === "projects" ? (
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {consultingProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="rounded-xl border bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h2>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                    <Link
                                        href={project.report}
                                        download
                                        className="inline-flex items-center gap-2 text-[#0ABF53] hover:text-[#089B45] font-medium"
                                    >
                                        Download Report
                                        <FileText className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">EV Sales Insights</h2>
                        <p className="text-gray-600 mb-6">
                            Real-time analysis of 2023 electric vehicle sales data.
                        </p>
                        {loading ? (
                            <p className="text-gray-500">Loading EV sales data...</p>
                        ) : error ? (
                            <p className="text-red-500">Error: {error}</p>
                        ) : evData.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="rounded-lg border bg-[#E6F4EA] p-4 shadow-md">
                                    <h3 className="text-lg font-semibold text-gray-700">Total EV Sales</h3>
                                    <p className="mt-2 text-2xl font-bold text-[#0ABF53]">{totalSales.toLocaleString()} Vehicles</p>
                                </div>
                                <div className="rounded-lg border bg-[#E6F4EA] p-4 shadow-md">
                                    <h3 className="text-lg font-semibold text-gray-700">Top Region</h3>
                                    <p className="mt-2 text-2xl font-bold text-[#0ABF53]">{topRegion}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500">No data available.</p>
                        )}
                        <div className="mt-6">
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center gap- px-6 py-3 bg-[#0ABF53] text-white font-bold rounded-lg hover:bg-[#089B45] transition-all duration-300 shadow-md"
                            >
                                Explore Full Dashboard
                                <BarChart2 className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                )}

                <motion.section
                    className="mt-12 bg-white rounded-xl shadow-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consultancy Services</h2>
                    <p className="text-gray-600 mb-4">
                        Need tailored research or data analysis? Let’s collaborate to drive your sustainability goals.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 justify-center w-[160px] h-[50px] bg-[#0ABF53] text-white font-bold rounded-lg hover:bg-[#089B45] transition-all duration-300 shadow-md"
                    >
                        Get in Touch
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.section>
            </main>
        </div>
    );
}