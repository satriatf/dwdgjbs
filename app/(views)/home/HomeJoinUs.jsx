import styles from "./HomeJoinUs.module.css";
import Link from "next/link";
import { JOIN_US_LINK } from "@/lib/constants";

export default function HomeJoinUs() {
  return (
    <section className={styles.banner}>
      <div className={`${styles.inner} container`}>
        <h2 className={styles.title}>Join us — shape the future</h2>
        <p className={styles.subtitle}>
          Inspiring students and professionals to lead with impact. Explore our
          programs and open positions.
        </p>
        <Link href={JOIN_US_LINK} className={styles.button}>
          Join Us
        </Link>
      </div>
    </section>
  );
}
