import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { fullMenu } from "../../../data/coffeeContent.js";

function MenuDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useLayoutEffect(() => {
    if (!isOpen || !drawerRef.current) return undefined;
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".menu-drawer-panel", { xPercent: 0 });
        return;
      }
      gsap.fromTo(
        ".menu-drawer-panel",
        { xPercent: 100 },
        { xPercent: 0, duration: 0.5, ease: "power3.out" },
      );
      gsap.fromTo(
        ".menu-drawer-content",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, delay: 0.15, stagger: 0.04 },
      );
    }, drawerRef);
    closeButtonRef.current?.focus({ preventScroll: true });
    return () => context.revert();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll(
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="menu-drawer-backdrop"
      ref={drawerRef}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        className="menu-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-drawer-title"
      >
        <div className="menu-drawer-content">
          <div className="drawer-heading">
            <div>
              <span className="section-kicker">TOPCOFFE EXPRESS</span>
              <h2 id="menu-drawer-title">Order Coffee</h2>
            </div>
            <button
              className="drawer-close"
              type="button"
              onClick={onClose}
              ref={closeButtonRef}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <div className="full-menu-categories">
            {fullMenu.map((group) => (
              <section key={group.category}>
                <h3>{group.category}</h3>
                <div className="drawer-items">
                  {group.items.map(([name, price, description]) => (
                    <div className="drawer-item" key={name}>
                      <div>
                        <strong>{name}</strong>
                        <span>{description}</span>
                      </div>
                      <b>{price}</b>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <a
            className="whatsapp-order"
            href="https://wa.me/6281234567890?text=Hello%20TopCoffe,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Via WhatsApp Pickup
          </a>
        </div>
      </aside>
    </div>
  );
}

export default MenuDrawer;
