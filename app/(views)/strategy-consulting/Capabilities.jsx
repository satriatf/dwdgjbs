import { CAPABILITIES } from "../../../lib/constants";
import Card from "../../(core)/components/ui/Card";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import styles from "./Capabilities.module.css";

export default function Capabilities() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="OUR CAPABILITIES" highlight="CAPABILITIES" />
      <div className={styles.grid}>
        {CAPABILITIES.map((c, idx) => (
          <Card key={idx} className={styles.card}>
            <h4 className={styles.title}>{c.title}</h4>
            <ul className={styles.list}>
              {c.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
