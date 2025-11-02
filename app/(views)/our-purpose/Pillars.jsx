import styles from "./Pillars.module.css";
import { PILLARS } from "@/lib/constants";

export default function Pillars() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {PILLARS.map((p) => (
          <div key={p.num} className={styles.card}>
            <div className={styles.num}>{p.num}.</div>
            <h4 className={styles.title}>{p.title}</h4>
            <p className={styles.text}>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
