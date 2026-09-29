import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuProducts, orderCategories } from "../../../data/menuCatalog.js";
import QuantityControl from "./QuantityControl.jsx";

gsap.registerPlugin(ScrollTrigger);

function formatCompactPrice(amount) {
  return `${Math.round(amount / 1000)}K`;
}

function OrderMenu({
  category,
  onCategoryChange,
  cartItems,
  onAdd,
  onDecrement,
}) {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);
  const [previewProduct, setPreviewProduct] = useState(null);
  const visibleProducts = menuProducts.filter(
    (product) => category === "all" || product.category === category,
  );
  const quantities = Object.fromEntries(
    cartItems.map((item) => [item.id, item.quantity]),
  );

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview || !window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }
    xTo.current = gsap.quickTo(preview, "x", {
      duration: 0.22,
      ease: "power2.out",
    });
    yTo.current = gsap.quickTo(preview, "y", {
      duration: 0.22,
      ease: "power2.out",
    });
    const followPointer = (event) => {
      xTo.current(event.clientX + 24);
      yTo.current(event.clientY - 148);
    };
    window.addEventListener("mousemove", followPointer, { passive: true });
    return () => {
      window.removeEventListener("mousemove", followPointer);
      gsap.killTweensOf(preview);
    };
  }, []);

  useEffect(() => {
    if (!previewRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(previewRef.current, {
        autoAlpha: previewProduct ? 1 : 0,
        scale: 1,
      });
      return;
    }
    gsap.to(previewRef.current, {
      autoAlpha: previewProduct ? 1 : 0,
      scale: previewProduct ? 1 : 0.86,
      duration: 0.22,
      ease: "power2.out",
    });
  }, [previewProduct]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      gsap.fromTo(
        ".order-product-row",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.045,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".order-product-list",
            start: "top 88%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => context.revert();
  }, [category]);

  function showPreview(product) {
    if (window.matchMedia("(pointer: fine)").matches) {
      setPreviewProduct(product);
    }
  }

  return (
    <section className="order-menu" id="order-menu" ref={sectionRef}>
      <div className="order-menu-heading">
        <div>
          <span className="section-kicker">01 // THE MENU</span>
          <h2>Choose Your Pour</h2>
        </div>
        <p>Thoughtfully made, one order at a time.</p>
      </div>
      <nav className="order-categories" aria-label="Menu categories">
        {orderCategories.map((item) => (
          <button
            type="button"
            key={item.id}
            aria-pressed={category === item.id}
            className={category === item.id ? "is-active" : ""}
            onClick={() => {
              onCategoryChange(item.id);
              setPreviewProduct(null);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div
        className="order-product-list"
        onMouseLeave={() => setPreviewProduct(null)}
      >
        {visibleProducts.map((product, index) => {
          const quantity = quantities[product.id] ?? 0;
          return (
            <article
              className="order-product-row"
              key={product.id}
              onMouseEnter={() => showPreview(product)}
              onFocusCapture={() => showPreview(product)}
              data-order-product={product.id}
            >
              <span className="order-product-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="order-product-description">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>{product.detail}</span>
              </div>
              <span className="order-product-price">
                {formatCompactPrice(product.price)}
              </span>
              <div className="order-product-action">
                {quantity ? (
                  <QuantityControl
                    quantity={quantity}
                    label={product.name}
                    onDecrement={() => onDecrement(product.id)}
                    onIncrement={() => onAdd(product)}
                  />
                ) : (
                  <button
                    className="order-add-button"
                    type="button"
                    aria-label={`Add ${product.name} to your order`}
                    onClick={() => onAdd(product)}
                  >
                    ADD <span aria-hidden="true">+</span>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="order-image-preview" ref={previewRef} aria-hidden="true">
        <img src={previewProduct?.image || undefined} alt="" />
      </div>
    </section>
  );
}

export default OrderMenu;
