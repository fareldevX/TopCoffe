function Footer() {
  return (
    <footer className="coffee-footer">
      <div className="content-width footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>
              TOPCOFFE<span>.</span>
            </h2>
            <p>Good coffee. Good company. No unnecessary noise.</p>
          </div>
          <div className="footer-link-groups">
            <div>
              <strong>Social</strong>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
            <div>
              <strong>Navigation</strong>
              <a href="#menu">Menu</a>
              <a href="#story">Story</a>
              <a href="#visit">Visit</a>
            </div>
          </div>
        </div>
        <div className="footer-watermark" aria-hidden="true">
          TOPCOFFE
        </div>
        <div className="footer-legal">
          <span>© 2026 TopCoffe Specialty Roastery. All rights reserved.</span>
          <span>Minimalist Modern Coffee Website</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
