import { query } from "@/lib/db";

export async function POST(req) {
  if (!process.env.DATABASE_URL) {
    return new Response(JSON.stringify({ error: "Database not configured" }), {
      status: 503,
    });
  }

  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
      });
    }

    await query(`CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name TEXT,
      email TEXT,
      message TEXT,
      created_at TIMESTAMP DEFAULT now()
    )`);

    const res = await query(
      `INSERT INTO leads (name,email,message) VALUES ($1,$2,$3) RETURNING id, created_at`,
      [name, email, message]
    );

    return new Response(
      JSON.stringify({
        ok: true,
        id: res.rows[0].id,
        created_at: res.rows[0].created_at,
      }),
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
