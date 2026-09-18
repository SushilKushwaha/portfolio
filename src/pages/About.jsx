import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/SpotlightCard";
import PhotoFrame from "../components/PhotoFrame";
import Lightbox from "../components/Lightbox";
import education from "../data/education";

const highlights = [
  "Product development",
  "API integration",
  "Authentication & authorization",
  "Performance optimization",
  "Docker",
  "CI/CD",
  "Responsive UI",
  "AI-assisted development",
  "Agentic coding workflows",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "4+", label: "Featured Projects" },
  { value: "Full-Stack", label: "Frontend + Backend" },
  { value: "CI/CD", label: "Deployment Experience" },
];

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

const About = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <motion.div {...pageTransition}>
      <PageHeader
        index="01"
        eyebrow="About"
        title="Building software with intent."
        description="Full-Stack Software Engineer with 2+ years of experience building responsive web applications using React, TypeScript, Node.js, Angular, REST APIs, MongoDB, and PostgreSQL."
      />

      <section className="page-section bg-canvas">
        <div className="container">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex justify-center lg:justify-start">
              <PhotoFrame src="/GOVL6334.JPG" alt="Sushil Kumar Kushwaha" className="max-w-sm w-full" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="text-muted leading-relaxed mb-6 text-lg">
                I work across the stack — from building reusable, accessible
                UI components to designing REST APIs with proper
                authentication and database design. Alongside day-to-day
                development, I use AI coding tools like Claude, Codex,
                Gemini, and ChatGPT as part of an agentic development
                workflow to move faster on research, debugging, and
                implementation.
              </p>

              <h3 className="text-base font-semibold mb-4 text-body">Where I focus</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="card p-4">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="weave-divider my-14" aria-hidden="true" />

          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h3 className="text-base font-semibold mb-6 text-body">Education</h3>
            <div className="space-y-6">
              {education.map((item) => (
                <SpotlightCard
                  key={item.degree}
                  tiltStrength={3}
                  className="flex flex-col sm:flex-row overflow-hidden"
                >
                  <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center">
                    <h4 className="text-lg mb-1.5 text-body">{item.degree}</h4>
                    <p className="text-sm text-muted mb-1">{item.institution}</p>
                    <p className="text-xs font-mono text-accent-gold mb-5">{item.period}</p>
                    <button
                      type="button"
                      onClick={() => setLightboxSrc(item.image)}
                      className="self-start inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      View convocation photo →
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxSrc(item.image)}
                    aria-label={`Enlarge ${item.degree} convocation photo`}
                    className="group relative sm:w-64 h-48 sm:h-auto shrink-0 overflow-hidden bg-surface-alt"
                  >
                    <img
                      src={item.image}
                      alt={`${item.degree} — convocation`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Lightbox src={lightboxSrc} alt="Convocation" onClose={() => setLightboxSrc(null)} />
    </motion.div>
  );
};

export default About;
