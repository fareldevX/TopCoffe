import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import SiteLayout from "../../layouts/SiteLayout/SiteLayout.jsx";
import { menuCategories } from "../../features/menu/constants/menuItems.js";

const orderItems = Object.values(menuCategories)
  .flat()
  .map(([name, price, description]) => ({
    name,
    price,
    description,
    amount: Number(price.replace(/[^0-9]/g, "")),
  }));

function formatPrice(amount) {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

function Order() {
  const [selectedItem, setSelectedItem] = useState(orderItems[0].name);
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState("Pick up at the bar");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedProduct = orderItems.find((item) => item.name === selectedItem);
  const total = useMemo(
    () => selectedProduct.amount * quantity,
    [quantity, selectedProduct],
  );

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <SiteLayout>
      <div className="min-h-screen bg-surface pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-margin-mobile lg:px-margin">
          <div className="mb-12 max-w-2xl">
            <Link
              to="/"
              className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary transition-colors hover:text-primary"
            >
              ← Back to TopCoffe
            </Link>
            <p className="mt-8 font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
              ORDER A SLOW MOMENT
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Made fresh,
              <br />
              ready when you are.
            </h1>
            <p className="mt-5 max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Choose your drink, tell us when you are coming, and we will have
              your order ready at the bar.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-3xl border border-outline-variant bg-surface-container-low p-8 sm:p-12">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
                ORDER RECEIVED
              </span>
              <h2 className="mt-3 font-headline-lg text-headline-lg uppercase text-primary">
                See you at the bar.
              </h2>
              <p className="mt-4 max-w-lg font-body-md text-body-md leading-relaxed text-on-surface-variant">
                Your {quantity} × {selectedProduct.name.toLowerCase()} order is
                noted for {orderType.toLowerCase()}. Please show this screen to
                our barista when you arrive.
              </p>
              <button
                type="button"
                className="mt-8 rounded-full bg-primary px-5 py-3 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Place another order
              </button>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 gap-gutter lg:grid-cols-12"
              onSubmit={handleSubmit}
            >
              <div className="space-y-8 border border-outline-variant bg-surface-container-low p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-outline"
                    htmlFor="order-item"
                  >
                    Choose your order
                  </label>
                  <select
                    id="order-item"
                    value={selectedItem}
                    onChange={(event) => setSelectedItem(event.target.value)}
                    className="mt-3 w-full border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-primary outline-none transition-colors focus:border-secondary"
                  >
                    {orderItems.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name} — {item.price}
                      </option>
                    ))}
                  </select>
                  <p className="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-outline"
                    htmlFor="quantity"
                  >
                    Quantity
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(event) =>
                        setQuantity(Number(event.target.value))
                      }
                      className="mt-3 block w-full border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-primary outline-none focus:border-secondary"
                    />
                  </label>
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-outline"
                    htmlFor="order-type"
                  >
                    Fulfilment
                    <select
                      id="order-type"
                      value={orderType}
                      onChange={(event) => setOrderType(event.target.value)}
                      className="mt-3 block w-full border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md normal-case tracking-normal text-primary outline-none focus:border-secondary"
                    >
                      <option>Pick up at the bar</option>
                      <option>Dine in</option>
                    </select>
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-outline"
                    htmlFor="customer-name"
                  >
                    Your name
                    <input
                      id="customer-name"
                      required
                      placeholder="Name for the order"
                      className="mt-3 block w-full border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md normal-case tracking-normal text-primary outline-none placeholder:text-outline focus:border-secondary"
                    />
                  </label>
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-outline"
                    htmlFor="customer-phone"
                  >
                    WhatsApp number
                    <input
                      id="customer-phone"
                      required
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      className="mt-3 block w-full border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md normal-case tracking-normal text-primary outline-none placeholder:text-outline focus:border-secondary"
                    />
                  </label>
                </div>

                <label
                  className="block font-label-sm text-label-sm uppercase tracking-widest text-outline"
                  htmlFor="order-notes"
                >
                  Notes{" "}
                  <span className="normal-case tracking-normal text-on-surface-variant">
                    (optional)
                  </span>
                  <textarea
                    id="order-notes"
                    rows="3"
                    placeholder="Less ice, oat milk, or anything else we should know"
                    className="mt-3 block w-full resize-none border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md normal-case tracking-normal text-primary outline-none placeholder:text-outline focus:border-secondary"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-5 py-3.5 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-colors hover:bg-secondary sm:w-auto"
                >
                  Confirm order{" "}
                  <span aria-hidden="true" className="ml-1">
                    ↗
                  </span>
                </button>
              </div>

              <aside className="h-fit border border-outline-variant bg-surface p-6 sm:p-8 lg:col-span-5 lg:sticky lg:top-28">
                <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
                  Your order
                </p>
                <div className="mt-6 flex items-start justify-between gap-4 border-b border-outline-variant pb-6">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm uppercase text-primary">
                      {selectedProduct.name}
                    </h2>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                      {quantity} × {selectedProduct.price}
                    </p>
                  </div>
                  <span className="font-headline-md text-headline-md font-semibold text-primary">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-6 font-body-md text-body-md text-on-surface-variant">
                  <span>Estimated total</span>
                  <strong className="font-headline-md text-headline-md text-primary">
                    {formatPrice(total)}
                  </strong>
                </div>
                <p className="mt-8 border-t border-outline-variant pt-6 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  Open daily from 08:00 at Jl. Example No. 123, Pemalang.
                </p>
              </aside>
            </form>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}

export default Order;
