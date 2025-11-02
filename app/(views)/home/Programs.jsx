import { PROGRAMS } from "../../../lib/constants";
import Card from "../../(core)/components/ui/Card";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import styles from "./Programs.module.css";

export default function Programs() {
  return (
    <div className={styles.wrap}>
      <SectionTitle
        title="Our Main Programs"
        highlight="Programs"
        subtitle="We offer a variety of programs to help you excel professionally, drive change, and embrace #DoWellDoGood through real projects and hands-on learning."
      />
      <div className={styles.grid}>
        {PROGRAMS.map((p) => (
          <Card key={p.key} className={styles.card}>
            <h4 className={styles.cardTitle}>{p.title}</h4>
            <p className={styles.desc}>{p.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
