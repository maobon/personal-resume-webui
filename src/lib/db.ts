import {Pool, type QueryResultRow} from "pg";

declare global {
    var postgresPool: Pool | undefined;
}

function createPool() {
    const connectionString = process.env.DATABASE_URL;

    console.log("[database] connectionString:", connectionString);

    if (!connectionString) {
        throw new Error("DATABASE_URL is not configured");
    }

    return new Pool({
        connectionString,
        ssl: process.env.DATABASE_SSL === "true"
            ? {
                rejectUnauthorized:
                    process.env.DATABASE_SSL_REJECT_UNAUTHORIZED !== "false",
            }
            : undefined,
    });
}

export function getDatabase() {
    if (!globalThis.postgresPool) {
        globalThis.postgresPool = createPool();
    }

    return globalThis.postgresPool;
}

export async function query<Row extends QueryResultRow>(
    text: string,
    values: readonly unknown[] = [],
) {
    return getDatabase().query<Row>(text, [...values]);
}
