"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

interface EVSalesData {
    region: string;
    year: number;
    value: number;
}

export default function EVSalesChart() {
    const [chartData, setChartData] = useState<{
        yearSales: any;
        regionSales: any;
    } | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/ev-sales");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: EVSalesData[] = await response.json();

                // Remove "World" from regions
                const filteredData = data.filter((entry) => entry.region !== "World");

                // Extract unique years and regions
                const years = Array.from(new Set(filteredData.map((entry) => entry.year))).sort((a, b) => a - b);
                const regions = Array.from(new Set(filteredData.map((entry) => entry.region)));

                // Generate consistent colors
                const generateColor = (index: number) => {
                    const hues = [0, 120, 240, 60, 180, 300];
                    return `hsla(${hues[index % hues.length]}, 70%, 50%, 0.7)`;
                };

                // Prepare dataset for Year vs Sales
                const yearSales = {
                    labels: years.map((year) => year.toString()),
                    datasets: [{
                        label: "EV Sales",
                        data: years.map((year) =>
                            filteredData
                                .filter((entry) => entry.year === year)
                                .reduce((sum, e) => sum + e.value, 0)
                        ),
                        backgroundColor: years.map((_, index) => generateColor(index)),
                        barThickness: 40,
                    }],
                };

                // Prepare dataset for Region vs Sales
                const regionSales = {
                    labels: regions,
                    datasets: [{
                        label: "EV Sales",
                        data: regions.map((region) =>
                            filteredData
                                .filter((entry) => entry.region === region)
                                .reduce((sum, e) => sum + e.value, 0)
                        ),
                        backgroundColor: regions.map((_, index) => generateColor(index)),
                        barThickness: 40,
                    }],
                };

                setChartData({
                    yearSales,
                    regionSales,
                });
            } catch (error) {
                console.error("Error fetching EV sales data:", error);
            }
        }

        fetchData();
    }, []);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Sales Volume",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Years",
                },
            },
        },
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-2">EV Sales by Year</h2>
                <div style={{ height: "300px" }}>
                    {chartData?.yearSales ? (
                        <Bar data={chartData.yearSales} options={options} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>

            <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-2">EV Sales by Country</h2>
                <div style={{ height: "300px" }}>
                    {chartData?.regionSales ? (
                        <Bar
                            data={chartData.regionSales}
                            options={{
                                ...options,
                                scales: {
                                    ...options.scales,
                                    x: {
                                        title: {
                                            display: true,
                                            text: "Countries",
                                        },
                                    },
                                },
                            }}
                        />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}