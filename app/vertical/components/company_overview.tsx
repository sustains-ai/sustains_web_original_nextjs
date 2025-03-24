// components/CompanyOverview.tsx
'use client';

import { useState } from 'react';

export default function CompanyOverview() {
    const [symbol, setSymbol] = useState('');
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const fetchOverview = async () => {
        setError('');
        setData(null);
        setLoading(true);
        try {
            const res = await fetch(`/api/company-overview?symbol=${symbol}`);
            const json = await res.json();

            if (!res.ok) {
                setError(json?.error || 'Failed to fetch data.');
            } else {
                setData(json);
            }
        } catch (err: any) {
            setError(err.message || 'Unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const formatValue = (value: any) => {
        if (value === null || value === undefined) return 'N/A';
        if (typeof value === 'string' || typeof value === 'number') return value.toString();
        return JSON.stringify(value, null, 2);
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Company Overview</h2>
                    <div className="flex items-center space-x-4 mb-6">
                        <input
                            type="text"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                            placeholder="Enter symbol, e.g., IBM"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        />
                        <button
                            onClick={fetchOverview}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md whitespace-nowrap"
                        >
                            Fetch Data
                        </button>
                    </div>

                    {loading && (
                        <p className="text-blue-600 text-center animate-pulse">Loading...</p>
                    )}

                    {error && (
                        <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
                            {error}
                        </div>
                    )}

                    {data && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(data).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    <p className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</p>
                                    <p className="text-base font-medium text-gray-900 break-words">
                                        {formatValue(value)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}