"use client";

/* Navbar component - accessible, sticky, mobile panel */
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { SOCIAL_LINKS, LOGO_PATH, LOGO_ALT } from "@/lib/constants";

const MENU = [
  { href: "/", label: "Home" },
  { href: "/our-purpose", label: "Our purpose" },
  { href: "/strategy-consulting", label: "Strategy Consulting" },
  { href: "/insights", label: "Insights" },
  // Careers removed from menu per request
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className={`${styles.header} ${open ? styles.headerOpen : ""}`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <Link href="/" aria-label="Go to home" className={styles.brand}>
            {!logoError ? (
              <Image
                src={LOGO_PATH}
                alt={LOGO_ALT}
                className={styles.logoImg}
                width={400}
                height={120}
                priority
                onError={() => setLogoError(true)}
                unoptimized
              />
            ) : (
              <div className={styles.logoText}>
                <span className={styles.logoMain}>dwdg.</span>
                <div className={styles.logoSub}>
                  <div>DoWell</div>
                  <div>DoGood</div>
                </div>
              </div>
            )}
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Primary navigation">
          <ul className={styles.menu}>
            {MENU.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className={styles.link}>
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop social icons (matches footer styling) */}
        <div className={styles.right}>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <button
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {/* simple accessible icon: hamburger / close (bigger for clarity) */}
          {open ? (
            <span aria-hidden style={{ fontSize: 34, lineHeight: 1 }}>
              ×
            </span>
          ) : (
            <span aria-hidden style={{ fontSize: 28, lineHeight: 1 }}>
              ☰
            </span>
          )}
        </button>

        <div
          className={`${styles.mobilePanel} ${open ? styles.open : ""}`}
          role="dialog"
          aria-modal="true"
        >
          {/* close button visible on mobile panel */}
          {open && (
            <button
              className={styles.mobileClose}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden style={{ fontSize: 34, lineHeight: 1 }}>
                ×
              </span>
            </button>
          )}

          <ul className={styles.mobileMenu}>
            {MENU.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile social icons */}
          <div className={styles.mobileSocial}>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
