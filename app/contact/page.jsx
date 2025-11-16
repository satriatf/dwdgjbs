import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <main className={styles.page}>
        <div className="container">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
