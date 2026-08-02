import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import PaymentPage from "../pages/PaymentPage";
import ContactPage from "../pages/ContactPage";
import ProductDetail from "../components/ProductDetail";


function AppRoutes() {
  return (
    <Routes>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="shop"
        element={<ShopPage />}
      />
      <Route
        path="shop/:id"
        element={<ProductDetail />}
      />
      <Route
        path="payment"
        element={<PaymentPage />}
      />
      <Route
        path="contacts"
        element={<ContactPage />}
      />
    </Routes>
  );
}

export default AppRoutes;
