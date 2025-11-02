import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title, subtitle, highlight }) {
  // Split title to highlight part if needed
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        {highlight && titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <span className={styles.highlight}>{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
