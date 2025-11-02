import { EXPERTISE } from "../../../lib/constants";
import styles from "./Expertise.module.css";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function Expertise() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="OUR EXPERTISE" highlight="EXPERTISE" />
      <div className={styles.stack}>
        {EXPERTISE.map((e, idx) => (
          <Link
            key={e.key}
            href={`/expertise/${e.key}`}
            className={styles.block}
          >
            <div className={styles.preview}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={e.img}
                  alt={e.title}
                  width={300}
                  height={220}
                  className={styles.previewImage}
                />
              </div>
              <div className={styles.copy}>
                <h4 className={styles.title}>{e.title}</h4>
                <p className={styles.description}>{e.blurb}</p>
                <span className={styles.discover}>
                  DISCOVER <span className={styles.arrow}>→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.viewAll}>
        <Link href="/expertise" className={styles.viewAllLink}>
          View All Expertise Areas
        </Link>
      </div>
    </div>
  );
}
