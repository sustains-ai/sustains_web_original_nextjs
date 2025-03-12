"use client";

import { useState } from "react";

interface StockSearchProps {
    onSelect: (symbol: string, name: string) => void; // Callback when a stock is selected
}

export default function StockSearch({ onSelect }: StockSearchProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const searchStock = async () => {
        setError(null);
        setResults([]);
        setLoading(true);

        if (!query.trim()) {
            setError("Please enter a stock name.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`/api/stock-symbol-search?query=${query}`);
            const data = await response.json();
            setResults(data.bestMatches || []);
        } catch (err) {
            setError("Failed to fetch stock data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white w-full max-w-md">
            <h2 className="text-lg font-semibold mb-3">🔍 Search for a Stock</h2>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter stock name (e.g., Tesla)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="p-2 border rounded w-full"
                />
                <button onClick={searchStock} className="p-2 bg-[#0ABF53] text-white rounded">
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <ul className="mt-4">
                {results.map((stock, index) => (
                    <li
                        key={index}
                        className="p-2 border-b cursor-pointer hover:bg-gray-100 transition"
                        onClick={() => onSelect(stock["1. symbol"], stock["2. name"])}
                    >
                        {stock["1. symbol"]} - {stock["2. name"]}
                    </li>
                ))}
            </ul>
        </div>
    );
}
