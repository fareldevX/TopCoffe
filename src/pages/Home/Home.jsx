import SiteLayout from "../../layouts/SiteLayout/SiteLayout.jsx";
import { MenuPreview } from "../../features/menu/index.js";

function Home() {
  return (
    <SiteLayout>
      <div
        id="top"
        className="flex flex-col w-full selection:bg-secondary-container selection:text-on-secondary-fixed"
      >
        <Hero />
        <FeaturedCoffee />
        <Story />
        <MenuPreview />
        <Process />
        <Space />
        <Visit />
      </div>
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="w-full bg-surface pb-16 pt-32 lg:pb-24 lg:pt-40 border-b border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-headline-sm text-[11px] uppercase tracking-[0.25em] text-secondary font-semibold">
                EST. 2024 — URBAN SPECIALTY COFFEE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] leading-[1.04] tracking-tight text-primary uppercase font-bold">
              TOPCOFFE
              <br />
              SPECIALTY COFFEE
              <br />
              <span className="text-secondary font-medium">
                FOR SLOW MOMENTS.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mt-6 leading-relaxed">
              Thoughtfully sourced coffee, carefully crafted for everyday
              rituals. Architectural precision meets honest tactile hospitality
              in the heart of Pemalang.
            </p>
            <div className="flex flex-wrap items-center gap-space-md mt-8">
              <a
                className="h-[46px] px-8 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest inline-flex items-center justify-center rounded-sm hover:bg-secondary transition-colors duration-200"
                href="#menu"
              >
                EXPLORE MENU{" "}
                <span className="material-symbols-outlined text-[16px] ml-1.5">
                  arrow_forward
                </span>
              </a>
              <a
                className="h-[46px] px-6 text-primary font-label-md text-label-md uppercase tracking-widest inline-flex items-center justify-center border-b border-primary hover:text-secondary hover:border-secondary transition-colors duration-200"
                href="#visit"
              >
                VISIT US
              </a>
            </div>
            <div className="mt-12 pt-6 border-t border-outline-variant flex items-center gap-6 text-on-surface-variant font-body-sm text-body-sm">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  location_on
                </span>
                Jl. Example No. 123, Pemalang
              </span>
              <span className="text-outline-variant">•</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  schedule
                </span>
                Open Daily from 08:00
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <div className="relative group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container-high border border-outline-variant">
                <img
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  alt="Modern minimalist specialty coffee shop interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbF9R-6nJpBw8yNZ38hcO1yIX-OdWsY2UNZEyKD8nzodPRUQm15BlINLKxiEnDm669jdNbCtVscQ2Xo8SEBKUzhvHDeu4hvUl0orhSfDrGJH3vL3EkbkTD-LlQzvq0dnjxj5K4xAlLmf1CqP_bFfD1VmH-H6GXdTyIzulZZah9XO5Az1RzeyDPNQolV79vZImra0_5U8z4sNQD65XorL1_5tH6ptzCI417NPlsJC9qWWGRT9TtHM6eqw"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent flex justify-between items-end">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary">
                    The Bar &amp; Brew Counter
                  </span>
                  <span className="font-label-sm text-label-sm text-on-primary/80 uppercase">
                    Mon — Sun
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCoffee() {
  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-14">
          <div className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold">
            OUR COFFEE
          </div>
          <h2 className="font-headline-lg text-headline-lg lg:text-[44px] lg:leading-[48px] tracking-tight uppercase text-primary mt-2">
            COFFEE WORTH
            <br />
            SLOWING DOWN FOR.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl">
          <div className="lg:col-span-7 bg-surface p-6 sm:p-8 border border-outline-variant">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface-container-high mb-8">
              <img
                className="w-full h-full object-cover"
                alt="Espresso extraction into a ceramic cup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Mm6XICT7-_isEM7PEDR1RI5yJbQyljHMp7N_8iyklHaFHWLFhesh0lRlN_z7zV4NPOgLcgYtb_8QnmOy_2811qHaFB46WcSe6RkCLqu3YvhRApzcpMIwjhfQG3hyKKhIdazX_X9so1PcoLzgesSTMpqDJxNvnB3BXRsjMlKr9luH-N3FT2HSqSkMEE4Erldv-Skc3Wx3fLv_3yxrnjZNu7A7xXCKcC-qnkW-CivqukSMuuxvBeGK3w"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline">
              <div className="sm:col-span-7">
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Single Origin Sumatra Kerinci
                </div>
                <h3 className="font-headline-lg text-3xl font-bold uppercase tracking-tight text-primary mt-1">
                  ESPRESSO
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Candied walnut, dark cocoa, Meyer lemon brightness, and a
                  dense velvety crema. Roasted lightly to preserve origin
                  nuance.
                </p>
              </div>
              <div className="sm:col-span-5 sm:text-right">
                <div className="font-headline-md text-headline-md font-bold text-primary">
                  Rp 18.000
                </div>
                <span className="inline-block mt-3 px-3 py-1 bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider border border-outline-variant">
                  Washed Process
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface p-6 sm:p-8 border border-outline-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              CRAFTED DAILY
            </span>
            <h4 className="font-headline-sm text-headline-sm uppercase text-primary mt-1 mb-6">
              BARISTA SELECTION
            </h4>
            {[
              [
                "CAPPUCCINO",
                "Rp 25.000",
                "Espresso balanced with steamed full-cream milk and a dense, silky microfoam cushion.",
              ],
              [
                "POUR OVER (V60)",
                "Rp 28.000",
                "Rotating seasonal micro-lots, brewed with strict water mineral balance for crisp clarity.",
              ],
              [
                "SIGNATURE COLD BREW",
                "Rp 26.000",
                "Slow cold extraction steeped 18 hours. Exceptionally smooth, sweet notes of plum and cacao.",
              ],
            ].map(([name, price, description]) => (
              <div key={name} className="py-5 border-t border-outline-variant">
                <div className="flex justify-between items-baseline">
                  <span className="font-headline-sm text-body-lg font-bold text-primary">
                    {name}
                  </span>
                  <span className="font-body-md font-bold text-primary">
                    {price}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section
      id="story"
      className="w-full bg-surface py-20 lg:py-32 border-b border-outline-variant"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
          <div className="lg:col-span-6">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold mb-4">
              OUR STORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] lg:leading-[58px] tracking-tight uppercase text-primary font-bold">
              GOOD COFFEE DOESN'T NEED TO BE COMPLICATED.
            </h2>
            <div className="w-16 h-0.5 bg-secondary my-8" />
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <p>
                TopCoffe was created around a simple idea: great coffee should
                feel intentional without feeling complicated.
              </p>
              <p>
                From carefully selected beans to the final cup, every detail is
                considered to create a coffee experience that feels natural,
                honest, and worth coming back to. No pretension, just deliberate
                roast profiles, precise water chemistry, and genuine
                hospitality.
              </p>
              <p className="font-medium text-on-surface">
                Designed with raw concrete, natural timber, and brushed steel —
                a serene neighborhood sanctuary in Pemalang.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="aspect-[4/5] max-w-lg mx-auto overflow-hidden bg-surface-container-high border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                alt="Barista pouring latte art"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmD5qBevXL0W6WKk0X8eyoeKbWK5k1ixxqr1oSUN-O52xLQ7OclBWALmJKa6m4BYoISbUnC7jHxA8duPhL1iVt_OPRw_F9iW-2jO7tjRdWuUlPrutbPFdun9epaidLUoTcv3IBTc0gSfQXBvaw_g3ZaooJrgKMO1VrAPvrqp7D-wbxmLsiE7dzwyZNdgI0n8deFfS4A8PfnpBqvpNtPV-TRDNZbjo0n6yxdhlnWpFbLdx5vPdzsqiJ2A"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <span>01 / The Pour</span>
              <span>Ceramic Stoneware &amp; Micro-textured Milk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold">
            THE PHILOSOPHY
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-[44px] tracking-tight uppercase text-primary mt-2">
            FROM SEED TO SIP
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            [
              "01",
              "SELECT",
              "Thoughtfully sourced beans. Directly traded with sustainable micro-lot farmers across Indonesia and Ethiopia, prioritizing high-altitude Arabica lots with clear provenance.",
              "Ethical Direct Trade",
            ],
            [
              "02",
              "BREW",
              "Carefully prepared by our baristas. Dialed in twice daily for precise TDS extraction, 93°C controlled water temperature, and silky micro-textured milk.",
              "Analytical Consistency",
            ],
            [
              "03",
              "ENJOY",
              "A cup made for the moment. Served in custom unglazed ceramic stoneware crafted locally to preserve aromatics, tactile warmth, and peaceful pacing.",
              "Intentional Pause",
            ],
          ].map(([number, title, text, footer]) => (
            <div
              key={number}
              className="p-8 bg-surface-container-low border border-outline-variant flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-4xl font-bold text-secondary mb-6">
                  {number}
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-3">
                  {title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {text}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant font-label-sm text-label-sm uppercase tracking-widest text-outline">
                {footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Space() {
  return (
    <section className="w-full bg-surface-container py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-14">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold">
            THE SPACE
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-[44px] tracking-tight uppercase text-primary mt-2">
            STAY FOR THE COFFEE.
            <br />
            STAY FOR THE MOMENT.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-6">
            A calm architectural pause in the middle of the city. Concrete, warm
            wood, brushed metal, and morning light.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 overflow-hidden bg-surface border border-outline-variant">
            <div className="aspect-[16/10] w-full">
              <img
                className="w-full h-full object-cover"
                alt="Modern coffee bar interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl1Sl2FuXYMVCchqjOi-pmRZS4XWAcULF-E57bV--bM_zM_FtsUjIUIeY_Z_8rTj5pwb-HipjY2Q1Q5UmTYm11LCPs9u05IyOoBFI9p1D305wZzfQ8w345NtDROh5S15Q49k6daGjCnm2_i__wqqVySS304GUy8guVNT_25wejCfUyMT5hVf53sKlQ6SK6fRqQu8d5C3aiyEm981CIVpt2Dd8EZ8B6ofmMC68H21WaDC7QdhYvj3JvaA"
              />
            </div>
            <div className="p-6 flex justify-between items-center border-t border-outline-variant">
              <span className="font-headline-sm text-body-lg uppercase font-bold text-primary">
                Main Espresso Bar &amp; Communal Bench
              </span>
              <span className="font-label-sm text-label-sm uppercase text-secondary">
                Acoustic Balance
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface border border-outline-variant overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Espresso detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB73rqabCQ-W_cD06Lue9_BqA5ERkl5K32Kj3letnPdJFCzib2tYrtr-1G-vdCx3BNEiE2-rcxAKNnR5R_dWCJ_ygCMpUKoVOv9ENKjt0an100dpEZchiaQIuLtMmk03LqTJJtJQQrfcy6c2E_ivF3qe1yLxst4zjLiOKmpq83Frfwl8v_ebg-2u7Ce4ry_61NLyQWaqtgsyhHajl6oAzmxr9ZN5jvTNEbAULvM_s1bixNvBwACBN1UNQ"
                />
              </div>
              <div className="p-4">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Detail 01
                </span>
                <div className="font-headline-sm text-body-md font-semibold text-primary">
                  Crema &amp; Density
                </div>
              </div>
            </div>
            <div className="p-6 bg-surface border border-outline-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                volume_down
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                Curated ambient playlists, communal oak tables, and high-speed
                fiber for focused work.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section
      id="visit"
      className="w-full bg-surface-container-low py-20 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-14">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold">
            VISIT TOPCOFFE
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-[44px] tracking-tight uppercase text-primary mt-2">
            YOUR NEXT COFFEE STARTS HERE.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl">
          <div className="lg:col-span-7 bg-surface p-8 sm:p-12 border border-outline-variant">
            <div className="space-y-8">
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-2">
                  Location &amp; Address
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-bold">
                  Jl. Example No. 123, Pemalang
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Central Java 52319, Indonesia • Near Alun-Alun Pemalang,
                  opposite the quiet urban park.
                </p>
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-2">
                  Opening Hours
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low border border-outline-variant">
                    <div className="font-headline-sm text-body-md font-semibold text-primary">
                      Monday — Friday
                    </div>
                    <div className="font-body-md text-body-md text-secondary font-medium mt-1">
                      08:00 — 22:00
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                      Last coffee order 21:30
                    </div>
                  </div>
                  <div className="p-4 bg-surface-container-low border border-outline-variant">
                    <div className="font-headline-sm text-body-md font-semibold text-primary">
                      Saturday — Sunday
                    </div>
                    <div className="font-body-md text-body-md text-secondary font-medium mt-1">
                      08:00 — 23:00
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                      Last coffee order 22:30
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-3">
                  Shop Amenities
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "High-Speed Wi-Fi",
                    "Power at Every Seat",
                    "Indoor A/C Lounge",
                    "Outdoor Smoking Patio",
                    "Pet Friendly Patio",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider border border-outline-variant"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-outline-variant flex flex-wrap items-center gap-4">
              <a
                className="h-[46px] px-8 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest inline-flex items-center justify-center rounded-sm hover:bg-secondary transition-colors duration-200"
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET DIRECTIONS{" "}
                <span className="material-symbols-outlined text-[16px] ml-1.5">
                  directions
                </span>
              </a>
              <a
                className="h-[46px] px-6 text-primary border border-primary font-label-md text-label-md uppercase tracking-widest inline-flex items-center justify-center rounded-sm hover:bg-surface-container transition-colors duration-200"
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP INQUIRY
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface border border-outline-variant flex flex-col overflow-hidden">
            <div
              className="w-full min-h-[300px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuD3_HeVFM-5DgvNj-7bwj_l_Y0YSM8EP5r4ad0JlUyhvqZ8M3_8GbCEuwFtRDNwSg8eJtze2AouKE8u4N5JiHisvasSMLfE-mePCJ_2G8ogFd4EvH3ZFiTyxYLMcalUawmWEf0-Ld7fdl230jyW5rUoNzp0KycqufXkVrbzJbQMOlqQ7UrS26xS-ja_n6gdc8PuS16Y5DGGZsMPn9UJotWWTICvafOoAjIZNJh1rBFAu4qd-4W9anBn6g)",
              }}
            />
            <div className="p-6 bg-surface-container border-t border-outline-variant">
              <div className="font-headline-sm text-body-md font-bold text-primary">
                Alun-Alun Pemalang District
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                5 min walk from central terminal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
