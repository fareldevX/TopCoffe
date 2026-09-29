function QuantityControl({ quantity, onDecrement, onIncrement, label }) {
  return (
    <div className="quantity-control" aria-label={`${label} quantity`}>
      <button
        type="button"
        aria-label={`Decrease ${label} quantity`}
        onClick={onDecrement}
      >
        −
      </button>
      <output aria-live="polite">{quantity}</output>
      <button
        type="button"
        aria-label={`Increase ${label} quantity`}
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
