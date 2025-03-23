'use client';

import { useState } from 'react';

export default function FiveSymbolAnalytics() {
    const [symbols, setSymbols] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<any>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const symbolList = symbols.split(',').map((s) => s.trim());
        if (symbolList.length > 5) {
            setError('Please enter up to 5 symbols only.');
            return;
        }

        if (!start || !end) {
            setError('Start and end dates are required.');
            return;
        }

        setError('');
        setResult(null);

        try {
            const res = await fetch('/api/5symbolanalytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    symbols: symbolList,
                    start,
                    end,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data?.error || 'Something went wrong.');
            } else {
                setResult(data);
            }
        } catch (err: any) {
            setError(err.message || 'Unexpected error occurred.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Stock Analytics Dashboard
                </h1>

                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transition-transform transform hover:scale-105">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Symbols (max 5)
                                </label>
                                <input
                                    type="text"
                                    value={symbols}
                                    onChange={(e) => setSymbols(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="e.g., AAPL, MSFT, GOOG"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={start}
                                    onChange={(e) => setStart(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={end}
                                    onChange={(e) => setEnd(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
                        >
                            Analyze
                        </button>
                    </form>

                    {error && (
                        <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
                            {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
                        </div>
                    )}
                </div>

                {/* Results Section */}
                {result && (
                    <div className="space-y-8">
                        {/* Meta Data */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Overview</h2>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Symbols:</span> {result.meta_data.symbols} |{' '}
                                <span className="font-medium">Dates:</span> {result.meta_data.min_dt} to {result.meta_data.max_dt}
                            </p>
                        </div>

                        {/* Mean Returns Table */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mean Daily Returns</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mean Return</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {Object.entries(result.payload.RETURNS_CALCULATIONS.MEAN).map(([symbol, mean]) => (
                                        <tr key={symbol} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{symbol}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {typeof mean === 'number' ? mean.toFixed(6) : 'N/A'}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Standard Deviation Table */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Standard Deviation</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Std Dev</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {Object.entries(result.payload.RETURNS_CALCULATIONS.STDDEV).map(([symbol, stddev]) => (
                                        <tr key={symbol} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{symbol}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {typeof stddev === 'number' ? stddev.toFixed(6) : 'N/A'}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Correlation Matrix Table */}
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Correlation Matrix</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                                        {result.payload.RETURNS_CALCULATIONS.CORRELATION.index.map((symbol: string) => (
                                            <th key={symbol} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{symbol}</th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {result.payload.RETURNS_CALCULATIONS.CORRELATION.index.map((symbol: string, rowIdx: number) => (
                                        <tr key={symbol} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{symbol}</td>
                                            {result.payload.RETURNS_CALCULATIONS.CORRELATION.correlation[rowIdx].map((corr: number, colIdx: number) => (
                                                <td key={colIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{corr.toFixed(4)}</td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}