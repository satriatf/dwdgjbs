import styles from "./Stats.module.css";
import { STATS } from "@/lib/constants";
import SmartImage from "@/app/(core)/components/ui/SmartImage";

export default function Stats() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {STATS.map((s, idx) => (
          <div key={idx} className={styles.stat}>
            <div className={styles.icon}>
              {typeof s.icon === "string" && (s.icon.startsWith("/") || s.icon.startsWith("http")) ? (
                <SmartImage src={s.icon} alt={s.label} width={48} height={48} />
              ) : (
                s.icon
              )}
            </div>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
