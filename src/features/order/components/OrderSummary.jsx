import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import QuantityControl from "./QuantityControl.jsx";

function formatCurrency(amount) {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

function OrderSummary({
  items,
  subtotal,
  onAdd,
  onDecrement,
  onRemove,
  customerName,
  onCustomerNameChange,
  customerPhone,
  onCustomerPhoneChange,
  orderType,
  onOrderTypeChange,
  notes,
  onNotesChange,
  onSubmit,
}) {
  const summaryRef = useRef(null);

  useLayoutEffect(() => {
    if (
      !items.length ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rows = summaryRef.current?.querySelectorAll(".order-summary-item");
    const newestRow = rows?.[rows.length - 1];
    if (!newestRow) return;
    gsap.fromTo(
      newestRow,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
    );
  }, [items]);

  return (
    <aside
      className="order-summary"
      ref={summaryRef}
      aria-labelledby="order-summary-title"
    >
      <div className="order-summary-heading">
        <div>
          <span className="section-kicker">02 // YOUR ORDER</span>
          <h2 id="order-summary-title">The Shortlist</h2>
        </div>
        <span
          className="order-item-count"
          aria-label={`${items.length} different items`}
        >
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      {items.length ? (
        <div className="order-summary-list">
          {items.map((item) => (
            <div className="order-summary-item" key={item.id}>
              <div className="order-summary-product">
                <strong>{item.name}</strong>
                <span>{item.description}</span>
                <button type="button" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </div>
              <div className="order-summary-controls">
                <QuantityControl
                  quantity={item.quantity}
                  label={item.name}
                  onDecrement={() => onDecrement(item.id)}
                  onIncrement={() => onAdd(item)}
                />
                <strong>{formatCurrency(item.price * item.quantity)}</strong>
              </div>
            </div>
          ))}
          <div className="order-total">
            <span>SUBTOTAL</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
        </div>
      ) : (
        <div className="order-empty-state">
          <p>
            YOUR ORDER
            <br />
            IS STILL EMPTY.
          </p>
          <span>Choose something worth drinking.</span>
          <a href="#order-menu">
            Explore menu <span aria-hidden="true">→</span>
          </a>
        </div>
      )}

      <form className="order-checkout-form" onSubmit={onSubmit}>
        <label htmlFor="order-customer-name">
          YOUR NAME
          <input
            id="order-customer-name"
            required
            autoComplete="name"
            value={customerName}
            onChange={(event) => onCustomerNameChange(event.target.value)}
            placeholder="Name for pickup"
          />
        </label>
        <label htmlFor="order-customer-phone">
          YOUR WHATSAPP NUMBER
          <input
            id="order-customer-phone"
            required
            type="tel"
            autoComplete="tel"
            value={customerPhone}
            onChange={(event) => onCustomerPhoneChange(event.target.value)}
            placeholder="08xxxxxxxxxx"
          />
        </label>
        <label htmlFor="order-fulfilment">
          COLLECTION
          <select
            id="order-fulfilment"
            value={orderType}
            onChange={(event) => onOrderTypeChange(event.target.value)}
          >
            <option>Pick up at the bar</option>
            <option>Dine in</option>
          </select>
        </label>
        <label htmlFor="order-notes">
          NOTES <span>(OPTIONAL)</span>
          <textarea
            id="order-notes"
            rows="2"
            value={notes}
            onChange={(event) => onNotesChange(event.target.value)}
            placeholder="Milk choice, less ice, or a note for the barista"
          />
        </label>
        <button
          className="order-whatsapp-button"
          type="submit"
          disabled={!items.length}
        >
          Order via WhatsApp <span aria-hidden="true">↗</span>
        </button>
        <p className="order-checkout-note">
          Pickup details will be confirmed by our barista.
        </p>
      </form>
    </aside>
  );
}

export default OrderSummary;
