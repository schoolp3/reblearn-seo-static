import Image from "next/image";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

/**
 * Responsive image component with clean rounded styling.
 * 
 * Image naming convention:
 * - /images/hero-learning-support.jpg - Homepage hero/learning support image
 * - /images/evaluation-report.jpg - Services page evaluation/report image
 * - /images/learning-therapy-session.jpg - Learning therapy page image
 * - /images/district-professional.jpg - District contracting page image
 * - /images/dennis-saller-headshot.jpg - About page Dennis photo (real photo)
 * - /images/reblearn-logo.png - Logo for header/footer
 * 
 * Replace placeholder images by uploading files with these exact names.
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
}: ImagePlaceholderProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        className={`object-cover ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 600}
      height={height || 400}
      className={`object-cover ${className}`}
      priority={priority}
      sizes={sizes}
    />
  );
}

interface PlaceholderBoxProps {
  label: string;
  sublabel?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

/**
 * Temporary placeholder box for missing images.
 * Shows a clean labeled box until the real image is added.
 */
export function PlaceholderBox({
  label,
  sublabel,
  aspectRatio = "video",
  className = "",
}: PlaceholderBoxProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[2/1]",
  };

  return (
    <div
      className={`
        ${aspectClasses[aspectRatio]}
        bg-gradient-to-br from-slate-100 to-slate-200
        border-2 border-dashed border-slate-300
        rounded-2xl
        flex flex-col items-center justify-center
        text-center p-6
        ${className}
      `}
    >
      <svg
        className="w-12 h-12 text-slate-400 mb-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      {sublabel && <p className="text-xs text-slate-400 mt-1">{sublabel}</p>}
    </div>
  );
}
