import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function OrderHero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".order-back-link", { y: 12, opacity: 0, duration: 0.45 })
        .from(
          ".order-hero-label",
          { y: 14, opacity: 0, duration: 0.5 },
          "-=0.2",
        )
        .from(
          ".order-hero-line",
          { yPercent: 110, duration: 0.75, stagger: 0.12, ease: "expo.out" },
          "-=0.15",
        )
        .from(
          ".order-hero-copy",
          { y: 18, opacity: 0, duration: 0.6 },
          "-=0.25",
        )
        .from(
          ".order-hero-visual",
          { y: 20, opacity: 0, scale: 0.98, duration: 0.8 },
          "-=0.5",
        );
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section className="order-hero" ref={sectionRef}>
      <div className="content-width">
        <Link className="order-back-link" to="/">
          <span aria-hidden="true">←</span> Back to TopCoffe
        </Link>
        <div className="order-hero-grid">
          <div className="order-hero-copy-block">
            <span className="section-kicker order-hero-label">
              TOPCOFFE EXPRESS / PICKUP
            </span>
            <h1 className="order-hero-title">
              <span>
                <span className="order-hero-line">ORDER</span>
              </span>
              <span>
                <span className="order-hero-line">SOMETHING</span>
              </span>
              <span className="order-good">
                <span className="order-hero-line">
                  GOOD<span>.</span>
                </span>
              </span>
            </h1>
            <p className="order-hero-copy">
              Choose a cup, add something from the oven, and we&apos;ll prepare
              your order for a calm pickup.
            </p>
          </div>
          <div className="order-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000"
              alt="Freshly brewed coffee ready at the TopCoffe bar"
            />
            <div>
              <span>BREWED TO ORDER</span>
              <span>JAKARTA, ID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderHero;
