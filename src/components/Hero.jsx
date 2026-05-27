/**
 * Hero Section
 * Full-viewport premium landing section with floating product visual
 */

import { IconArrowRight, IconZap } from "./Icons";

const Hero = ({ onShopClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-emerald-50/30 pointer-events-none" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-zinc-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#18181b 1px, transparent 1px), linear-gradient(90deg, #18181b 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* Left: Text Content */}
          <div className="space-y-8 lg:py-24">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 badge bg-emerald-50 text-emerald-700 border border-emerald-200/60 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" />
              New Collection 2025
            </div>

            {/* Headline */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.05] tracking-tight text-balance">
                Technology,{" "}
                <span className="italic font-normal text-zinc-400">
                  refined.
                </span>
              </h1>
              <p className="mt-6 text-lg text-zinc-500 leading-relaxed max-w-md font-light">
                Premium smart home and lifestyle devices designed at the
                intersection of Scandinavian minimalism and precision
                engineering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <button
                onClick={onShopClick}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Explore Collection
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <a href="#features" className="btn-outline inline-flex items-center justify-center gap-2">
                <IconZap size={15} />
                Our Philosophy
              </a>
            </div>

            {/* Social Proof Stats */}
            <div
              className="flex items-center gap-8 pt-4 animate-fade-up"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              {[
                { value: "40K+", label: "Happy Customers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "48h", label: "Free Shipping" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-bold text-xl text-zinc-900">{stat.value}</p>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Floating card */}
            <div className="relative animate-float">
              {/* Main product image container */}
              <div className="relative w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=85"
                  alt="Featured product — Aura Wireless Headphones"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />

                {/* Product info overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                          Bestseller
                        </p>
                        <p className="font-display font-semibold text-zinc-900 mt-0.5">
                          Aura Wireless Headphones
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-zinc-400 line-through">Rp 5.499.000</p>
                        <p className="font-bold text-zinc-900">Rp 4.299.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge: rating */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 text-lg">★</span>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm leading-none">4.9</p>
                    <p className="text-zinc-400 text-xs">2,847 reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: eco */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-emerald-600 text-sm">♻</span>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 text-xs leading-none">Carbon Neutral</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Certified 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up text-zinc-300" style={{ animationDelay: "1s" }}>
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-300 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
