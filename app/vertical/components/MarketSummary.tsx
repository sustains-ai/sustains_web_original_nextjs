// components/MarketSummary.tsx
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function MarketSummary() {
    const [summary, setSummary] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.post('/api/market', {
                function: 'MARKET_OVERVIEW'
            });
            setSummary(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Market Summary</h2>
            <pre className="bg-gray-50 p-4 rounded shadow text-sm">{JSON.stringify(summary, null, 2)}</pre>
        </div>
    );
}
