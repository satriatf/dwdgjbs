import fs from "fs";
import path from "path";

function sanitizeName(name) {
    // keep extensions, replace unsafe chars
    return String(name)
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9.\-_]/g, "-")
        .replace(/-+/g, "-");
}

export async function saveUploadedFile(savedPath, originalName, uploadDir) {
    // Ensure upload dir exists
    await fs.promises.mkdir(uploadDir, {
        recursive: true
    });

    const base = originalName || path.basename(savedPath || "uploaded");
    const safeBase = sanitizeName(base);
    const finalName = `${Date.now()}-${safeBase}`;
    const finalPath = path.join(uploadDir, finalName);

    try {
        if (savedPath && savedPath !== finalPath) {
            await fs.promises.rename(savedPath, finalPath);
        }
    } catch (err) {
        // If rename fails, attempt to copy then unlink
        try {
            await fs.promises.copyFile(savedPath, finalPath);
            await fs.promises.unlink(savedPath);
        } catch (copyErr) {
            // give up — throw error to caller
            throw copyErr;
        }
    }

    return finalName;
}

export function publicUrlFor(filename) {
    if (!filename) return null;
    return `/uploads/${filename}`;
}