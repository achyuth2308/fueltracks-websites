/**
 * VideoEmbed — A reusable video component.
 * Supports:
 *  - Local video files (src = "/videos/my-video.mp4")
 *  - YouTube embeds (youtubeId = "Z2pAeH0HFdA")
 *  - Placeholder with play button
 *
 * ✏️  Drop your video files in public/videos/ or src/assets/videos/
 */
export default function VideoEmbed({
  src,
  youtubeId,
  poster,
  title = "Video",
  className = "",
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
}) {
  // YouTube embed
  if (youtubeId) {
    return (
      <div className={`relative w-full aspect-video rounded-2xl overflow-hidden ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Local video file
  if (src) {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden ${className}`}>
        <video
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
        />
      </div>
    );
  }

  // Placeholder when no source is provided
  return (
    <div
      className={`relative w-full aspect-video rounded-2xl bg-surface-100 border-2 border-dashed border-surface-300 flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600 ml-1">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <p className="text-surface-500 text-sm font-medium">
          Video placeholder
        </p>
        <p className="text-surface-400 text-xs mt-1">
          Add <code className="bg-surface-200 px-1.5 py-0.5 rounded">src</code> or{" "}
          <code className="bg-surface-200 px-1.5 py-0.5 rounded">youtubeId</code> prop
        </p>
      </div>
    </div>
  );
}
