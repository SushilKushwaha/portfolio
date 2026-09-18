import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/SpotlightCard";
import certifications from "../data/certifications";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

const Certifications = () => {
  return (
    <motion.div {...pageTransition}>
      <PageHeader index="05" eyebrow="Certifications" title="Continuous learning." />

      <section className="page-section bg-canvas">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={cert.id} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <SpotlightCard
                  as="a"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tiltStrength={3}
                  className="group block overflow-hidden"
                >
                  <div className="h-40 bg-surface-alt overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base mb-1 text-body">{cert.title}</h3>
                    <p className="text-sm text-muted mb-4">{cert.organization}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View Certificate →
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Certifications;
