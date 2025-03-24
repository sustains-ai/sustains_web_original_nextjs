// components/IndianNews.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type NewsItem = {
    title: string;
    description: string;
    link: string;
    source: string;
    pubDate: string;
    image?: string; // Optional image field—add if API supports later
};

export default function IndianNews() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const fetchNews = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('/api/IndianAPI', {
                endpoint: '/news',
            });
            console.log('Indian News Response:', JSON.stringify(res.data, null, 2));

            const data = res.data;
            if (Array.isArray(data)) {
                setNews(data);
            } else if (Array.isArray(data.result)) {
                setNews(data.result);
            } else {
                setError('News data is not in the expected format.');
                console.error('Invalid data format:', data);
            }
        } catch (err: any) {
            console.error('Error fetching Indian news:', err);
            setError(err.response?.data?.error || err.message || 'Failed to fetch news.');
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
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="mt-2 text-gray-600 text-lg">Loading Indian news...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg text-center">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-md">
                Latest Indian Market News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.slice(0, 6).map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 border-t-4 border-[#0ABF53]"
                    >
                        <img
                            src={item.image || `/images/news/placeholder-${(idx % 6) + 1}.jpg`}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                            onError={(e) => (e.currentTarget.src = '/images/news/placeholder-1.jpg')}
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{item.description}</p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span>{item.source}</span>
                                <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}