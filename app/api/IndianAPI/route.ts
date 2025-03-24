import { NextResponse } from 'next/server';
import { request } from 'undici';

const BASE_URL = 'https://stock.indianapi.in';
const API_KEY = process.env.INDIAN_API_KEY;

export async function POST(req: Request) {
    try {
        const { endpoint } = await req.json();

        if (!endpoint || typeof endpoint !== 'string') {
            return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 });
        }

        const res = await request(`${BASE_URL}${endpoint}`, {
            headers: {
                'X-Api-Key': API_KEY || ''
            }
        });

        const body = await res.body.json();
        return NextResponse.json(body);
    } catch (error: any) {
        console.error('Indian API error:', error.message);
        return NextResponse.json({ error: 'Failed to fetch from Indian API', trace: error.message }, { status: 500 });
    }
}
