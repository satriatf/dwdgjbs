import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>All insights</h1>
          <p className={styles.description}>
            Sharing our expertise and insights to spark reflection and encourage
            debate on today&apos;s key issues.
          </p>
        </div>
      </div>
    </section>
  );
}
