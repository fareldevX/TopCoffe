import { Link } from "react-router-dom";

import {
  menuCategories,
  menuCategoryLabels,
  menuTabs,
} from "../constants/menuItems.js";
import useMenuCategory from "../hooks/useMenuCategory.js";
import MenuItem from "./MenuItem.jsx";

function MenuPreview() {
  const { category, setCategory } = useMenuCategory();
  const categoryKey =
    category === "NON-COFFEE" ? "nonCoffee" : category.toLowerCase();
  const selectedItems = menuCategories[categoryKey];

  return (
    <section
      id="menu"
      className="w-full bg-surface-container-low py-20 lg:py-28 border-b border-outline-variant"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold">
            PREVIEW MENU
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-[42px] tracking-tight uppercase text-primary mt-2">
            THOUGHTFULLY CURATED SIPS &amp; BITES
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Prepared fresh with seasonal ingredients and disciplined craft.
          </p>
          <div className="flex justify-center items-center gap-6 sm:gap-10 mt-8 border-b border-outline-variant pb-3">
            {menuTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setCategory(tab)}
                className={`font-label-md text-label-md uppercase tracking-widest pb-3 -mb-[14px] ${category === tab ? "text-primary border-b-2 border-secondary font-semibold" : "text-on-surface-variant hover:text-primary transition-colors"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-surface p-8 sm:p-12 lg:p-16 border border-outline-variant max-w-5xl mx-auto shadow-sm">
          <div className="max-w-3xl">
            <div className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-bold mb-6 pb-2 border-b border-outline-variant">
              {menuCategoryLabels[categoryKey]}
            </div>
            <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
              {selectedItems.map(([name, price, description]) => (
                <MenuItem
                  key={name}
                  name={name}
                  price={price}
                  description={description}
                />
              ))}
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Oat milk substitute available (+Rp 6.000) • Decaf available upon
              request
            </span>
            <Link
              className="font-label-md text-label-md uppercase tracking-widest text-secondary hover:text-primary inline-flex items-center gap-2 font-semibold"
              to="/order"
            >
              VIEW FULL PRINTED MENU (PDF)
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuPreview;
