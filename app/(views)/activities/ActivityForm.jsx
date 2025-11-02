"use client";
import { useState } from "react";

export default function ActivityForm() {
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = {
      title: fd.get("title"),
      date: fd.get("date"),
      description: fd.get("description"),
    };
    setStatus("loading");
    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 201) {
        setStatus("ok");
        e.target.reset();
      } else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div>
      <h3>Create activity</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <label>
          Title
          <input name="title" required />
        </label>
        <label>
          Date
          <input name="date" type="date" required />
        </label>
        <label>
          Description
          <textarea name="description" rows={4} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {status === "ok" && <div role="status">Activity created.</div>}
      {status === "error" && <div role="alert">Failed to create activity.</div>}
    </div>
  );
}
