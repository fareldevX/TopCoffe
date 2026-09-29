function OrderMeta() {
  return (
    <section className="order-meta" aria-label="Store information">
      <div className="content-width order-meta-grid">
        <div>
          <span>LOCATION</span>
          <strong>JAKARTA, ID</strong>
        </div>
        <div>
          <span>STATUS</span>
          <strong>
            <i aria-hidden="true" />
            OPEN TODAY
          </strong>
        </div>
        <div>
          <span>HOURS</span>
          <strong>07:00 — 22:00</strong>
        </div>
        <div>
          <span>COLLECTION</span>
          <strong>PICKUP AVAILABLE</strong>
        </div>
      </div>
    </section>
  );
}

export default OrderMeta;
