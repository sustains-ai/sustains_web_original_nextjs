// components/InsiderTransactions.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Transaction = {
    name: string;
    transaction_type: string; // Adjusted to match Alpha Vantage
    share: string; // Number of shares as string
    ticker: string;
    // Add more fields as needed from API response
};

export default function InsiderTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchTransactions = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('/api/alphavantage', {
                functionName: 'INSIDER_TRANSACTIONS',
                symbol: 'AAPL', // Hardcoded for now—make dynamic later
            });
            console.log('Insider Transactions Response:', res.data); // Debug log

            const feed = res.data?.insider_transactions; // Alpha Vantage key
            if (Array.isArray(feed)) {
                setTransactions(feed);
            } else {
                setError('Insider transactions data is not in the expected format.');
            }
        } catch (err: any) {
            console.error('Error fetching insider transactions:', err);
            setError(err.response?.data?.error || err.message || 'Failed to fetch insider transactions.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
        const interval = setInterval(fetchTransactions, 5 * 60 * 1000); // Refresh every 5 mins
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="mt-2 text-gray-600 text-lg">Loading insider transactions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg text-center">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-md">
                Insider Transactions
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0ABF53]">
                <div className="space-y-4">
                    {transactions.slice(0, 10).map((item, idx) => ( // Limit to 10 for UI
                        <div
                            key={idx}
                            className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-b-0 hover:bg-gray-50 transition-colors"
                        >
                            <div>
                                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                <p className="text-xs text-gray-600">{item.ticker}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-800">
                                    {item.transaction_type} {item.share} shares
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}