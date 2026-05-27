/**
 * Features Section
 * Value propositions displayed in an elegant grid
 */

import { useEffect, useRef } from "react";
import { IconLeaf, IconZap, IconShield, IconRefreshCw } from "./Icons";

const FEATURES = [
  {
    icon: IconLeaf,
    color: "emerald",
    title: "Sustainably Crafted",
    description:
      "Every product is designed with a closed-loop material lifecycle. Aluminum housings are machined from recycled billets, and packaging is 100% compostable.",
  },
  {
    icon: IconZap,
    color: "amber",
    title: "Smart Integration",
    description:
      "Matter 1.2 and Thread-ready. Every device speaks natively to Apple Home, Google Home, and Alexa — no proprietary bridge required.",
  },
  {
    icon: IconShield,
    color: "blue",
    title: "Privacy by Design",
    description:
      "On-device processing for all AI features. Your data never leaves your home network. No subscriptions, no data harvesting.",
  },
  {
    icon: IconRefreshCw,
    color: "violet",
    title: "Lifetime Updates",
    description:
      "Hardware built to last a decade, software built to improve with every release. Free firmware updates for the lifetime of your device.",
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-100",
    glow: "group-hover:shadow-emerald-100/80",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    border: "border-amber-100",
    glow: "group-hover:shadow-amber-100/80",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
    glow: "group-hover:shadow-blue-100/80",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "border-violet-100",
    glow: "group-hover:shadow-violet-100/80",
  },
};

const Features = () => {
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 lg:py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="badge bg-zinc-100 text-zinc-500 border border-zinc-200 mb-4">
            Our Principles
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
            Built different,{" "}
            <span className="italic font-normal text-zinc-400">by design.</span>
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed">
            We believe technology should integrate seamlessly into life — not demand attention.
            Every decision starts from that principle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const colors = colorMap[feature.color];
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`animate-on-scroll group relative p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 bg-white hover:shadow-xl ${colors.glow} transition-all duration-500 cursor-default`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={22} className={colors.icon} />
                </div>

                <h3 className="font-semibold text-zinc-900 mb-2 text-[15px]">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle corner decoration */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover:bg-zinc-300 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Divider Banner */}
        <div className="mt-20 animate-on-scroll">
          <div className="relative rounded-3xl bg-zinc-900 overflow-hidden p-10 lg:p-14">
            {/* BG accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-4">
                  The LÜXE Promise
                </p>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                  If it isn't perfect,{" "}
                  <span className="italic font-normal text-zinc-400">it isn't done.</span>
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "5 Year", label: "Warranty" },
                  { value: "30 Day", label: "Free Returns" },
                  { value: "24/7", label: "Support" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
