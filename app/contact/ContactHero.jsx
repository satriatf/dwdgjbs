import contactStyles from "./contact.module.css";
import styles from "./ContactHero.module.css";
export default function ContactHero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>Contact us</h1>
                    <p className={styles.description}>
                        We love working with ambitious people. Let&apos;s build something
                        great together.
                    </p>
                </div>
            </div>
        </section>
    );
}
