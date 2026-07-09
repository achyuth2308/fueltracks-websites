import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import MiningPage from "./pages/MiningPage";
import GetDemoPage from "./pages/GetDemoPage";
import DemoAccessPage from "./pages/DemoAccessPage";
import AdminApp from "./admin/AdminApp";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* /get-demo — standalone full-page portal (no Navbar/Footer) */}
        <Route path="/get-demo" element={<GetDemoPage />} />

        {/* /demo-access — success and credentials page */}
        <Route path="/demo-access" element={<DemoAccessPage />} />

        {/* /admin — standalone admin portal (no Navbar/Footer) */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* All other pages — shared Navbar + Footer layout */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:productId" element={<ProductDetailsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/mining" element={<MiningPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
