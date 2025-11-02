import LogoGrid from "../../(core)/components/ui/LogoGrid";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import styles from "./Clients.module.css";
import { CLIENT_LOGOS } from "../../../lib/constants";

export default function Clients() {
  // show first two logos centered and larger
  const logos = CLIENT_LOGOS.slice(0, 2);
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="OUR SUPPORT" highlight="SUPPORT" />
      <LogoGrid logos={logos} />
    </div>
  );
}
