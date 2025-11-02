import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Our purpose</h1>
        <p className={styles.description}>
          We are purpose-driven company aiming to support leaders and future
          leaders to find the right balance between performance and impact to
          create an economy that works for all and the planet.
        </p>
      </div>
    </section>
  );
}
