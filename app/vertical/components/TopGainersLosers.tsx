// components/TopGainersLosers.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type MarketItem = {
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
};

type MarketData = {
    top_gainers: MarketItem[];
    top_losers: MarketItem[];
    most_actively_traded: MarketItem[];
};

export default function TopGainersLosers() {
    const [data, setData] = useState<MarketData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchTopGainersLosers = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('/api/alphavantage', {
                functionName: 'TOP_GAINERS_LOSERS',
            });
            console.log('Top Gainers/Losers Response:', res.data); // Debug log

            if (res.data && res.data.top_gainers && res.data.top_losers) {
                setData({
                    top_gainers: res.data.top_gainers,
                    top_losers: res.data.top_losers,
                    most_actively_traded: res.data.most_actively_traded || [],
                });
            } else {
                setError('Invalid data format received from API.');
            }
        } catch (err: any) {
            console.error('Error fetching top gainers/losers:', err);
            setError(err.response?.data?.error || err.message || 'Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopGainersLosers();
        const interval = setInterval(fetchTopGainersLosers, 5 * 60 * 1000); // Refresh every 5 mins
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
                <p className="mt-2 text-gray-600 text-lg">Loading market data...</p>
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
                Top Gainers & Losers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Top Gainers */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Gainers</h3>
                    <div className="space-y-4">
                        {data?.top_gainers.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{item.ticker}</p>
                                    <p className="text-xs text-gray-600">${item.price}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-green-600">+{item.change_amount}</p>
                                    <p className="text-xs text-green-500">{item.change_percentage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Losers */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Losers</h3>
                    <div className="space-y-4">
                        {data?.top_losers.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{item.ticker}</p>
                                    <p className="text-xs text-gray-600">${item.price}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-red-600">{item.change_amount}</p>
                                    <p className="text-xs text-red-500">{item.change_percentage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}