"use client";
import { useEffect, useState } from "react";

export default function ActivityList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/activities");
      if (res.ok) {
        const data = await res.json();
        setItems(data.items || []);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      await fetchList();
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h3>Recent activities</h3>
      <button onClick={fetchList}>Refresh</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <strong>{it.title}</strong> — {it.date}{" "}
              <div style={{ color: "#666" }}>{it.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
