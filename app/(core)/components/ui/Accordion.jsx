"use client";
import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ items = [] }) {
  // default closed on page load
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className={styles.accordion}>
      {items.map((it, idx) => (
        <div key={idx} className={styles.item}>
          <button
            className={styles.q}
            aria-expanded={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          >
            <span>{it.q}</span>
            <span aria-hidden>{openIndex === idx ? "−" : "+"}</span>
          </button>
          <div
            className={`${styles.a} ${openIndex === idx ? styles.open : ""}`}
            role="region"
          >
            {it.a}
          </div>
        </div>
      ))}
    </div>
  );
}
