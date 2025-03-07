import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { data, error } = await supabase.from("Arjun").select("*").limit(10);

        if (error) throw error;

        if (!data || data.length === 0) {
            return NextResponse.json({ success: false, message: "No records found in the new table" });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
