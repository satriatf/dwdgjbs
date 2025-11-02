import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Our <span className={styles.accent}>Expertise</span>
        </h1>
        <p className={styles.description}>
          We bring deep industry knowledge and strategic insights across key
          sectors driving sustainable transformation. Our expertise spans from
          energy transition to circular economy, helping organizations navigate
          complex challenges while delivering measurable impact.
        </p>
      </div>
    </section>
  );
}
