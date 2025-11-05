import { INSIGHTS_SEED } from "../../../lib/constants";
import styles from "./InsightsFeed.module.css";
import SmartImage from "@/app/(core)/components/ui/SmartImage";

export default function InsightsFeed() {
  const items = INSIGHTS_SEED.slice(0, 6);
  return (
    <div>
      <h3>Insights</h3>
      <div className={styles.grid}>
        {items.map((it) => (
          <article key={it.id} className={styles.card}>
            <SmartImage src={it.image} alt={it.title} width={360} height={200} />
            <h4>{it.title}</h4>
            <p className={styles.excerpt}>{it.excerpt}</p>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <a href="/insights">View more insights</a>
      </div>
    </div>
  );
}
