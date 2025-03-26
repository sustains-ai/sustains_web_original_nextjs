// components/NasdaqOilData.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

type OilDataItem = {
    country: string;
    value: number;
};

export default function NasdaqOilData() {
    const [oilData, setOilData] = useState<OilDataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchOilData = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post(
                '/api/Nasdaq',
                {
                    dataset: 'QDL/JODI',
                    params: {
                        date: '2024-12-31',
                        energy: 'OIL',
                    },
                },
                { timeout: 10000 }
            );
            console.log('Nasdaq Oil Data Response:', JSON.stringify(res.data, null, 2));

            const rawData = res.data?.datatable?.data;
            if (!Array.isArray(rawData)) {
                throw new Error('Invalid data format: datatable.data is not an array');
            }

            const filtered = rawData
                .map((d: any) => ({
                    country: d[2],
                    value: parseFloat(d[4]),
                }))
                .filter((d) => d.country && !isNaN(d.value) && d.value !== 0)
                .sort((a, b) => b.value - a.value)
                .slice(0, 20);

            setOilData(filtered);
        } catch (err: any) {
            console.error('Error fetching oil data:', err.message, err.response?.data || err.response?.status || '');
            setError(err.response?.data?.error || err.message || 'Failed to fetch oil data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOilData();
    }, []);

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="mt-2 text-gray-600 text-lg">Loading oil data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg text-center">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-md">
                Oil Data Dashboard (Top 6 Countries)
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0ABF53]">
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: oilData.map((d) => d.value),
                            y: oilData.map((d) => d.country),
                            orientation: 'h',
                            marker: {
                                color: oilData.map((_, i) => `rgba(10, 191, 83, ${1 - i * 0.03})`), // Gradient
                                line: { color: '#0ABF53', width: 1 }, // Green outline
                            },
                            hoverinfo: 'x+y', // Show value and country on hover
                            hovertemplate: '%{y}: %{x:.2f} units<extra></extra>',
                        },
                    ]}
                    layout={{
                        height: 600,
                        margin: { l: 200, r: 50, t: 50, b: 50 }, // Wide left margin for country names
                        xaxis: {
                            title: { text: 'Oil Volume (Units)', font: { size: 14, color: '#333' } },
                            gridcolor: '#e5e7eb', // Light gray gridlines
                            zeroline: false,
                        },
                        yaxis: {
                            autorange: 'reversed',
                            tickfont: { size: 12, color: '#333' }, // Readable font
                            title: { text: 'Country', font: { size: 14, color: '#333' } },
                        },
                        plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot
                        paper_bgcolor: 'rgba(0,0,0,0)', // Transparent paper
                        bargap: 0.2, // Space between bars
                    }}
                    config={{
                        responsive: true,
                        displayModeBar: false, // Hide toolbar for simplicity
                    }}
                />
            </div>
        </div>
    );
}