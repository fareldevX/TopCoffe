import { useCallback, useState } from "react";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
import { ORDER_WHATSAPP_NUMBER } from "../../data/menuCatalog.js";
import OrderHero from "../../features/order/components/OrderHero.jsx";
import OrderMeta from "../../features/order/components/OrderMeta.jsx";
import OrderMenu from "../../features/order/components/OrderMenu.jsx";
import OrderSummary from "../../features/order/components/OrderSummary.jsx";
import OrderToast from "../../features/order/components/OrderToast.jsx";
import useOrderCart from "../../features/order/hooks/useOrderCart.js";

function Order() {
  const [category, setCategory] = useState("all");
  const [addedProduct, setAddedProduct] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState("Pick up at the bar");
  const [notes, setNotes] = useState("");
  const { items, subtotal, addItem, decrementItem, removeItem } =
    useOrderCart();

  function handleAdd(product) {
    addItem(product.id);
    setAddedProduct(product);
  }

  const dismissToast = useCallback(() => setAddedProduct(null), []);

  function handleCheckout(event) {
    event.preventDefault();
    if (!items.length) return;

    const message = [
      "Hello TopCoffe, I would like to place an order.",
      `Name: ${customerName}`,
      `WhatsApp: ${customerPhone}`,
      `Fulfilment: ${orderType}`,
      "",
      ...items.map(
        (item) =>
          `${item.quantity} × ${item.name} — Rp ${(item.price * item.quantity).toLocaleString("id-ID")}`,
      ),
      `Subtotal: Rp ${subtotal.toLocaleString("id-ID")}`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="coffee-site order-page" id="top">
      <Navbar />
      <main className="order-main">
        <OrderHero />
        <OrderMeta />
        <div className="content-width">
          <div className="order-workspace">
            <OrderMenu
              category={category}
              onCategoryChange={setCategory}
              cartItems={items}
              onAdd={handleAdd}
              onDecrement={decrementItem}
            />
            <OrderSummary
              items={items}
              subtotal={subtotal}
              onAdd={handleAdd}
              onDecrement={decrementItem}
              onRemove={removeItem}
              customerName={customerName}
              onCustomerNameChange={setCustomerName}
              customerPhone={customerPhone}
              onCustomerPhoneChange={setCustomerPhone}
              orderType={orderType}
              onOrderTypeChange={setOrderType}
              notes={notes}
              onNotesChange={setNotes}
              onSubmit={handleCheckout}
            />
          </div>
        </div>
      </main>
      <Footer />
      <OrderToast product={addedProduct} onDismiss={dismissToast} />
    </div>
  );
}

export default Order;
