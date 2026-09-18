import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
import RevealText from "../components/RevealText";
import PhotoFrame from "../components/PhotoFrame";
import projects from "../data/projects";
import experience from "../data/experience";
import skillCategories from "../data/skills";
import certifications from "../data/certifications";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SushilKushwaha",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sushil-kushwaha-71aa13220",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:sushilsinha733@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const totalSkills = skillCategories.reduce((count, category) => count + category.skills.length, 0);

  const stats = [
    { value: "2+", label: "Years Experience", to: "/about" },
    { value: String(projects.length), label: "Projects Shipped", to: "/projects" },
    { value: String(totalSkills), label: "Skills & Tools", to: "/skills" },
    { value: String(certifications.length), label: "Certifications", to: "/certifications" },
  ];

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 contour-backdrop pointer-events-none" aria-hidden="true" />
        <div className="container relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-6 items-center">
            <motion.div className="min-w-0" style={{ opacity: heroOpacity, y: heroY }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 pill mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new opportunities
              </motion.div>

              <h1 className="mb-4">
                <RevealText text="Sushil Kumar" className="text-body" />
                <br />
                <RevealText text="Kushwaha" className="text-gradient" delay={0.15} />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-semibold text-primary mb-6"
              >
                Full-Stack Software Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-muted text-lg leading-relaxed max-w-xl mb-8"
              >
                2+ years of experience building responsive web applications
                using React, TypeScript, Node.js, Angular, REST APIs,
                MongoDB, and PostgreSQL — scalable products across modern
                frontend and backend technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap items-center gap-3 mb-8"
              >
                <Link to="/projects" className="btn-primary">
                  View Projects
                </Link>
                <a href="/Sushil_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Download Resume
                </a>
                <Link to="/contact" className="btn-ghost text-sm font-medium">
                  Let&apos;s Connect →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 card card-glow text-muted hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ opacity: heroOpacity, y: heroY }}
              className="w-full flex justify-center lg:justify-end"
            >
              <div className="relative max-w-sm w-full">
                <PhotoFrame src="/sushil1.png" alt="Sushil Kumar Kushwaha" />
                <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 card px-4 py-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="font-mono text-xs text-muted">Lalitpur, Nepal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="weave-divider" aria-hidden="true" />

      {/* Featured work — editorial spotlight, not a card grid */}
      <section className="page-section bg-canvas">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-2xl"
          >
            <p className="eyebrow mb-3">Featured Work</p>
            <h2>Software that ships, not just demos.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch"
          >
            <div className="flex flex-col justify-between card p-7 md:p-9">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-accent-gold">01</span>
                  <span className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
                  <span className="pill">{featuredProject?.status}</span>
                </div>
                <p className="eyebrow mb-2">{featuredProject?.category}</p>
                <h3 className="text-2xl md:text-3xl mb-4">{featuredProject?.title}</h3>
                <p className="text-muted leading-relaxed mb-6 max-w-lg">{featuredProject?.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject?.technologies.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={featuredProject?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {featuredProject?.linkLabel}
                </a>
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group">
                  All projects
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl border border-subtle overflow-hidden bg-surface-alt min-h-[220px] lg:min-h-0">
              <div className="absolute inset-0 contour-backdrop" aria-hidden="true" />
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-25 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--color-accent-gold), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="bg-cover h-full w-full" style={{ backgroundImage: `url(${featuredProject?.image})` }}></div>
                <p className="font-mono text-xs text-muted">Now building</p>
                <p className="text-lg font-semibold text-body">{featuredProject?.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Remaining projects — index list, not cards */}
          <div className="mt-14 border-t border-subtle">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex items-center justify-between gap-6 py-5 border-b border-subtle"
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className="font-mono text-xs text-muted shrink-0">0{index + 2}</span>
                  <span className="text-lg text-body group-hover:text-primary transition-colors truncate">
                    {project.title}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 shrink-0">
                  <span className="text-sm text-muted">{project.category}</span>
                  <ArrowIcon className="h-4 w-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <div className="weave-divider" aria-hidden="true" />

      {/* Experience + snapshot stats — split layout */}
      <section className="page-section bg-surface-alt relative overflow-hidden">
        <div className="absolute inset-0 contour-backdrop opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="container relative grid lg:grid-cols-[0.95fr_1.05fr] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="mb-6">Where I&apos;ve been building.</h2>
            <div className="card p-6">
              <p className="font-mono text-xs text-accent-gold mb-2">{experience[0].period}</p>
              <h3 className="text-lg mb-1 text-body">{experience[0].role}</h3>
              <p className="text-sm text-muted mb-5">
                {experience[0].company} · {experience[0].location}
              </p>
              <ul className="space-y-2.5 mb-6">
                {experience[0].responsibilities.slice(0, 2).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/experience" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group">
                Full experience
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="eyebrow mb-3">By the Numbers</p>
            <h2 className="mb-6">A quick snapshot.</h2>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <SpotlightCard as={Link} to={stat.to} className="group h-full flex flex-col p-6">
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="weave-divider" aria-hidden="true" />

      {/* Closing CTA */}
      <section className="page-section bg-canvas">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Let&apos;s build something useful.</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              I&apos;m open to opportunities where I can contribute to
              building reliable, scalable, and user-focused software.
            </p>
            <Link to="/contact" className="btn-primary text-base px-8 py-3">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
