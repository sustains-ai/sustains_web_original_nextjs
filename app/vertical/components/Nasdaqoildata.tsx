'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

export default function NasdaqOilData() {
    const [oilData, setOilData] = useState<{ country: string; value: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchOilData = async () => {
        try {
            const res = await axios.post('/api/Nasdaq', {
                dataset: 'QDL/JODI',
                params: {
                    date: '2024-12-31',
                    energy: 'OIL',
                },
            });

            const rawData = res.data?.datatable?.data || [];

            const filtered = rawData
                .map((d: any) => ({
                    country: d[2],
                    value: parseFloat(d[4]),
                }))
                .filter((d) => !isNaN(d.value) && d.value !== 0)
                .sort((a, b) => b.value - a.value)
                .slice(0, 20); // Top 20

            setOilData(filtered);
        } catch (err: any) {
            console.error('Error:', err);
            setError('Failed to fetch oil data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOilData();
    }, []);

    if (loading) return <p className="text-center py-8 text-gray-500">Loading oil data...</p>;
    if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Oil Data Dashboard</h2>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: oilData.map((d) => d.value),
                        y: oilData.map((d) => d.country),
                        orientation: 'h',
                        marker: {
                            color: 'rgba(10,191,83,0.7)',
                        },
                    },
                ]}
                layout={{
                    height: 600,
                    margin: { l: 100, r: 30, t: 30, b: 50 },
                    xaxis: { title: 'Oil Volume' },
                    yaxis: { autorange: 'reversed' },
                }}
                config={{ responsive: true }}
            />
        </div>
    );
}
