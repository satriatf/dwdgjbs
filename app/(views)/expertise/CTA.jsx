import styles from "./CTA.module.css";
import Link from "next/link";

export default function CTA() {
  return (
    <div className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <h3 className={styles.title}>Want to work with us?</h3>
          <p className={styles.copy}>
            We&apos;re always looking for partners and talent. Explore
            opportunities and get in touch.
          </p>
          <Link href="/careers" className={styles.button}>
            See open positions
          </Link>
        </div>
      </div>
    </div>
  );
}
