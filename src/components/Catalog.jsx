/**
 * Catalog Section
 * Interactive product catalog with search, category filter, and sorting
 */

import { useState, useMemo, useEffect, useRef } from "react";
import { CATEGORIES, SORT_OPTIONS } from "../data/products";
import { IconSearch, IconChevronDown, IconX } from "./Icons";
import ProductCard from "./ProductCard";

const Catalog = ({ products, wishlist, onWishlist, onQuickView, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const sectionRef = useRef(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Filtered & sorted products
  const displayedProducts = useMemo(() => {
    let result = [...products];

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sort
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break; // Keep original order
    }

    return result;
  }, [products, searchQuery, activeCategory, sortOption]);

  return (
    <section id="catalog" className="py-24 lg:py-32 bg-zinc-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
          <span className="badge bg-white text-zinc-500 border border-zinc-200 mb-4">
            Product Catalog
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
            The Collection
          </h2>
          <p className="mt-4 text-zinc-500">
            {products.length} objects. Each one obsessively considered.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="animate-on-scroll mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">

            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <IconSearch
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-zinc-200 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  <IconX size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 text-sm bg-white border border-zinc-200 rounded-xl text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 cursor-pointer transition-all duration-200"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <IconChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                }`}
              >
                {cat}
                {/* Animated active dot */}
                {activeCategory === cat && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-on-scroll"
                style={{ transitionDelay: `${(index % 8) * 60}ms` }}
              >
                <ProductCard
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onWishlist={onWishlist}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconSearch size={24} className="text-zinc-400" />
            </div>
            <h3 className="font-semibold text-zinc-800 text-lg">No products found</h3>
            <p className="text-zinc-500 text-sm mt-1 mb-6">
              Try adjusting your search or filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
                setSortOption("default");
              }}
              className="btn-outline text-xs"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Results count */}
        {displayedProducts.length > 0 && (
          <p className="text-center text-xs text-zinc-400 font-mono mt-10">
            Showing {displayedProducts.length} of {products.length} products
          </p>
        )}
      </div>
    </section>
  );
};

export default Catalog;
