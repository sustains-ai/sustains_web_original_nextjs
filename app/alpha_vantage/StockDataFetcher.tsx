"use client";

import { useState } from "react";
import axios from "axios";

export default function StockDataFetcher() {
    const [symbol, setSymbol] = useState<string>("IBM");
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchStockData = async () => {
        setError(null);
        setData(null);

        if (!symbol) {
            setError("Please enter a stock symbol.");
            return;
        }

        try {
            const response = await axios.get(`/api/stock-data-time-series-daily?symbol=${symbol}`);
            setData(response.data);
        } catch (err) {
            console.error("Error fetching stock data:", err);
            setError("Failed to fetch stock data. Please try again.");
        }
    };

    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Stock Data Fetcher</h2>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Enter stock symbol (e.g., AAPL)"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                    className="p-2 border rounded w-48"
                />
                <button onClick={fetchStockData} className="p-2 bg-blue-500 text-white rounded">
                    Get Stock Data
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {data && <pre className="text-xs overflow-auto">{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
