import { NextResponse } from "next/server";

// Load API key from environment variables
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

// Handle GET requests
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json({ error: "Query parameter is required." }, { status: 400 });
    }

    try {
        const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data.", details: error }, { status: 500 });
    }
}
