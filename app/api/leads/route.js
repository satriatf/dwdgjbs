import fs from "fs/promises";
import path from "path";

// Temporary file-based storage for leads while DB is not ready.
// This will append incoming leads to `data/leads.json` and return a 201.
// Once DB is ready we can revert this endpoint to write into Postgres.

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
      });
    }

    const dataDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDir, "leads.json");

    // Ensure folder exists
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (e) {
      // ignore
    }

    // Read existing leads (if any)
    let list = [];
    try {
      const txt = await fs.readFile(leadsFile, "utf8");
      list = JSON.parse(txt || "[]");
      if (!Array.isArray(list)) list = [];
    } catch (err) {
      // file might not exist or be invalid — start fresh
      list = [];
    }

    const created_at = new Date().toISOString();
    // create a simple id (timestamp-based)
    const id = Date.now();

    // Accept separate fields if provided (subject, phone, file)
    const subject = body.subject || null;
    const phone = body.phone || null;
    const file = body.file || null;
    const messageText = body.message || null;

    const entry = {
      id,
      name,
      email,
      subject,
      phone,
      file: body.file || null,
      message: messageText,
      created_at,
    };

    list.push(entry);

    // write back
    await fs.writeFile(leadsFile, JSON.stringify(list, null, 2), "utf8");

    return new Response(JSON.stringify({ ok: true, id, created_at }), {
      status: 201,
    });
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
// (DB-backed implementation removed) The route currently uses file-based storage.
