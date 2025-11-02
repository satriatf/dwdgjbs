import Card from "../../(core)/components/ui/Card";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import styles from "./SocialBlocks.module.css";
import { FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../../lib/constants";

// Only keep 3 social links (Instagram, LinkedIn, Website/company)
const BLOCKS = [
  {
    key: "instagram",
    title: "Instagram",
    desc: "Follow us on Instagram to stay up to date with the latest news and updates",
    href: SOCIAL_LINKS.instagram,
    icon: FaInstagram,
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    desc: "Follow us on LinkedIn to stay up to date with the latest news and updates",
    href: SOCIAL_LINKS.linkedin,
    icon: FaLinkedin,
  },
  {
    key: "website",
    title: "Website",
    desc: "Check out our website to stay up to date with the latest news and updates",
    href: SOCIAL_LINKS.website,
    icon: FaGlobe,
  },
];

export default function SocialBlocks() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Our Social Media" highlight="Social Media" />
      <p className={styles.description}>
        Follow us on social media to stay up to date with the latest news and
        updates.
      </p>

      {/* Three equal cards in a row (desktop). Entire card is clickable; no separate Follow button. */}
      <div className={styles.grid}>
        {BLOCKS.map((b) => {
          const Icon = b.icon;
          return (
            <a
              key={b.key}
              href={b.href}
              target={b.href.startsWith("http") ? "_blank" : undefined}
              rel={b.href.startsWith("http") ? "noreferrer" : undefined}
              className={styles.cardLink}
            >
              <Card className={`${styles.card} ${styles[b.key]}`}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon} aria-hidden>
                    <Icon />
                  </div>
                </div>
                <h4 className={styles.cardTitle}>{b.title}</h4>
                <p className={styles.desc}>{b.desc}</p>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
}
