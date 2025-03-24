// app/common/components/CuratedNews.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type NewsItem = {
    title: string;
    url: string;
    time_published: string;
    authors: string[] | string | null;
    summary: string;
    banner_image: string | null;
    source: string;
    overall_sentiment_label: string;
};

export default function CuratedNews() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchNews = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('/api/news', { tickers: ['AAPL'] });
            const feed = res.data?.feed;
            if (Array.isArray(feed)) {
                setNews(feed);
            } else {
                setError('News feed format unexpected.');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to fetch news.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
        const interval = setInterval(fetchNews, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="text-center py-6">
                <p className="text-gray-600 text-base animate-pulse">Loading news...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-6 text-red-600">{error}</div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Market News & Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {news.slice(0, 4).map((item, idx) => (
                    <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-2xl shadow-md border hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <img
                            src={item.banner_image || '/placeholder-image.jpg'}
                            alt={item.title}
                            className="w-full h-40 object-cover"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/placeholder-image.jpg';
                            }}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.summary}</p>
                            <div className="mt-4 flex justify-between text-xs text-gray-400">
                                <span>{item.source}</span>
                                <span className={`px-2 py-0.5 rounded-full text-white ${
                                    item.overall_sentiment_label.includes('Bullish') ? 'bg-green-500' :
                                        item.overall_sentiment_label.includes('Bearish') ? 'bg-red-500' :
                                            'bg-yellow-500'
                                }`}>
                                    {item.overall_sentiment_label}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
