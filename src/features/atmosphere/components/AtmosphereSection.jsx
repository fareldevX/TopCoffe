import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { atmosphereGallery } from "../../../data/coffeeContent.js";

gsap.registerPlugin(ScrollTrigger);

function AtmosphereSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".gallery-item", {
        scrollTrigger: { trigger: ".gallery-grid", start: "top 82%" },
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section id="atmosphere" className="atmosphere-section" ref={sectionRef}>
      <div className="content-width">
        <div className="atmosphere-heading">
          <span className="section-kicker">04 // ATMOSPHERE</span>
          <h2>Morning. Afternoon. Slow Evenings.</h2>
        </div>
        <div className="gallery-grid">
          {atmosphereGallery.map((item) => (
            <figure className="gallery-item" key={item.time}>
              <div className="gallery-image">
                <img src={item.image} alt={item.alt} />
              </div>
              <figcaption>
                <span>{item.time}</span>
                <span>{item.mood}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AtmosphereSection;
