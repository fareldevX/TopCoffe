import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function OrderToast({ product, onDismiss }) {
  const toastRef = useRef(null);

  useLayoutEffect(() => {
    if (
      !product ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    gsap.fromTo(
      toastRef.current,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    );
  }, [product]);

  useEffect(() => {
    if (!product) return undefined;
    const timeout = window.setTimeout(onDismiss, 2600);
    return () => window.clearTimeout(timeout);
  }, [product, onDismiss]);

  if (!product) return null;

  return (
    <div
      className="order-toast"
      ref={toastRef}
      role="status"
      aria-live="polite"
    >
      <span>ADDED TO ORDER</span>
      <strong>
        {product.name} · {Math.round(product.price / 1000)}K
      </strong>
    </div>
  );
}

export default OrderToast;
