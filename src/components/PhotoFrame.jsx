import { useId } from "react";

/**
 * Portrait frame with a Newari-window-inspired arched clip-path,
 * a soft accent glow behind it, and a hairline border on top.
 */
const PhotoFrame = ({ src, alt, className = "", imgClassName = "object-cover object-top", glow = true }) => {
  const clipId = `newari-clip-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className="absolute -inset-8 -z-10 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)", filter: "blur(60px)" }}
          aria-hidden="true"
        />
      )}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0,0.15 C0,0.06 0.06,0 0.15,0 L0.85,0 C0.94,0 1,0.06 1,0.15 L1,0.92 L0.94,1 L0.06,1 L0,0.92 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="aspect-[4/5] border border-subtle overflow-hidden" style={{ clipPath: `url(#${clipId})` }}>
        <img src={src} alt={alt} className={`w-full h-full ${imgClassName}`} />
      </div>
    </div>
  );
};

export default PhotoFrame;
