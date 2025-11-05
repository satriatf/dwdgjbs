import SmartImage from "@/app/(core)/components/ui/SmartImage";
import styles from "./Intro.module.css";
import { STRATEGY_INTRO_IMAGE } from "@/lib/constants";

export default function Intro() {
  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Strategy Consulting{" "}
            <span className={styles.subtitle}>Our expertise</span>
          </h1>
          <p className={styles.description}>
            We provide strategic consulting on energy, mobility, and
            circularity. With expertise spanning from strategy to operations, we
            help organizations navigate complex transitions while delivering
            measurable impact. Our team combines deep industry knowledge with a
            global perspective, working across Europe, Africa, and Asia.
          </p>
        </div>
        <div className={styles.visual}>
          <SmartImage
            src={STRATEGY_INTRO_IMAGE}
            alt="Strategy Consulting Team"
            width={520}
            height={320}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
