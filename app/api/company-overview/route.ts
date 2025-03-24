import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const symbol = searchParams.get('symbol');

        if (!symbol) {
            return NextResponse.json({ error: 'Symbol query parameter is required.' }, { status: 400 });
        }

        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' },
        });

        const data = response.data;

        if (data.Note || data['Error Message']) {
            return NextResponse.json({ error: 'Error from Alpha Vantage', detail: data }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error fetching company overview:', error.message);
        return NextResponse.json({ error: 'Internal Server Error', trace: error.message }, { status: 500 });
    }
}
