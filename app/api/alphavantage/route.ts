// app/api/alphavantage/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('Alpha Vantage Request Body:', JSON.stringify(body, null, 2)); // Debug log

        const { functionName, ...params } = body;

        if (!functionName) {
            return NextResponse.json({ error: 'functionName is required' }, { status: 400 });
        }

        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        if (!apiKey) {
            console.error('API Key missing in environment variables');
            return NextResponse.json({ error: 'Server configuration error: API key missing' }, { status: 500 });
        }

        let url = `https://www.alphavantage.co/query?function=${encodeURIComponent(functionName)}&apikey=${apiKey}`;

        // Append other query parameters dynamically
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                url += `&${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`;
            }
        }

        console.log('Constructed URL:', url); // Debug log
        const response = await axios.get(url);
        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('Alpha Vantage API Error:', error.message, error.response?.data || '');
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}