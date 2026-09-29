import { useMemo, useState } from "react";
import { menuProducts } from "../../../data/menuCatalog.js";

function useOrderCart() {
  const [cart, setCart] = useState({});

  const items = useMemo(
    () =>
      menuProducts
        .filter((product) => cart[product.id])
        .map((product) => ({ ...product, quantity: cart[product.id] })),
    [cart],
  );
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  function addItem(productId) {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }));
  }

  function decrementItem(productId) {
    setCart((current) => {
      const nextQuantity = (current[productId] ?? 0) - 1;
      if (nextQuantity <= 0) {
        const nextCart = { ...current };
        delete nextCart[productId];
        return nextCart;
      }
      return { ...current, [productId]: nextQuantity };
    });
  }

  function removeItem(productId) {
    setCart((current) => {
      const nextCart = { ...current };
      delete nextCart[productId];
      return nextCart;
    });
  }

  return { items, subtotal, addItem, decrementItem, removeItem };
}

export default useOrderCart;
