/**
 * Navbar Component
 * Semi-transparent, sticky navbar with backdrop blur
 */

import { useState, useEffect } from "react";
import {
  IconShoppingCart,
  IconHeart,
  IconMenu,
  IconX,
} from "./Icons";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Catalog", href: "#catalog" },
];

const Navbar = ({ cartCount, wishlistCount, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll to add shadow/border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/60 shadow-sm shadow-zinc-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-emerald-400 font-display font-bold text-sm leading-none">L</span>
            </div>
            <span className="font-display font-semibold text-zinc-900 text-lg tracking-tight">
              LÜXE <span className="text-zinc-400 font-light">TECH</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            {/* Wishlist Icon */}
            <a
              href="#catalog"
              className="relative p-2.5 rounded-xl text-zinc-500 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200"
              title="Wishlist"
            >
              <IconHeart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {wishlistCount > 9 ? "9+" : wishlistCount}
                </span>
              )}
            </a>

            {/* Cart Icon */}
            <button
              onClick={onCartOpen}
              className="relative p-2.5 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200"
              title="Shopping Cart"
            >
              <IconShoppingCart size={19} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-zinc-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200 ml-1"
            >
              {mobileMenuOpen ? <IconX size={19} /> : <IconMenu size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-100 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 py-3 px-4 rounded-xl hover:bg-zinc-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
