"use client";

import { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Market options with API format
const markets = {
    "US (NYSE/NASDAQ)": "",
    "UK (LSE)": ".LON",
    "Canada (TSX)": ".TRT",
    "Canada (TSXV)": ".TRV",
    "Germany (XETRA)": ".DEX",
    "India (BSE)": ".BSE",
    "China (Shanghai)": ".SHH",
    "China (Shenzhen)": ".SHZ",
};

export default function StockDataFetcher() {
    const [symbol, setSymbol] = useState<string>("IBM");
    const [market, setMarket] = useState<string>("US (NYSE/NASDAQ)");
    const [stocks, setStocks] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchStockData = async () => {
        setError(null);
        setLoading(true);

        if (!symbol.trim()) {
            setError("Please enter a stock symbol.");
            setLoading(false);
            return;
        }

        // Fix TypeScript error
        const marketSuffix = markets[market as keyof typeof markets] ?? "";
        const fullSymbol = `${symbol}${marketSuffix}`;

        try {
            // Fetch stock data from the existing API endpoint
            const response = await axios.get(`/api/stock-data-time-series-daily?symbol=${fullSymbol}`);

            const timeSeries = response.data["Time Series (Daily)"];
            if (!timeSeries) {
                setError("Invalid data received. Please check the stock symbol.");
                setLoading(false);
                return;
            }

            const dates = Object.keys(timeSeries).slice(0, 30).reverse(); // Last 30 days
            const closingPrices = dates.map((date) => parseFloat(timeSeries[date]["4. close"]));

            // Add new stock data to the list
            setStocks((prevStocks) => [
                ...prevStocks,
                {
                    label: `${fullSymbol}`,
                    data: closingPrices,
                    borderColor: getRandomColor(), // Random color for each stock
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    pointRadius: 2,
                    tension: 0.3,
                },
            ]);
        } catch (err) {
            console.error("Error fetching stock data:", err);
            setError("Failed to fetch stock data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Function to generate random colors for each stock line
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 6; i--; ) color += letters[Math.floor(Math.random() * 16)];
        return color;
    };

    // Chart data
    const chartData = {
        labels: stocks.length > 0 ? Object.keys(stocks[0].data) : [],
        datasets: stocks,
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📈 Multi-Market Stock Data</h2>

            {/* Market Selection & Input */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <select
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}
                    className="p-3 border rounded-lg w-full sm:w-auto"
                >
                    {Object.keys(markets).map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Enter stock symbol (e.g., AAPL)"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                    className="p-3 border rounded-lg w-full sm:w-auto"
                />

                <button
                    onClick={fetchStockData}
                    className="p-3 bg-[#0ABF53] text-white rounded-lg hover:bg-green-600 transition"
                >
                    {loading ? "Fetching..." : "Add Stock"}
                </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 mt-3">{error}</p>}

            {/* Chart Display */}
            {stocks.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Stock Price Comparison</h3>
                    <div className="h-80">
                        <Line
                            data={chartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        display: true,
                                        title: { display: true, text: "Date", font: { size: 14 } },
                                        grid: { display: false }, // Hides x-axis grid
                                    },
                                    y: {
                                        display: true,
                                        title: { display: true, text: "Closing Price ($)" },
                                        grid: { display: false }, // Hides y-axis grid
                                    },
                                },
                                plugins: {
                                    legend: { display: true },
                                    tooltip: { enabled: true },
                                },
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
