// app/api/5symbolanalytics/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const { symbols, start, end } = await req.json();

        if (!symbols || !Array.isArray(symbols) || symbols.length === 0) {
            return NextResponse.json({ error: 'Symbols must be a non-empty array' }, { status: 400 });
        }

        if (symbols.length > 5) {
            return NextResponse.json({ error: 'You can request up to 5 symbols only.' }, { status: 400 });
        }

        if (!start || !end) {
            return NextResponse.json({ error: 'Start and end dates are required.' }, { status: 400 });
        }

        const joinedSymbols = symbols.join(',');
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

        const url = `https://www.alphavantage.co/query?function=ANALYTICS_FIXED_WINDOW&SYMBOLS=${joinedSymbols}&RANGE=${start}&RANGE=${end}&INTERVAL=DAILY&OHLC=close&CALCULATIONS=MEAN,STDDEV,CORRELATION&apikey=${apiKey}`;

        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' },
        });

        const data = response.data;

        // Handle API-level errors
        if (data['error']) {
            return NextResponse.json({ error: data['error'] }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error calling Alpha Vantage:', error.message);
        return NextResponse.json({ error: 'Internal Server Error', trace: error.message }, { status: 500 });
    }
}
