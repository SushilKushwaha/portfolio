import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import experience from "../data/experience";

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

const Experience = () => {
  return (
    <motion.div {...pageTransition}>
      <PageHeader index="02" eyebrow="Experience" title="Where I've worked." />

      <section className="page-section bg-canvas">
        <div className="container">
          <div className="max-w-3xl">
            {experience.map((exp) => (
              <motion.div
                key={exp.company}
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="card card-glow p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-body">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted sm:text-right shrink-0">
                    <p className="font-mono">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
