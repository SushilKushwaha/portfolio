import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SushilKushwaha",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sushil-kushwaha-71aa13220",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:sushilsinha733@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-canvas pb-12">
      <div className="weave-divider mb-12" aria-hidden="true" />
      <div className="container grid sm:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span
              className="h-3.5 w-3.5 rotate-45 rounded-[3px]"
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent-gold))" }}
              aria-hidden="true"
            />
            <span className="font-mono font-semibold text-body">
              Sushil<span className="text-primary">.</span>dev
            </span>
          </Link>
          <p className="text-sm text-muted mt-3">Full-Stack Software Engineer</p>
          <p className="text-xs font-mono text-muted mt-1">React · TypeScript · Node.js · Angular</p>
        </div>

        <div>
          <p className="eyebrow mb-3">Navigate</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {quickLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-sm text-muted hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:text-right">
          <p className="eyebrow mb-3 sm:text-right">Connect</p>
          <div className="flex items-center gap-3 sm:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-full text-muted hover:text-primary hover:bg-surface-alt transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t border-subtle text-center text-xs text-muted">
        © {currentYear} Sushil Kumar Kushwaha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
