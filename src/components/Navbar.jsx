import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { name: "About", path: "/about", num: "01" },
  { name: "Experience", path: "/experience", num: "02" },
  { name: "Projects", path: "/projects", num: "03" },
  { name: "Skills", path: "/skills", num: "04" },
  { name: "Certifications", path: "/certifications", num: "05" },
  { name: "Contact", path: "/contact", num: "06" },
];

const SunIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive ? "text-primary" : "text-muted hover:text-body"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "bg-surface/85 backdrop-blur-md border-subtle"
          : "bg-surface/60 backdrop-blur-md border-transparent"
      }`}
    >
      <div
        className="h-[3px] w-full"
        style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-accent-gold))" }}
        aria-hidden="true"
      />
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={closeMobileMenu}>
          <span
            className="h-4 w-4 rotate-45 rounded-[3px] transition-transform duration-300 group-hover:rotate-[135deg]"
            style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent-gold))" }}
            aria-hidden="true"
          />
          <span className="font-mono text-lg font-semibold tracking-tight text-body">
            Sushil<span className="text-primary">.</span>dev
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {({ isActive }) => (
                <>
                  <span className="font-mono text-[10px] text-muted mr-1.5 align-middle">{link.num}</span>
                  {link.name}
                  {isActive && <span className="absolute left-3 right-3 -bottom-[1px] h-0.5 rounded-full bg-primary" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted hover:text-body hover:bg-surface-alt transition-colors"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link to="/contact" className="btn-primary">
            Let&apos;s Connect
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted hover:text-body hover:bg-surface-alt transition-colors"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-md text-body"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden bg-surface border-t border-subtle transition-[max-height] duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container flex flex-col py-3" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `py-3 text-base font-medium border-b border-subtle last:border-none ${
                  isActive ? "text-primary" : "text-body"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" onClick={closeMobileMenu} className="btn-primary justify-center mt-4">
            Let&apos;s Connect
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
