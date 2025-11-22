import { query } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
      });
    }

    const subject = body.subject || null;
    const phone = body.phone || null;
    const file = body.file || null;

    // Use PostgreSQL parameter placeholders ($1, $2, ...)
    const sql = `INSERT INTO leads (name, email, subject, phone, file, message, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING id, created_at`;

    const res = await query(sql, [name, email, subject, phone, file, message]);

    // `lib/db.query` returns result from `pg` which has rows
    const inserted = res && res.rows && res.rows[0] ? res.rows[0] : null;

    return new Response(
      JSON.stringify({
        ok: true,
        id: inserted?.id || null,
        created_at: inserted?.created_at || new Date().toISOString(),
      }),
      { status: 201 }
    );
  } catch (err) {
    const message =
      process.env.NODE_ENV === "development"
        ? err.message || String(err)
        : "Server error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
    });
  }
}
