function VisitSection() {
  return (
    <section id="visit" className="visit-section section-band">
      <div className="content-width visit-grid">
        <div className="visit-copy">
          <span className="section-kicker">05 // VISIT US</span>
          <h2>Come By.</h2>
          <div className="visit-address">
            <span className="meta-label">Location</span>
            <p>
              Jl. Senopati No. 42, Kebayoran Baru
              <br />
              Jakarta Selatan, 12190
            </p>
          </div>
          <div className="hours-grid">
            <div>
              <span className="meta-label">Mon — Fri</span>
              <strong>07:00 — 22:00</strong>
            </div>
            <div>
              <span className="meta-label">Sat — Sun</span>
              <strong>08:00 — 23:00</strong>
            </div>
          </div>
          <a
            className="button-dark"
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Google Maps ↗
          </a>
        </div>
        <aside className="neighborhood-guide">
          <div>
            <span className="section-kicker">NEIGHBORHOOD GUIDE</span>
            <h3>Senopati Sanctuary</h3>
            <p>
              Valet parking available. High-speed Wi-Fi &amp; quiet power
              outlets in rear lounge.
            </p>
          </div>
          <div className="coordinates">
            <span>LAT: -6.2302° S</span>
            <span>LONG: 106.8080° E</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default VisitSection;
