import pkg from "pg";
const { Pool } = pkg;

let pool;

function getPool() {
  if (process.env.NODE_ENV === "development") {
    if (!globalThis.__pgPool) {
      // validate DATABASE_URL early to give clearer error messages on production
      if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL not configured");
      }
      // If DATABASE_URL points to localhost, warn because cloud hosts cannot reach local DB
      if (/localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL)) {
        console.warn(
          "DATABASE_URL points to localhost — this will not be reachable from cloud deployments (Vercel). Use a hosted Postgres and set DATABASE_URL accordingly."
        );
      }

      globalThis.__pgPool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });
    }
    return globalThis.__pgPool;
  }

  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL not configured");
    }
    if (/localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL)) {
      console.warn(
        "DATABASE_URL points to localhost — this will not be reachable from cloud deployments (Vercel). Use a hosted Postgres and set DATABASE_URL accordingly."
      );
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

export async function query(text, params) {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not configured");
  const p = getPool();
  return p.query(text, params);
}
