import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "Our story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isNavbarFloating = isScrolled || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      const activationLine = 96;
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > activationLine;
      });

      setActiveSection(currentSection ? `#${currentSection.id}` : "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function handleNavigationClick(event, href) {
    event.preventDefault();
    setActiveSection("");
    setIsMenuOpen(false);

    const targetSection = document.querySelector(href);

    if (!targetSection) {
      return;
    }

    const navbarOffset = 96;
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl px-2 transition-all duration-300 sm:px-3 ${
          isNavbarFloating
            ? "rounded-2xl border border-outline-variant/70 bg-surface/90 shadow-[0_8px_30px_rgb(26_28_28/0.06)] backdrop-blur-xl lg:rounded-full"
            : "rounded-2xl border border-transparent bg-transparent shadow-none lg:rounded-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-2 sm:px-3">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[10px] font-bold tracking-[-0.08em] text-on-primary transition-transform duration-300 group-hover:rotate-[-8deg]">
              TC
            </span>
            <span className="font-headline-sm text-[17px] font-semibold tracking-[-0.03em] text-primary">
              TopCoffe
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 rounded-full bg-surface-container-low/80 p-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                className={`rounded-full px-4 py-2 font-label-md text-label-md normal-case tracking-normal transition-colors duration-200 hover:bg-surface hover:text-primary ${activeSection === link.href ? "bg-surface text-primary shadow-sm" : "text-on-surface-variant"}`}
                href={link.href}
                aria-current={
                  activeSection === link.href ? "location" : undefined
                }
                onClick={(event) => handleNavigationClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              className="hidden rounded-full bg-primary px-4 py-2.5 font-label-md text-label-md normal-case tracking-normal text-on-primary transition-colors duration-200 hover:bg-secondary lg:inline-flex"
              to="/order"
            >
              Order coffee{" "}
              <span aria-hidden="true" className="ml-1.5">
                ↗
              </span>
            </Link>
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-surface-container-low lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="text-lg leading-none" aria-hidden="true">
                {isMenuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            className="border-t border-outline-variant/70 px-2 pb-3 pt-2 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                className={`block rounded-xl px-3 py-3 font-body-md text-body-md transition-colors hover:bg-surface-container-low hover:text-primary ${activeSection === link.href ? "bg-surface-container-low text-primary" : "text-on-surface-variant"}`}
                href={link.href}
                aria-current={
                  activeSection === link.href ? "location" : undefined
                }
                onClick={(event) => handleNavigationClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
            <Link
              className="mt-1 block rounded-xl bg-primary px-3 py-3 text-center font-label-md text-label-md text-on-primary"
              to="/order"
              onClick={() => setIsMenuOpen(false)}
            >
              Order coffee
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
