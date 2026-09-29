import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let removeMouseMove = () => {};
    const context = gsap.context(() => {
      const titleLines = gsap.utils.toArray(".hero-title-line");
      const pattern = ".hero-pattern";
      const description = ".hero-description";
      const cta = ".hero-cta";
      const image = ".hero-image-frame";

      if (reducedMotion) {
        gsap.set([titleLines, description, cta, image, pattern], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(pattern, { opacity: 1, duration: 1.8 })
        .from(
          ".hero-tag",
          { yPercent: 100, opacity: 0, duration: 0.8 },
          "-=1.5",
        )
        .to(
          titleLines,
          { y: "0%", duration: 1.1, stagger: 0.14, ease: "expo.out" },
          "-=1.2",
        )
        .fromTo(
          description,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.55",
        )
        .fromTo(
          cta,
          { x: -16, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.55",
        )
        .fromTo(
          image,
          { scale: 0.95, rotation: -2, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 1.2 },
          "-=0.9",
        )
        .fromTo(
          ".hero-image",
          { scale: 1.12 },
          { scale: 1, duration: 1.8 },
          "-=1.1",
        );

      const finePointer = window.matchMedia("(pointer: fine)").matches;
      if (finePointer) {
        const xTo = gsap.quickTo(section.querySelector(".hero-pattern"), "x", {
          duration: 1.5,
          ease: "power3",
        });
        const yTo = gsap.quickTo(section.querySelector(".hero-pattern"), "y", {
          duration: 1.5,
          ease: "power3",
        });
        const movePattern = (event) => {
          xTo((event.clientX - window.innerWidth / 2) * -0.025);
          yTo((event.clientY - window.innerHeight / 2) * -0.025);
        };
        window.addEventListener("mousemove", movePattern, { passive: true });
        removeMouseMove = () =>
          window.removeEventListener("mousemove", movePattern);
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(pattern, { y: "20vh", rotation: 2 }, 0)
        .to(titleLines, { y: "-30px", opacity: 0.4, stagger: 0.05 }, 0)
        .to(image, { y: "10vh", scale: 1.05 }, 0);
    }, section);

    return () => {
      removeMouseMove();
      context.revert();
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-pattern" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="currentColor" strokeWidth="1.5" opacity=".04">
            <path d="M-100 200 C 300 100, 600 600, 1540 250" />
            <path d="M-100 230 C 300 130, 600 630, 1540 280" />
            <path d="M-100 260 C 300 160, 600 660, 1540 310" />
            <path d="M-100 290 C 300 190, 600 690, 1540 340" />
            <path d="M-100 320 C 300 220, 600 720, 1540 370" />
            <path d="M-100 350 C 300 250, 600 750, 1540 400" />
          </g>
          <g stroke="currentColor" strokeWidth="1" opacity=".06">
            <path d="M-100 700 C 400 900, 900 100, 1540 500" />
            <path d="M-100 730 C 400 930, 900 130, 1540 530" />
            <path d="M-100 760 C 400 960, 900 160, 1540 560" />
            <path d="M-100 790 C 400 990, 900 190, 1540 590" />
          </g>
        </svg>
      </div>
      <div className="content-width hero-grid">
        <div className="hero-vertical">
          <span>EST. 2026</span>
          <span>SPECIALTY COFFEE</span>
        </div>
        <div className="hero-copy">
          <div className="hero-tag-wrap">
            <span className="hero-tag">01 / Roastery &amp; Espresso Bar</span>
          </div>
          <h1 className="hero-title">
            <span>
              <span className="hero-title-line">GOOD</span>
            </span>
            <span>
              <span className="hero-title-line">
                COFFEE<span className="accent">.</span>
              </span>
            </span>
            <span className="hero-without">
              <span className="hero-title-line">WITHOUT</span>
            </span>
            <span>
              <span className="hero-title-line">THE NOISE.</span>
            </span>
          </h1>
          <div className="hero-intro">
            <p className="hero-description">
              Thoughtfully roasted coffee, prepared with calm intention. Crafted
              for slow mornings.
            </p>
            <a className="hero-cta text-link" href="#menu">
              <span className="link-rule" />
              Explore Menu
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <div className="hero-image-crop">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
                alt="Handpouring filter coffee at TopCoffe"
              />
            </div>
            <div className="hero-image-caption">
              <span>Jakarta, ID</span>
              <span>Single Origin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
