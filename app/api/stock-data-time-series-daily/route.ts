import { NextResponse } from "next/server";
import axios from "axios";

// Use `GET` function for Next.js App Router API
export async function GET(req: Request) {
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const symbol = searchParams.get("symbol");

    if (!symbol) {
        return NextResponse.json({ error: "Stock symbol is required" }, { status: 400 });
    }

    try {
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY; // Secure API Key
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

        const response = await axios.get(url, {
            headers: { "User-Agent": "axios" },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
