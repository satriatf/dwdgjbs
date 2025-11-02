import styles from "./Stats.module.css";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {STATS.map((s, idx) => (
          <div key={idx} className={styles.stat}>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
