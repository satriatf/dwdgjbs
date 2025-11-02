import { WHY_JOIN } from "../../../lib/constants";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import styles from "./WhyJoin.module.css";

export default function WhyJoin() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle
        title="WHY JOIN US?"
        highlight="JOIN US?"
        subtitle="We are a purpose-led company with a strong set of values that guides our day to day life. Work is not work anymore, it becomes a purpose."
      />
      <div className={styles.grid}>
        {WHY_JOIN.map((w, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.number}>{idx + 1}</div>
            <h4 className={styles.cardTitle}>{w.title}</h4>
            <p className={styles.cardDesc}>{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
