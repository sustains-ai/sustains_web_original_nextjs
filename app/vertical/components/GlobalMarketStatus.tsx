'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Market = {
    market_type: string;
    region: string;
    current_status: string;
};

export default function MarketStatus() {
    const [markets, setMarkets] = useState<Market[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchMarketStatus = async () => {
        try {
            const res = await axios.post('/api/alphavantage', {
                functionName: 'MARKET_STATUS',
            });
            const feed = res.data?.markets;
            if (Array.isArray(feed)) {
                setMarkets(feed);
            } else {
                setError('Invalid market data format.');
            }
        } catch (err: any) {
            setError('Failed to fetch market status.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketStatus();
        const interval = setInterval(fetchMarketStatus, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading || error) return null;

    return (
        <div className="w-full bg-white py-2 overflow-hidden whitespace-nowrap border-y border-gray-200">
            <div className="inline-block animate-marquee hover:pause-marquee px-4">
                {markets.map((market, idx) => (
                    <span
                        key={idx}
                        className={`inline-flex items-center px-3 py-1 mx-1 rounded-full text-white text-xs font-medium ${
                            market.current_status.toLowerCase() === 'open' ? 'bg-green-600' : 'bg-red-600'
                        }`}
                    >
                        {market.region} ({market.market_type}) - {market.current_status.toUpperCase()}
                    </span>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .hover\\:pause-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
