function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-xl">
          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <div className="font-headline-sm text-headline-sm tracking-wider uppercase text-primary">
              TOPCOFFE
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
              Specialty coffee for everyday moments. Rooted in architectural
              precision, tactile warmth, and dedicated roast craft.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
              Navigation
            </div>
            <nav className="flex flex-col gap-space-xs">
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors"
                href="#menu"
              >
                Menu
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors"
                href="#story"
              >
                About
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors"
                href="#visit"
              >
                Visit
              </a>
            </nav>
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline mt-space-md">
              Connect
            </div>
            <div className="flex items-center gap-space-md">
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors"
                href="#instagram"
              >
                Instagram
              </a>
              <span className="text-outline-variant">/</span>
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors"
                href="#whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
              Location
            </div>
            <p className="font-body-sm text-body-sm text-on-surface">
              Jl. Example No. 123, Pemalang, Indonesia
            </p>
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline mt-space-sm">
              Opening Hours
            </div>
            <div className="font-body-sm text-body-sm text-on-surface flex flex-col gap-space-xs">
              <div className="flex justify-between max-w-sm">
                <span>Mon — Fri</span>
                <span className="text-on-surface-variant font-medium">
                  08:00 — 22:00
                </span>
              </div>
              <div className="flex justify-between max-w-sm">
                <span>Sat — Sun</span>
                <span className="text-on-surface-variant font-medium">
                  08:00 — 23:00
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-space-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-on-surface-variant">
          <div>© 2026 TopCoffe. All rights reserved.</div>
          <div className="uppercase tracking-widest text-outline">
            Specialty Coffee Roasters &amp; Brew Bar
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
