import SmartImage from "@/app/(core)/components/ui/SmartImage";
import styles from "./LogoGrid.module.css";

export default function LogoGrid({ logos = [] }) {
  return (
    <div className={styles.grid}>
      {logos.map((src, idx) => (
        <div key={idx} className={styles.item}>
          <SmartImage src={src} alt={`Client ${idx + 1}`} width={280} height={140} className={styles.logo} />
        </div>
      ))}
    </div>
  );
}
