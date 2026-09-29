import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { featuredCoffee } from "../../../data/menuCatalog.js";

function MenuSection({ onOpenMenu }) {
  const previewRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);
  const [previewImage, setPreviewImage] = useState("");

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview || !window.matchMedia("(pointer: fine)").matches)
      return undefined;
    xTo.current = gsap.quickTo(preview, "x", {
      duration: 0.2,
      ease: "power2.out",
    });
    yTo.current = gsap.quickTo(preview, "y", {
      duration: 0.2,
      ease: "power2.out",
    });
    const movePreview = (event) => {
      xTo.current(event.clientX + 20);
      yTo.current(event.clientY - 150);
    };
    window.addEventListener("mousemove", movePreview, { passive: true });
    return () => {
      window.removeEventListener("mousemove", movePreview);
      gsap.killTweensOf(preview);
    };
  }, []);

  useEffect(() => {
    if (!previewRef.current) return;
    gsap.to(previewRef.current, {
      autoAlpha: previewImage ? 1 : 0,
      scale: previewImage ? 1 : 0.8,
      duration: previewImage ? 0.25 : 0.2,
      ease: "power2.out",
    });
  }, [previewImage]);

  return (
    <section id="menu" className="menu-section">
      <div className="content-width">
        <div className="menu-heading">
          <div>
            <span className="section-kicker">02 // SELECTION</span>
            <h2>What We Pour</h2>
          </div>
          <p>Hover over items to preview. Prices in IDR thousands.</p>
        </div>
        <div className="coffee-list" onMouseLeave={() => setPreviewImage("")}>
          {featuredCoffee.map((item) => (
            <button
              className="coffee-list-item"
              key={item.id}
              type="button"
              onMouseEnter={() => setPreviewImage(item.image)}
              onFocus={() => setPreviewImage(item.image)}
              onBlur={() => setPreviewImage("")}
            >
              <span className="coffee-item-main">
                <span className="coffee-number">
                  {String(item.id).padStart(2, "0")}
                </span>
                <span className="coffee-name">{item.name}</span>
              </span>
              <span className="coffee-item-meta">
                <span className="coffee-description">{item.description}</span>
                <span className="coffee-price">{item.price}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="menu-action">
          <button className="full-menu-link" type="button" onClick={onOpenMenu}>
            View Full Drinks &amp; Food Menu <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="hover-image-preview" ref={previewRef} aria-hidden="true">
        <img src={previewImage || undefined} alt="" />
      </div>
    </section>
  );
}

export default MenuSection;
