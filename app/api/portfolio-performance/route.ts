import { NextResponse } from "next/server";
import axios from "axios";

// Use `POST` function for Next.js App Router API
export async function POST(req: Request) {
    try {
        // Extract JSON body
        const { portfolio } = await req.json();

        if (!portfolio || !Array.isArray(portfolio) || portfolio.length === 0) {
            return NextResponse.json({ error: "Portfolio is empty or invalid" }, { status: 400 });
        }

        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

        // Fetch stock data for each symbol in the portfolio
        const stockData = await Promise.all(
            portfolio.map(async (symbol) => {
                const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
                try {
                    const response = await axios.get(url, {
                        headers: { "User-Agent": "axios" },
                    });
                    return { symbol, data: response.data };
                } catch (error) {
                    console.error(`Error fetching data for ${symbol}:`, error);
                    return { symbol, error: "Failed to fetch data" };
                }
            })
        );

        return NextResponse.json({ portfolio: stockData });
    } catch (error) {
        console.error("Error processing portfolio analysis:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
