/**
 * ProductCard Component
 * Individual product display with wishlist, quick view, and add to cart
 */

import { IconHeart, IconStar, IconEye, IconShoppingCart } from "./Icons";
import { formatPrice } from "../data/products";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <IconStar
          key={star}
          size={12}
          filled={star <= Math.round(rating)}
          className={star <= Math.round(rating) ? "star-filled" : "star-empty"}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product, isWishlisted, onWishlist, onQuickView, onAddToCart }) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="product-card group relative bg-white rounded-2xl border border-zinc-100 hover:border-zinc-200 overflow-hidden flex flex-col">

      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-zinc-50">
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
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

        {/* Hover action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          {/* Wishlist button */}
          <button
            onClick={() => onWishlist(product.id)}
            className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-sm backdrop-blur-sm transition-all duration-200 active:scale-90 ${
              isWishlisted
                ? "bg-rose-500 text-white"
                : "bg-white/90 text-zinc-500 hover:text-rose-500 hover:bg-white"
            }`}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <IconHeart size={14} filled={isWishlisted} />
          </button>

          {/* Quick View button */}
          <button
            onClick={() => onQuickView(product)}
            className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-zinc-500 hover:text-zinc-900 hover:bg-white flex items-center justify-center shadow-sm transition-all duration-200 active:scale-90"
            title="Quick view"
          >
            <IconEye size={14} />
          </button>
        </div>

        {/* Quick Add overlay (bottom of image on hover) */}
        <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-spring">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white text-xs font-medium py-2.5 rounded-xl hover:bg-zinc-700 transition-colors duration-200 active:scale-95"
          >
            <IconShoppingCart size={13} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category tag */}
        <span className="text-[10px] font-mono font-medium text-zinc-400 tracking-widest uppercase mb-1">
          {product.category}
        </span>

        {/* Product name */}
        <h3
          className="font-semibold text-zinc-900 text-sm leading-snug mb-2 cursor-pointer hover:text-emerald-700 transition-colors duration-200"
          onClick={() => onQuickView(product)}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-zinc-400">
            {product.rating} ({product.reviewCount.toLocaleString("id-ID")})
          </span>
        </div>

        {/* Price (pushed to bottom) */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="font-bold text-zinc-900 text-sm">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-xs text-zinc-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
