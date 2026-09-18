import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const word = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Splits text into words and reveals them with a staggered rise.
 * Renders inline so it can be dropped inside an h1/h2.
 */
const RevealText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={container}
      transition={{ delayChildren: delay }}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-1">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default RevealText;
