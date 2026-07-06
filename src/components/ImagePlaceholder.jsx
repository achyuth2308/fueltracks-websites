/**
 * ImagePlaceholder — A reusable image component with fallback.
 * Supports:
 *  - Local images (src = "/images/my-image.jpg")
 *  - External URLs (src = "https://example.com/image.jpg")
 *  - Placeholder when no source is provided
 *
 * ✏️  Drop your image files in public/images/ or src/assets/images/
 */
export default function ImagePlaceholder({
  src,
  alt = "Image",
  className = "",
  aspectRatio = "aspect-video",
  rounded = "rounded-2xl",
  icon = "Image",
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${aspectRatio} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  // Placeholder
  return (
    <div
      className={`relative ${aspectRatio} ${rounded} bg-gradient-to-br from-surface-100 to-surface-200 border-2 border-dashed border-surface-300 flex items-center justify-center ${className}`}
    >
      <div className="text-center p-4">
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-surface-500 text-sm font-medium">{alt}</p>
        <p className="text-surface-400 text-xs mt-1">
          Add image to <code className="bg-surface-200 px-1 py-0.5 rounded">src</code> prop
        </p>
      </div>
    </div>
  );
}
