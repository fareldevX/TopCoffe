function CoffeeShowcase() {
  return (
    <section className="showcase-section">
      <div className="content-width">
        <div className="showcase-frame">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1600"
            alt="Freshly roasted specialty coffee beans at TopCoffe"
          />
          <div className="showcase-copy">
            <span className="section-kicker">SMALL BATCH ROASTING</span>
            <h2>Carefully Roasted In Jakarta Every Tuesday &amp; Friday.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoffeeShowcase;
