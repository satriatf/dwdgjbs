import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS, LOGO_PATH, LOGO_ALT } from "@/lib/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link
              href="/"
              aria-label="DWDG JBS home"
              className={styles.logoLink}
            >
              {/* prefer using the project logo image if available for stronger branding */}
              <div className={styles.logoImageWrap}>
                <Image
                  src={LOGO_PATH}
                  alt={LOGO_ALT}
                  width={400}
                  height={120}
                  className={styles.logoImg}
                  unoptimized
                />
              </div>
            </Link>
            <p className={styles.mission}>
              We love working with ambitious people. Let&apos;s build something
              great together now.
            </p>
          </div>

          <div className={styles.social}>
            <h4 className={styles.socialTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <div className={styles.bigCopy}>
            © 2025 All Rights Reserved by Do Well Do Good at Jakarta Business
            School
          </div>
        </div>
      </div>
    </footer>
  );
}
