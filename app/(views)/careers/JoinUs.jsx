import Image from "next/image";
import Button from "../../(core)/components/ui/Button";
import styles from "./JoinUs.module.css";

export default function JoinUs() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>Join us</h1>
          <p className={styles.description}>
            We are looking for talented individuals who want to do well and do
            good at the same time – from Monday to Friday.
          </p>
          <Button
            as="a"
            href="/careers/open-application"
            className={styles.button}
          >
            APPLY
          </Button>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
              alt="Team member"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
