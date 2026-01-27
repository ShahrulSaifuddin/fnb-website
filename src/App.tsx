import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { HeroSection } from "./features/hero/HeroSection";
import { BestSellerSection } from "./features/menu/BestSellerSection";
import { MenuSection } from "./features/menu/MenuSection";
import { PromoSection } from "./features/promo/PromoSection";
import { GallerySection } from "./features/gallery/GallerySection";
import { OrgChart } from "./features/org/OrgChart";
import { ContactSection } from "./features/contact/ContactSection";
import { CartProvider } from "./contexts/CartProvider";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <CartProvider>
      <Layout>
        <HeroSection />
        <BestSellerSection />
        <PromoSection />
        <div id="menu">
          <MenuSection />
        </div>
        <GallerySection />
        <OrgChart />
        <ContactSection />
        <ScrollToTop />
        <Cart />
      </Layout>
    </CartProvider>
  );
}

export default App;
