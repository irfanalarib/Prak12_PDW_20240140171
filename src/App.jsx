/**
 * App.jsx — LÜXE TECH Landing Page
 * ============================================================
 * Modern Minimalist Landing Page with Product Catalog
 *
 * Tech Stack: React 18 + Vite + Tailwind CSS 3
 * Mode: 100% Client-Side (no backend/database)
 *
 * Architecture:
 *   App.jsx         → Root: global state + composition
 *   Navbar.jsx      → Sticky nav with cart/wishlist badges
 *   Hero.jsx        → Full-viewport hero section
 *   Features.jsx    → Value proposition grid
 *   Catalog.jsx     → Interactive product catalog
 *   ProductCard.jsx → Individual product card
 *   CartSidebar.jsx → Slide-in cart drawer
 *   QuickViewModal  → Product detail popup
 *   Footer.jsx      → Site footer
 *   Toast.jsx       → Feedback notifications
 *   Icons.jsx       → SVG icon library
 *   data/products.js → Mock data & helpers
 * ============================================================
 */

import { useState, useCallback } from "react";
import { PRODUCTS } from "./data/products";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Catalog from "./components/Catalog";
import CartSidebar from "./components/CartSidebar";
import QuickViewModal from "./components/QuickViewModal";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

// ─── App Root ────────────────────────────────────────────────
const App = () => {
  // ── Global State ─────────────────────────────────────────

  /** Cart items: [{ ...product, qty: number }] */
  const [cart, setCart] = useState([]);

  /** Wishlist: Set of product IDs */
  const [wishlist, setWishlist] = useState([]);

  /** Cart sidebar open/close */
  const [isCartOpen, setIsCartOpen] = useState(false);

  /** Product selected for Quick View modal */
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  /** Toast notification */
  const [toast, setToast] = useState(null);

  // ── Helper: Show Toast ───────────────────────────────────
  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type, id: Date.now() });
  }, []);

  // ── Cart Actions ─────────────────────────────────────────

  /** Add product to cart (or increment qty if already exists) */
  const handleAddToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`${product.name} added to cart`, "cart");
  }, [showToast]);

  /** Update item quantity (removes item if qty reaches 0) */
  const handleUpdateQty = useCallback((productId, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, qty: newQty } : item
        )
      );
    }
  }, []);

  /** Remove item from cart */
  const handleRemoveFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast("Item removed from cart");
  }, [showToast]);

  // ── Wishlist Actions ─────────────────────────────────────

  /** Toggle wishlist status for a product */
  const handleWishlistToggle = useCallback((productId) => {
    setWishlist((prev) => {
      const isWishlisted = prev.includes(productId);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (isWishlisted) {
        showToast("Removed from wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`${product?.name ?? "Item"} wishlisted ♡`);
        return [...prev, productId];
      }
    });
  }, [showToast]);

  // ── Derived Values ────────────────────────────────────────
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length;

  // ── Scroll to Catalog ─────────────────────────────────────
  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  // ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-zinc-50">

      {/* ── Sticky Navigation ── */}
      <Navbar
        cartCount={cartItemCount}
        wishlistCount={wishlistCount}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* ── Page Sections ── */}
      <main>
        {/* Hero */}
        <Hero onShopClick={scrollToCatalog} />

        {/* Value Propositions */}
        <Features />

        {/* Interactive Product Catalog */}
        <Catalog
          products={PRODUCTS}
          wishlist={wishlist}
          onWishlist={handleWishlistToggle}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Cart Sidebar Drawer ── */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveFromCart}
      />

      {/* ── Quick View Modal ── */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          isWishlisted={wishlist.includes(quickViewProduct.id)}
          onWishlist={handleWishlistToggle}
          onAddToCart={handleAddToCart}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      {/* ── Toast Notifications ── */}
      {toast && (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default App;
