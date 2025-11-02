"use client";
import { useState } from "react";
import { INSIGHTS_SEED } from "../../../lib/constants";
import Chip from "../../(core)/components/ui/Chip";
import Image from "next/image";
import Hero from "./Hero";
import styles from "./insights.module.css";

const TAGS = [
  "All insights",
  "Circular economy",
  "Decarbonization",
  "Energy",
  "Mobility",
];

export default function InsightsPage() {
  const [tag, setTag] = useState("All insights");
  const [page, setPage] = useState(1);
  const per = 6;

  const filtered = INSIGHTS_SEED.filter((i) =>
    tag === "All insights" ? true : i.tag === tag
  );
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / per));
  const items = filtered.slice((page - 1) * per, page * per);

  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <div className={styles.chips}>
            {TAGS.map((t) => (
              <Chip
                key={t}
                active={t === tag}
                onClick={() => {
                  setTag(t);
                  setPage(1);
                }}
              >
                {t}
              </Chip>
            ))}
          </div>

          <div className={styles.grid}>
            {items.map((it) => (
              <article key={it.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={it.image}
                    alt={it.title}
                    width={480}
                    height={260}
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.title}>{it.title}</h3>
                <p className={styles.excerpt}>{it.excerpt}</p>
              </article>
            ))}
          </div>

          <div className={styles.pagination}>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={i + 1 === page ? styles.active : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(p + 1, pages))}
              disabled={page >= pages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
