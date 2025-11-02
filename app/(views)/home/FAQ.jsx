import Accordion from "../../(core)/components/ui/Accordion";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import { FAQ } from "../../../lib/constants";
import styles from "./FAQ.module.css";

export default function FAQSection() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Frequently Asked Questions" highlight="Questions" />
      <Accordion items={FAQ} />
    </div>
  );
}
