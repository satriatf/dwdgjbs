import Image from "next/image";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        FOUNDING PARTNERS <span className={styles.accent}>PROGRAM</span>
      </h2>
      <p className={styles.description}>
        We have launched recruitments for our{" "}
        <strong>Founding Partners Program</strong> abroad.
      </p>
      <p className={styles.link}>
        <a href="/careers/open-application">
          You can learn more and apply on our dedicated webpage.
        </a>
      </p>
      <div className={styles.imageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=400&fit=crop"
          alt="Founding Partners Program"
          width={800}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}
