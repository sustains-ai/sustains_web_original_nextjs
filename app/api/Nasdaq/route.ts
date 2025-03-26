// app/api/Nasdaq/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const { dataset, params } = await req.json();

        if (!dataset || !params?.date || !params?.energy) {
            return NextResponse.json({ error: 'dataset, date, and energy are required.' }, { status: 400 });
        }

        const apiKey = process.env.NASDAQ_API_KEY;
        const { date, energy } = params;

        const url = `https://data.nasdaq.com/api/v3/datatables/${dataset}?date=${date}&energy=${energy}&api_key=${apiKey}`;

        const response = await axios.get(url);

        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('Nasdaq Energy API Error:', error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
