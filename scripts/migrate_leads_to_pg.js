/**
 * Simple migration script to import `data/leads.json` into Postgres `leads` table.
 * Usage: set `DATABASE_URL` env and run `node scripts/migrate_leads_to_pg.js`
 */
import fs from "fs/promises";
import path from "path";
import { query } from "@/lib/db";

async function main() {
  const file = path.join(process.cwd(), "data", "leads.json");
  const txt = await fs.readFile(file, "utf8");
  const list = JSON.parse(txt || "[]");
  if (!Array.isArray(list) || list.length === 0) {
    console.log("No leads to migrate.");
    return;
  }

  for (const l of list) {
    try {
      const sql = `INSERT INTO leads (name, email, subject, phone, file, message, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
      const createdAt = l.created_at
        ? new Date(l.created_at).toISOString()
        : new Date().toISOString();
      await query(sql, [
        l.name,
        l.email,
        l.subject || null,
        l.phone || null,
        l.file || null,
        l.message || null,
        createdAt,
      ]);
      console.log(`Imported lead: ${l.email} (${l.name})`);
    } catch (err) {
      console.error("Failed to import lead", l, err.message || err);
    }
  }

  console.log("Migration completed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
