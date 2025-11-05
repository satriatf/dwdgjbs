import Image from "next/image";

/**
 * SmartImage
 * - Simplified safe variant: does not use server-only modules.
 * - Renders Next's <Image /> with `unoptimized` when width & height are
 *   provided, otherwise falls back to a plain <img>.
 * - Removed server-side fs/path usage to avoid bundling errors when imported
 *   from client components.
 */
export default function SmartImage({ src, alt = "", width, height, className, priority = false }) {
    if (width && height) {
        return (
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
                unoptimized
                priority={priority}
            />
        );
    }

    // fallback – simple <img>
    return <img src={src} alt={alt} className={className} />;
}
