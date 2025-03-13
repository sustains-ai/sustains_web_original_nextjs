"use client";

import { useState } from "react";

export default function PortfolioManager() {
    const [portfolio, setPortfolio] = useState<{ symbol: string; name: string; quantity: number; price: number; date: string }[]>([]);
    const [inputSymbol, setInputSymbol] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputQuantity, setInputQuantity] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [inputDate, setInputDate] = useState("");

    const addStock = () => {
        if (inputSymbol && inputName && inputQuantity && inputPrice && inputDate) {
            setPortfolio([...portfolio, {
                symbol: inputSymbol.toUpperCase(),
                name: inputName,
                quantity: Number(inputQuantity),
                price: Number(inputPrice),
                date: inputDate
            }]);

            setInputSymbol("");
            setInputName("");
            setInputQuantity("");
            setInputPrice("");
            setInputDate("");
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] transition-all duration-300 hover:shadow-3xl hover:border-[#089B45]">
            <h3 className="text-2xl font-bold text-[#0ABF53] mb-6 drop-shadow-md">Portfolio Overview</h3>

            {/* Stock Input Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Stock Symbol"
                    value={inputSymbol}
                    onChange={(e) => setInputSymbol(e.target.value)}
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Stock Name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    className="border p-2 rounded-md"
                />
                <input
                    type="number"
                    placeholder="Number of Stocks"
                    value={inputQuantity}
                    onChange={(e) => setInputQuantity(e.target.value)}
                    className="border p-2 rounded-md"
                />
                <input
                    type="number"
                    placeholder="Price per Stock"
                    value={inputPrice}
                    onChange={(e) => setInputPrice(e.target.value)}
                    className="border p-2 rounded-md"
                />
                <input
                    type="date"
                    placeholder="Purchase Date"
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                    className="border p-2 rounded-md"
                />
            </div>

            <button
                onClick={addStock}
                className="bg-[#0ABF53] text-white px-4 py-2 rounded-md hover:bg-[#089B45] transition"
            >
                Add Stock
            </button>

            {/* Portfolio Display */}
            <div className="mt-6">
                {portfolio.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Symbol</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {portfolio.map((stock, index) => (
                            <tr key={index} className="text-center">
                                <td className="border p-2">{stock.symbol}</td>
                                <td className="border p-2">{stock.name}</td>
                                <td className="border p-2">{stock.quantity}</td>
                                <td className="border p-2">${stock.price.toFixed(2)}</td>
                                <td className="border p-2">{stock.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">No stocks added yet.</p>
                )}
            </div>
        </div>
    );
}
