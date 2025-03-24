// components/MarketStatus.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Market = {
    market_type: string;
    region: string;
    primary_exchanges: string;
    local_open: string;
    local_close: string;
    current_status: string;
    notes: string;
};

export default function MarketStatus() {
    const [markets, setMarkets] = useState<Market[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchMarketStatus = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('/api/alphavantage', {
                functionName: 'MARKET_STATUS',
            });
            console.log('Raw Market Status Response:', JSON.stringify(res.data, null, 2)); // Detailed log

            const feed = res.data?.markets;
            if (Array.isArray(feed)) {
                setMarkets(feed);
            } else {
                console.log('Markets data not found or invalid:', res.data);
                setError(`Market status data is not in the expected format. Received: ${JSON.stringify(res.data, null, 2)}`);
            }
        } catch (err: any) {
            console.error('Error fetching market status:', err);
            setError(err.response?.data?.error || err.message || 'Failed to fetch market status.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketStatus();
        const interval = setInterval(fetchMarketStatus, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const getMarketImage = (region: string) => {
        const formattedRegion = region.replace(/\s+/g, '');
        return `/images/markets/${formattedRegion}.jpg`;
    };

    if (loading) {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="mt-2 text-gray-600 text-lg">Loading market status...</p>
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
                Global Market Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {markets.map((market, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 border-t-4 border-[#0ABF53]"
                    >
                        <img
                            src={getMarketImage(market.region)}
                            alt={`${market.region} Market`}
                            className="w-full h-48 object-cover"
                            onError={(e) => (e.currentTarget.src = '/images/markets/placeholder-image.jpg')}
                        />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {market.region} ({market.market_type})
                                </h3>
                                <span
                                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                                        market.current_status === 'open' ? 'bg-green-600' : 'bg-red-600'
                                    }`}
                                >
                                    {market.current_status.charAt(0).toUpperCase() + market.current_status.slice(1)}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-medium">Exchanges:</span> {market.primary_exchanges}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-medium">Open:</span> {market.local_open} |{' '}
                                <span className="font-medium">Close:</span> {market.local_close}
                            </p>
                            {market.notes && (
                                <p className="text-xs text-gray-500 italic">{market.notes}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}