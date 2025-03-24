import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tickers, time_from, time_to, topics, sort, limit } = body;

        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        let url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${apiKey}`;

        if (tickers && Array.isArray(tickers) && tickers.length > 0) {
            const joinedTickers = tickers.join(',');
            url += `&tickers=${joinedTickers}`;
        }

        if (time_from) url += `&time_from=${time_from}`;
        if (time_to) url += `&time_to=${time_to}`;
        if (topics) url += `&topics=${topics}`;
        if (sort) url += `&sort=${sort}`;
        if (limit) url += `&limit=${limit}`;

        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' },
        });

        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('News API Error:', error.message);
        return NextResponse.json({ error: 'Internal Server Error', trace: error.message }, { status: 500 });
    }
}
