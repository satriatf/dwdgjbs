import { query } from "@/lib/db";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return new Response(JSON.stringify({ error: "Database not configured" }), {
      status: 503,
    });
  }
  try {
    await query(`CREATE TABLE IF NOT EXISTS activities (
      id SERIAL PRIMARY KEY,
      title TEXT,
      date DATE,
      description TEXT,
      created_at TIMESTAMP DEFAULT now()
    )`);

    const res = await query(
      `SELECT id,title,date,description,created_at FROM activities ORDER BY created_at DESC LIMIT 100`
    );
    return new Response(JSON.stringify({ items: res.rows }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  if (!process.env.DATABASE_URL) {
    return new Response(JSON.stringify({ error: "Database not configured" }), {
      status: 503,
    });
  }
  try {
    const body = await req.json();
    const { title, date, description } = body || {};
    if (!title || !date || !description)
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
      });

    await query(`CREATE TABLE IF NOT EXISTS activities (
      id SERIAL PRIMARY KEY,
      title TEXT,
      date DATE,
      description TEXT,
      created_at TIMESTAMP DEFAULT now()
    )`);

    const res = await query(
      `INSERT INTO activities (title,date,description) VALUES ($1,$2,$3) RETURNING id, created_at`,
      [title, date, description]
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
