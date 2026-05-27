/**
 * QuickViewModal Component
 * Product detail popup with specs, color variants, and add to cart
 */

import { useState, useEffect } from "react";
import {
  IconX,
  IconStar,
  IconHeart,
  IconShoppingCart,
  IconCheck,
} from "./Icons";
import { formatPrice } from "../data/products";

const QuickViewModal = ({ product, isWishlisted, onWishlist, onAddToCart, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full sm:max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] flex flex-col">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-white shadow-sm transition-all duration-200"
        >
          <IconX size={16} />
        </button>

        <div className="overflow-y-auto flex flex-col sm:flex-row">
          {/* Left: Product Image */}
          <div className="relative sm:w-5/12 flex-shrink-0 aspect-square sm:aspect-auto sm:min-h-[400px] bg-zinc-50">
            <img
              src={product.imageUrl}
              alt={product.imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              {product.badge && (
                <span className="badge bg-zinc-900 text-white text-[10px] py-0.5">
                  {product.badge}
                </span>
              )}
              {discount && (
                <span className="badge bg-emerald-500 text-white text-[10px] py-0.5">
                  −{discount}%
                </span>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col gap-5 overflow-y-auto">
            {/* Category + Rating */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-medium text-zinc-400 tracking-widest uppercase">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <IconStar
                      key={s}
                      size={12}
                      filled={s <= Math.round(product.rating)}
                      className={s <= Math.round(product.rating) ? "star-filled" : "star-empty"}
                    />
                  ))}
                </div>
                <span className="text-xs text-zinc-500">
                  {product.rating} ({product.reviewCount.toLocaleString("id-ID")})
                </span>
              </div>
            </div>

            {/* Name */}
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-bold text-zinc-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-zinc-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 leading-relaxed">{product.description}</p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 1 && (
              <div>
                <p className="text-xs font-medium text-zinc-700 mb-2">
                  Color:{" "}
                  <span className="font-normal text-zinc-400">{product.colors[selectedColor]}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(idx)}
                      className={`relative px-3 py-1.5 text-xs rounded-lg border transition-all duration-200 ${
                        selectedColor === idx
                          ? "border-zinc-900 bg-zinc-900 text-white"
                          : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specs */}
            <div className="bg-zinc-50 rounded-2xl p-4">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 font-mono">
                Specifications
              </p>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start gap-4 py-1 border-b border-zinc-100 last:border-0">
                    <span className="text-xs text-zinc-500 flex-shrink-0">{key}</span>
                    <span className="text-xs font-medium text-zinc-800 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto pt-2">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300 active:scale-95 ${
                  addedToCart
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200"
                    : "bg-zinc-900 text-white hover:bg-zinc-700 shadow-sm"
                }`}
              >
                {addedToCart ? (
                  <>
                    <IconCheck size={16} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <IconShoppingCart size={16} />
                    Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={() => onWishlist(product.id)}
                className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 active:scale-90 ${
                  isWishlisted
                    ? "bg-rose-50 border-rose-200 text-rose-500"
                    : "border-zinc-200 text-zinc-500 hover:border-rose-300 hover:text-rose-500 hover:bg-rose-50"
                }`}
              >
                <IconHeart size={18} filled={isWishlisted} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
