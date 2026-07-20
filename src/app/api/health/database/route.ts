import {NextResponse} from "next/server";

import {query} from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const result = await query<{now: Date}>("SELECT NOW() AS now");

        return NextResponse.json({
            status: "ok",
            databaseTime: result.rows[0].now,
        });
    } catch (error) {
        console.error("PostgreSQL health check failed", error);

        return NextResponse.json(
            {status: "error", message: "Database connection failed"},
            {status: 503},
        );
    }
}
