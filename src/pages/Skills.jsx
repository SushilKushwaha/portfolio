import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/SpotlightCard";
import skillCategories from "../data/skills";
import engineeringApproach from "../data/engineeringApproach";

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

const Skills = () => {
  return (
    <motion.div {...pageTransition}>
      <PageHeader index="04" eyebrow="Skills" title="Technologies I work with." />

      <section className="page-section bg-canvas">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div key={category.name} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <SpotlightCard tiltStrength={3} className="h-full p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-surface-alt">
        <div className="container">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">How I Work</p>
            <h2>Engineering approach.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringApproach.map((item, index) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <SpotlightCard tiltStrength={3} className="h-full p-6">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center font-mono text-sm mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base mb-2 text-body">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
