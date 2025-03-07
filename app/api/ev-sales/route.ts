import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, { ssl: { rejectUnauthorized: false } });

export async function GET() {
    try {
        console.log("Fetching EV Sales Data...");
        const data = await sql`
            SELECT * FROM "EVsales" ORDER BY year DESC;
        `;
        console.log("Fetched Data:", data);
        return NextResponse.json(data);
    } catch (error) {
        console.error("Database Fetch Error:", error);
        return NextResponse.json({ error: "Failed to fetch EV Sales data" }, { status: 500 });
    }
}