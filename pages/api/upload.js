import fs from "fs";
import path from "path";

// import formidable in a way that works across versions (CJS/ESM/default)
let formidableImported;
try {
  formidableImported = await import("formidable");
} catch (e) {
  // fallback to require if dynamic import fails (unlikely in ESM environment)
  formidableImported = require("formidable");
}
const formidableModule = formidableImported.default || formidableImported;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // If running on Vercel (or any read-only / ephemeral environment), do not attempt
  // to write to the project filesystem. Return a helpful error so callers know to
  // configure external storage (S3/Spaces/Cloudinary) for production.
  if (process.env.VERCEL === "1" || process.env.NEXT_PUBLIC_VERCEL === "1") {
    return res.status(503).json({
      error:
        "File upload not supported on this hosting environment. Configure external storage and update /api/upload to use it.",
    });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });

  try {
    // create form instance depending on API
    let form;
    const opts = {
      uploadDir,
      keepExtensions: true,
      maxFileSize: 2 * 1024 * 1024,
    };
    if (typeof formidableModule === "function") {
      // formidable v3+: callable to create instance
      form = formidableModule(opts);
    } else if (formidableModule.IncomingForm) {
      // older API
      form = new formidableModule.IncomingForm(opts);
    } else if (formidableModule.Formidable) {
      form = new formidableModule.Formidable(opts);
    } else {
      throw new Error("Unsupported formidable version");
    }

    const { fields, files } = await new Promise((resolve, reject) => {
      // some versions return a promise from parse, but the callback form.parse works across versions
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({
          fields,
          files,
        });
      });
    });

    const uploaded = files.file;
    if (!uploaded)
      return res.status(400).json({
        error: "No file uploaded",
      });

    const fileObj = Array.isArray(uploaded) ? uploaded[0] : uploaded;
    // support different formidable field names across versions
    const savedPath =
      fileObj.filepath ||
      fileObj.path ||
      fileObj.fileName ||
      fileObj.newFilename ||
      null;

    // Determine original filename from available properties
    const originalName =
      fileObj.originalFilename ||
      fileObj.originalname ||
      fileObj.name ||
      fileObj.newFilename ||
      path.basename(savedPath || "") ||
      "uploaded";

    // sanitize original name and prefix with timestamp to avoid collisions
    const safeBase = String(originalName).replace(/[^a-z0-9.\-_.]/gi, "-");
    const finalName = `${Date.now()}-${safeBase}`;
    const finalPath = path.join(uploadDir, finalName);

    try {
      // Move/rename the temporary saved file to the final name/location
      if (savedPath && savedPath !== finalPath) {
        await fs.promises.rename(savedPath, finalPath);
      }
    } catch (moveErr) {
      console.error("Could not rename uploaded file", moveErr);
      // if rename fails, fall back to returning the savedPath basename
    }

    const url = `/uploads/${finalName}`;

    return res.status(200).json({ ok: true, filename: finalName, url });
  } catch (err) {
    console.error("Upload error", err);
    const message =
      process.env.NODE_ENV === "development"
        ? err.message || String(err)
        : "Upload failed";
    return res.status(500).json({
      error: message,
    });
  }
}
