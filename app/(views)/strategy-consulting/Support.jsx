import LogoGrid from "../../(core)/components/ui/LogoGrid";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import styles from "./Support.module.css";
import { SUPPORT } from "../../../lib/constants";

export default function Support() {
  // show first two logos centered and larger
  const logos = SUPPORT.slice(0, 2);
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="OUR SUPPORT" highlight="SUPPORT" />
      <LogoGrid logos={logos} />
    </div>
  );
}
