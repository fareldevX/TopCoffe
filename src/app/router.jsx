import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const module = await import("../pages/Home/Home.jsx");
      return { Component: module.default };
    },
  },
  {
    path: "/order",
    lazy: async () => {
      const module = await import("../pages/Order/Order.jsx");
      return { Component: module.default };
    },
  },
]);

export default router;
