/**
 * CartSidebar Component
 * Slide-in drawer from the right with cart management
 */

import { useEffect } from "react";
import {
  IconX,
  IconPlus,
  IconMinus,
  IconTrash,
  IconShoppingCart,
  IconArrowRight,
} from "./Icons";
import { formatPrice } from "../data/products";

const CartSidebar = ({ isOpen, onClose, cart, onUpdateQty, onRemove }) => {
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingCost = subtotal >= 500000 ? 0 : 49000;
  const total = subtotal + shippingCost;
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-350 ease-spring ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <IconShoppingCart size={20} className="text-zinc-700" />
            <h2 className="font-display font-semibold text-zinc-900 text-lg">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="badge bg-zinc-100 text-zinc-600 border border-zinc-200">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-all duration-200"
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            // Empty cart state
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-2xl flex items-center justify-center mb-4">
                <IconShoppingCart size={28} className="text-zinc-300" />
              </div>
              <h3 className="font-semibold text-zinc-800 mb-1">Cart is empty</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Add something beautiful to your collection.
              </p>
              <button
                onClick={onClose}
                className="btn-primary text-xs flex items-center gap-2 group"
              >
                Browse Collection
                <IconArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-2xl hover:bg-zinc-50 transition-colors duration-200 group"
              >
                {/* Product thumbnail */}
                <div className="w-18 h-18 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-100 w-16 h-16">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-zinc-900 text-sm leading-snug truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{item.category}</p>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1 bg-zinc-100 rounded-lg p-0.5">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md text-zinc-600 hover:bg-white hover:shadow-sm transition-all duration-150 active:scale-90"
                      >
                        <IconMinus size={12} />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-zinc-900">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md text-zinc-600 hover:bg-white hover:shadow-sm transition-all duration-150 active:scale-90"
                      >
                        <IconPlus size={12} />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="font-semibold text-zinc-900 text-sm">
                      {formatPrice(item.price * item.qty)}
                    </span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="opacity-0 group-hover:opacity-100 self-start p-1.5 text-zinc-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all duration-200 active:scale-90"
                >
                  <IconTrash size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Order Summary */}
        {cart.length > 0 && (
          <div className="border-t border-zinc-100 px-6 py-5 space-y-4">
            {/* Subtotal breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Shipping</span>
                <span className={shippingCost === 0 ? "text-emerald-600 font-medium" : ""}>
                  {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
                </span>
              </div>
              {shippingCost > 0 && (
                <p className="text-xs text-zinc-400">
                  Free shipping on orders over {formatPrice(500000)}
                </p>
              )}
              <div className="flex justify-between font-bold text-zinc-900 pt-2 border-t border-zinc-100">
                <span>Total</span>
                <span className="font-display text-lg">{formatPrice(total)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button className="btn-primary w-full flex items-center justify-center gap-2 group py-3.5">
              Proceed to Checkout
              <IconArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={onClose}
              className="w-full text-center text-sm text-zinc-400 hover:text-zinc-700 transition-colors duration-200 py-1"
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
