import styles from "./Chip.module.css";

export default function Chip({ children, active = false, onClick, ...props }) {
  return (
    <button
      className={`${styles.chip} ${active ? styles.active : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
