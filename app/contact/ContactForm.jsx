"use client";

import { useState, useEffect } from "react";
import Button from "@/app/(core)/components/ui/Button";
import styles from "./contact.module.css";

export default function ContactForm() {
  // i18n removed — use static English labels/messages

  const [form, setForm] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState(null);
  const [lastFileUrl, setLastFileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);
  const [successName, setSuccessName] = useState("");

  // Check if running on Vercel production
  const isVercel = process.env.NEXT_PUBLIC_VERCEL === "1";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return setFileName("");
    if (f.size > 2 * 1024 * 1024) {
      setNotice({
        type: "error",
        text: "File must be smaller than 2MB",
      });
      e.target.value = null;
      return setFileName("");
    }
    setFileName(f.name);
    setFileData(f);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setNotice(null);
    if (
      !form.subject ||
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.message
    ) {
      setNotice({
        type: "error",
        text: "This field is required",
      });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        subject: form.subject,
        phone: form.phone || null,
        file: fileName || null,
        message: form.message,
      };

      // if a file is selected, upload it first to /api/upload
      if (fileData) {
        const fd = new FormData();
        fd.append("file", fileData);
        const up = await fetch("/api/upload", { method: "POST", body: fd });
        if (!up.ok) {
          const err = await up.json().catch(() => ({}));
          throw new Error(err?.error || "File upload failed");
        }
        const upJ = await up.json();
        payload.file = upJ.url || upJ.filename || null;
        // keep last uploaded file url so we can show a link/preview in the UI
        setLastFileUrl(
          upJ.url || (upJ.filename ? `/uploads/${upJ.filename}` : "")
        );
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(
          err?.error || "An error occurred. Please try again later."
        );
      }
      // capture name before clearing form
      setSuccessName(form.firstName || "");
      setNotice({
        type: "success",
        text: "Thanks — we'll be in touch soon.",
      });
      setForm({
        subject: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setFileName("");
    } catch (err) {
      console.error(err);
      setNotice({
        type: "error",
        text:
          process.env.NODE_ENV === "development"
            ? err.message || "An error occurred. Please try again later."
            : "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  // auto-hide success toast after 4s
  useEffect(() => {
    if (notice?.type === "success") {
      const tId = setTimeout(() => {
        setNotice(null);
        setSuccessName("");
      }, 4000);
      return () => clearTimeout(tId);
    }
  }, [notice]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Subject*</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("This field is required")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </label>

      <div className={styles.row}>
        <label className={`${styles.field} ${styles.half}`}>
          <span className={styles.label}>First name*</span>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("This field is required")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </label>
        <label className={`${styles.field} ${styles.half}`}>
          <span className={styles.label}>Last name*</span>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("This field is required")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={`${styles.field} ${styles.half}`}>
          <span className={styles.label}>Email*</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("This field is required")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </label>
        <label className={`${styles.field} ${styles.half}`}>
          <span className={styles.label}>Phone</span>
          <input name="phone" value={form.phone} onChange={handleChange} />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Message*</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("This field is required")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </label>

      {!isVercel && (
        <label className={styles.field}>
          <span className={styles.label}>
            Attachment{" "}
            <small>Optional. Max 2MB. Allowed: .pdf, .doc, .docx, .txt</small>
          </span>
          <input
            type="file"
            onChange={handleFile}
            accept=".pdf,.doc,.docx,.txt"
          />
          {fileName && <div className={styles.fileName}>{fileName}</div>}
        </label>
      )}

      <div className={styles.actions}>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </Button>
      </div>

      {notice && notice.type === "error" && (
        <div className={styles.error} role="status">
          {notice.text}
        </div>
      )}

      {notice && notice.type === "success" && (
        <>
          <div className={styles.toastOverlay} />
          <div className={styles.toast} role="status">
            <p className={styles.toastTitle}>Message sent</p>
            <p className={styles.toastMessage}>
              Thanks — we&apos;ll be in touch soon.
            </p>
            {lastFileUrl && (
              <div style={{ marginTop: 8 }}>
                <a href={lastFileUrl} target="_blank" rel="noopener noreferrer">
                  View uploaded file
                </a>
                {lastFileUrl.toLowerCase().endsWith(".pdf") && (
                  <div style={{ marginTop: 8 }}>
                    <iframe
                      src={lastFileUrl}
                      title="Uploaded PDF preview"
                      style={{
                        width: "100%",
                        height: 360,
                        border: "1px solid #ddd",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </form>
  );
}
