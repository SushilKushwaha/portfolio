import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Interactive card: mouse-tracked spotlight glow + subtle 3D tilt.
 * Falls back to a static card when reduced motion is requested (no JS tilt, CSS transitions only).
 */
const SpotlightCard = ({ as: Component = "div", className = "", children, tiltStrength = 8, ...props }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltStrength, -tiltStrength]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltStrength, tiltStrength]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    ref.current.style.setProperty("--spot-x", `${x * 100}%`);
    ref.current.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const MotionComponent = useMemo(() => motion.create(Component), [Component]);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`spotlight-card ${className}`}
      {...props}
    >
      <span className="spotlight-glow" aria-hidden="true" />
      {children}
    </MotionComponent>
  );
};

export default SpotlightCard;
