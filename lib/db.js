import pkg from "pg";
const { Pool } = pkg;

let pool;

function getPool() {
  if (process.env.NODE_ENV === "development") {
    if (!globalThis.__pgPool) {
      globalThis.__pgPool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });
    }
    return globalThis.__pgPool;
  }

  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return pool;
}

export async function query(text, params) {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not configured");
  const p = getPool();
  return p.query(text, params);
}
