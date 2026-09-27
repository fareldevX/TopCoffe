import { useLocation } from "react-router-dom";

import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";

function SiteLayout({ children }) {
  const { pathname } = useLocation();
  const isOrderPage = pathname === "/order";

  if (isOrderPage) {
    return <main className="w-full bg-surface">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="w-full bg-surface">{children}</main>
      <Footer />
    </>
  );
}

export default SiteLayout;
