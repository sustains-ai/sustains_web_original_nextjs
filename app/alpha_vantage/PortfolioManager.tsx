"use client";

import { useState } from "react";
import axios from "axios";

export default function PortfolioManager() {
    const [portfolio, setPortfolio] = useState<string[]>([]);
    const [performance, setPerformance] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [inputSymbol, setInputSymbol] = useState<string>("");

    const addStock = () => {
        if (inputSymbol && !portfolio.includes(inputSymbol.toUpperCase())) {
            setPortfolio([...portfolio, inputSymbol.toUpperCase()]);
        }
        setInputSymbol("");
    };

    const analyzePortfolio = async () => {
        setError(null);
        setPerformance(null);

        if (portfolio.length === 0) {
            setError("Portfolio is empty.");
            return;
        }

        try {
            const response = await axios.post("/api/portfolio-performance", { portfolio });
            setPerformance(response.data.portfolio);
        } catch (err) {
            console.error("Error analyzing portfolio:", err);
            setError("Failed to analyze portfolio.");
        }
    };

    return (
        <div className="p-4 border rounded shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-4">Portfolio Manager</h2>

            {/* Input & Add Stock */}
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Add stock (e.g., AAPL)"
                    value={inputSymbol}
                    onChange={(e) => setInputSymbol(e.target.value.toUpperCase())}
                    className="p-2 border rounded w-48"
                />
                <button onClick={addStock} className="p-2 bg-green-500 text-white rounded">
                    Add Stock
                </button>
            </div>

            {/* Portfolio List */}
            <ul className="mt-2">
                {portfolio.map((stock) => (
                    <li key={stock} className="text-sm text-gray-700">{stock}</li>
                ))}
            </ul>

            {/* Analyze Portfolio Button */}
            <button onClick={analyzePortfolio} className="mt-4 p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
                Analyze Portfolio
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Portfolio Performance Table */}
            {performance && (
                <div className="mt-6 p-4 border rounded bg-gray-100">
                    <h3 className="text-md font-semibold mb-2">Portfolio Analysis</h3>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border">Symbol</th>
                            <th className="py-2 px-4 border">Latest Close</th>
                            <th className="py-2 px-4 border">Volume</th>
                        </tr>
                        </thead>
                        <tbody>
                        {performance.map((stock: any, index: number) => {
                            const latestDate = stock.data["Time Series (Daily)"]
                                ? Object.keys(stock.data["Time Series (Daily)"])[0]
                                : null;
                            const latestData = latestDate ? stock.data["Time Series (Daily)"][latestDate] : null;

                            return (
                                <tr key={index} className="text-center border-b">
                                    <td className="py-2 px-4 border">{stock.symbol}</td>
                                    <td className="py-2 px-4 border">
                                        {latestData ? latestData["4. close"] : "N/A"}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {latestData ? latestData["5. volume"] : "N/A"}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
