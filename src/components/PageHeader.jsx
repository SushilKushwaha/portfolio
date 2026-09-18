import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, description, index }) => {
  return (
    <div className="pt-28 pb-10 md:pt-36 md:pb-14 relative overflow-hidden">
      <div className="absolute inset-0 grid-backdrop pointer-events-none" aria-hidden="true" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[auto_1fr_0.8fr] gap-6 lg:gap-10 items-end">
          {index && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block font-mono text-sm text-accent-gold pb-2"
            >
              {index}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h1 className="text-4xl md:text-5xl">{title}</h1>
          </motion.div>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-muted text-base leading-relaxed lg:border-l lg:border-subtle lg:pl-6"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
      <div className="weave-divider mt-10 md:mt-14" aria-hidden="true" />
    </div>
  );
};

export default PageHeader;
