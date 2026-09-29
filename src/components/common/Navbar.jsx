import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/coffeeContent.js";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const overlayRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuLinksRef = useRef(null);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return undefined;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isMobileMenuOpen && !reducedMotion) {
      gsap.set(overlay, { visibility: "visible" });
      gsap.fromTo(
        overlay,
        { yPercent: -2, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
      );
      gsap.fromTo(
        menuLinksRef.current?.children ?? [],
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.09,
          delay: 0.08,
          ease: "power2.out",
        },
      );
      overlay.querySelector("a")?.focus({ preventScroll: true });
    } else if (!isMobileMenuOpen && isMobileMenuVisible && !reducedMotion) {
      gsap.to(overlay, {
        yPercent: -2,
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          setIsMobileMenuVisible(false);
        },
      });
    }
    return undefined;
  }, [isMobileMenuOpen, isMobileMenuVisible]);

  useEffect(() => {
    if (!isMobileMenuVisible) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMobileMenu();
      if (event.key !== "Tab" || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuVisible]);

  function openMobileMenu() {
    setIsMobileMenuVisible(true);
    setIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      setIsMobileMenuVisible(false);
    menuButtonRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <header
        className={`coffee-navbar${isScrolled || isMobileMenuVisible ? " is-scrolled" : ""}`}
      >
        <div className="content-width navbar-inner">
          <a href="#top" className="brand-mark" onClick={closeMobileMenu}>
            TOPCOFFE<span>.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <Link className="order-button desktop-order" to="/order">
            Order Coffee
          </Link>
          <button
            ref={menuButtonRef}
            className={`mobile-menu-button${isMobileMenuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
            }
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div
        className="mobile-navigation"
        id="mobile-navigation"
        ref={overlayRef}
        role="dialog"
        aria-label="Site navigation"
        aria-modal={isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <nav
          className="mobile-nav-links"
          aria-label="Mobile navigation"
          ref={menuLinksRef}
        >
          {navigationLinks.map((link, index) => (
            <a key={link.href} href={link.href} onClick={closeMobileMenu}>
              {String(index + 1).padStart(2, "0")}.{" "}
              {link.label === "Visit" ? "Visit Us" : link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav-bottom">
          <Link
            className="button-dark mobile-order"
            to="/order"
            onClick={closeMobileMenu}
          >
            Order Coffee Online
          </Link>
          <div className="mobile-nav-meta">
            <span>JAKARTA, ID</span>
            <span>07.00 - 22.00</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
