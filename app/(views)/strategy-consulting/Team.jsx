import { TEAM } from "../../../lib/constants";
import SmartImage from "@/app/(core)/components/ui/SmartImage";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="OUR TEAM" highlight="TEAM" />
      <p className={styles.intro}>
        Meet the passionate professionals driving sustainable transformation and
        delivering strategic excellence across industries.
      </p>
      <div className={styles.grid}>
        {TEAM.map((t, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.photo}>
              <SmartImage src={t.photo} alt={t.name} width={200} height={200} className={styles.image} />
            </div>
            <div className={styles.copy}>
              <h4 className={styles.name}>{t.name}</h4>
              <div className={styles.role}>{t.role}</div>
              <p className={styles.bio}>{t.bio}</p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.linkedin}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Removed the 'Want to join our team?' CTA as requested */}
    </div>
  );
}
