import Image from "next/image";
import styles from "./Founder.module.css";

export default function Founder() {
  return (
    <div className={styles.wrap}>
      <div className={styles.photo}>
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
          alt="Sébastien Frendo, Founder"
          width={500}
          height={650}
          className={styles.image}
        />
      </div>
      <div className={styles.copy}>
        <h2 className={styles.title}>Purpose as seen by our Founder</h2>
        <blockquote className={styles.quote}>
          <p>
            I created Do Well Do Good because I believe that business can and
            must be a force for good. But to create lasting impact, we must
            first achieve excellence. There is no compromise on quality, on
            standards, on ambition.
          </p>
          <p>
            Every day, we make choices. We choose the projects we work on, the
            partners we collaborate with, the people we hire. These choices
            define who we are and what we stand for. They reflect our purpose.
          </p>
          <p>
            In the long term, purpose always prevails. Customers stay when you
            deliver exceptional value. Communities support you when you create
            positive change. Talented people are drawn to organizations that
            have a clear mission and the capability to execute it.
          </p>
        </blockquote>
        <div className={styles.attribution}>
          <strong>Sébastien Frendo</strong>
          <span>Founder of Do Well Do Good</span>
        </div>
      </div>
    </div>
  );
}
