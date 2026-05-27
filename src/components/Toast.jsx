/**
 * Toast Notification Component
 * Lightweight animated toast for user feedback
 */

import { useEffect } from "react";
import { IconCheck, IconShoppingCart } from "./Icons";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-up">
      <div className="flex items-center gap-3 bg-zinc-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-zinc-900/30 border border-zinc-700">
        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
          {type === "cart" ? (
            <IconShoppingCart size={12} />
          ) : (
            <IconCheck size={12} />
          )}
        </div>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
