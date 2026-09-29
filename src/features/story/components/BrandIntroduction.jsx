import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BrandIntroduction() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".reveal-text", {
        scrollTrigger: { trigger: ".reveal-text", start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".reveal-fade", {
        scrollTrigger: { trigger: ".reveal-fade", start: "top 90%" },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section className="brand-section section-band" ref={sectionRef}>
      <div className="content-width brand-grid">
        <div className="section-kicker">01 // PHILOSOPHY</div>
        <div className="brand-content">
          <h2 className="reveal-text">
            We believe coffee doesn’t need to be complicated, loud, or hurried.
          </h2>
          <div className="brand-paragraphs">
            <p className="reveal-fade">
              Every bean we source is chosen for its unique character. We roast
              in small batches in Jakarta, balancing sweetness, clarity, and
              texture without masking the bean&apos;s true origin.
            </p>
            <p className="reveal-fade">
              Our space is designed as an architectural sanctuary from the
              city—a place where time slows down, taste takes priority, and
              conversations unfold naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandIntroduction;
