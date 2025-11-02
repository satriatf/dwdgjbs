import { EXPERTISE } from "../../../lib/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./ExpertiseGrid.module.css";

export default function ExpertiseGrid() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {EXPERTISE.map((e, idx) => (
          <Link
            key={e.key}
            href={`/expertise/${e.key}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={e.img}
                alt={e.title}
                width={600}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              <div className={styles.number}>0{idx + 1}</div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{e.title}</h3>
              <p className={styles.description}>{e.blurb}</p>
              <span className={styles.link}>
                Learn more <span className={styles.arrow}>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
