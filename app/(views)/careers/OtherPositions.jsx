import { CAREERS_CONTACT } from "../../../lib/constants";
import Image from "next/image";
import styles from "./OtherPositions.module.css";

export default function OtherPositions() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            OTHER <span className={styles.accent}>POSITIONS</span>
          </h2>
          <p className={styles.description}>
            We are actively looking for{" "}
            <strong>associates, consultants, project leaders</strong> and{" "}
            <strong>associate partners in Paris</strong>.
          </p>
          <p className={styles.instructions}>
            You can apply to any open position on our{" "}
            <a
              href={CAREERS_CONTACT.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              Linkedin page
            </a>{" "}
            or, if you don&apos;t find a position that fits you,{" "}
            <a href={`mailto:${CAREERS_CONTACT.email}`}>
              send us an email to {CAREERS_CONTACT.email}
            </a>{" "}
            with an open application.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=800&fit=crop"
              alt="Office team collaboration"
              width={500}
              height={650}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
