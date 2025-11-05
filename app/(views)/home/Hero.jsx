import SmartImage from "@/app/(core)/components/ui/SmartImage";
import styles from "./Hero.module.css";
import { HERO_IMAGE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1>
              <span className={styles.accent}>Do Well Do Good</span>
              <span className={styles.subtitle}>Jakarta Business School</span>
            </h1>
            <p>
              Inspiring students to lead with impact: excel professionally,
              drive change, and embrace #DoWellDoGood through real projects and
              hands-on learning.
            </p>
          </div>
          <div className={styles.visual}>
            <div className={styles.decorative}>
              <SmartImage src={HERO_IMAGE} alt="Students learning" width={640} height={480} className={styles.image} priority />
              <div className={styles.overlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
