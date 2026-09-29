import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "../../../data/coffeeContent.js";

gsap.registerPlugin(ScrollTrigger);

function ProcessSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".process-card", {
        scrollTrigger: { trigger: ".process-grid", start: "top 82%" },
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.14,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="content-width">
        <div className="process-heading">
          <span className="section-kicker">THE PROCESS</span>
          <h2>
            Slow Down.
            <br />
            Pay Attention.
            <br />
            Make Something Worth Sharing.
          </h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="section-kicker">STEP {step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
