import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/SpotlightCard";

const contactLinks = [
  {
    title: "Email",
    value: "sushilsinha733@gmail.com",
    href: "mailto:sushilsinha733@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "sushil-kushwaha-71aa13220",
    href: "https://linkedin.com/in/sushil-kushwaha-71aa13220",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    value: "SushilKushwaha",
    href: "https://github.com/SushilKushwaha",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const meta = [
  { label: "Phone", value: "+977 9863814496", href: "tel:+9779863814496" },
  { label: "Location", value: "Kathmandu, Nepal", href: null },
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

const Contact = () => {
  return (
    <motion.div {...pageTransition}>
      <PageHeader
        index="06"
        eyebrow="Contact"
        title="Let's build something useful."
        description="I'm open to opportunities where I can contribute to building reliable, scalable, and user-focused software."
      />

      <section className="page-section bg-canvas">
        <div className="container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <a href="mailto:sushilsinha733@gmail.com" className="btn-primary text-base px-8 py-3 mb-12 inline-flex">
              Get in Touch
            </a>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {contactLinks.map((link) => (
                <SpotlightCard
                  key={link.title}
                  as="a"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  tiltStrength={4}
                  className="block p-5 group"
                >
                  <div className="h-9 w-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <p className="text-sm font-semibold text-body mb-1">{link.title}</p>
                  <p className="text-sm text-muted truncate">{link.value}</p>
                </SpotlightCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
              {meta.map((item) =>
                item.href ? (
                  <a key={item.label} href={item.href} className="hover:text-primary transition-colors">
                    <span className="text-body font-medium">{item.label}: </span>
                    {item.value}
                  </a>
                ) : (
                  <span key={item.label}>
                    <span className="text-body font-medium">{item.label}: </span>
                    {item.value}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
