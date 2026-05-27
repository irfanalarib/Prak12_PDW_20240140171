/**
 * Mock Product Data
 * Smart Home & Premium Lifestyle Tech Collection
 * Uses Unsplash for placeholder images
 */

export const PRODUCTS = [
  {
    id: 1,
    name: "Aura Wireless Headphones",
    category: "Audio",
    price: 4299000,
    originalPrice: 5499000,
    rating: 4.9,
    reviewCount: 2847,
    badge: "Bestseller",
    description:
      "Experience audio in its purest form. The Aura Wireless headphones combine adaptive noise cancellation with 40mm planar drivers, delivering a soundstage so natural it disappears between you and your music. Crafted with sustainably sourced aluminum and premium memory foam.",
    specs: {
      "Driver Type": "40mm Planar Magnetic",
      "Frequency Response": "5Hz – 40kHz",
      "Battery Life": "32 hours ANC on",
      "Connectivity": "Bluetooth 5.3, USB-C",
      "Weight": "248g",
      "Noise Cancellation": "Adaptive ANC",
    },
    colors: ["Matte Black", "Arctic White", "Sage Green"],
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    imageAlt: "Premium wireless headphones",
  },
  {
    id: 2,
    name: "Lumina Desk Lamp Pro",
    category: "Lighting",
    price: 1899000,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 1203,
    badge: "Editor's Pick",
    description:
      "Precision-engineered illumination for the modern workspace. Lumina Pro mimics natural daylight across 16 million color temperatures, adapting to your circadian rhythm through an integrated ambient sensor. The minimal arc silhouette makes it a sculptural centerpiece.",
    specs: {
      "Color Temperature": "1800K – 6500K",
      "Brightness": "2500 lumens peak",
      "Color Accuracy": "CRI 98+",
      "Power": "24W (USB-C powered)",
      "Sensor": "Ambient light + Motion",
      "Lifespan": "50,000 hours",
    },
    colors: ["Warm White", "Matte Black"],
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    imageAlt: "Minimalist desk lamp",
  },
  {
    id: 3,
    name: "Haze Smart Speaker",
    category: "Audio",
    price: 3499000,
    originalPrice: 3999000,
    rating: 4.7,
    reviewCount: 987,
    badge: "New",
    description:
      "360° spatial audio wrapped in handcrafted Scandinavian oak and precision-woven acoustic mesh. Haze reads the room — literally. Its room-calibration AI maps your space and adjusts the soundfield in real-time, filling every corner without a single harsh reflection.",
    specs: {
      "Drivers": "3 tweeters + 1 woofer",
      "Output Power": "120W total",
      "Audio Format": "Hi-Res 24-bit/192kHz",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.3",
      "Smart Platform": "Matter 1.2 compatible",
      "Dimensions": "Ø180 × 220mm",
    },
    colors: ["Natural Oak", "Charcoal"],
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    imageAlt: "Smart ambient speaker",
  },
  {
    id: 4,
    name: "Zenith Air Purifier",
    category: "Smart Home",
    price: 5799000,
    originalPrice: 6299000,
    rating: 4.9,
    reviewCount: 3412,
    badge: "Top Rated",
    description:
      "Breathe with confidence. Zenith Air's 6-stage filtration — including medical-grade H13 HEPA and cold-catalyst filters — captures 99.97% of particles as small as 0.1 microns. The whisper-quiet motor purifies a 60m² room in under 12 minutes.",
    specs: {
      "CADR": "450 m³/h",
      "Coverage Area": "Up to 80 m²",
      "Filtration": "H13 HEPA + Activated Carbon",
      "Noise Level": "18 dB (sleep mode)",
      "Sensors": "PM2.5, CO₂, VOC, Humidity",
      "Smart Control": "App + Voice + Auto mode",
    },
    colors: ["Bone White", "Slate Gray"],
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    imageAlt: "Air purifier smart home",
  },
  {
    id: 5,
    name: "Mira Smartwatch Ultra",
    category: "Wearables",
    price: 6299000,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 5621,
    badge: "Premium",
    description:
      "A watch that thinks ahead. Mira Ultra combines a sapphire-crystal AMOLED display with precision health sensors for ECG, blood oxygen, and continuous glucose monitoring — all housed in a surgical-grade titanium case machined from a single billet.",
    specs: {
      "Display": "1.9″ AMOLED Always-On",
      "Case Material": "Grade 5 Titanium",
      "Health Sensors": "ECG, SpO₂, Skin temp, CGM",
      "Battery": "72 hours standard / 14 days low-power",
      "Water Resistance": "100m (10 ATM)",
      "OS": "WearOS 4.0 + AI Health Coach",
    },
    colors: ["Titanium Silver", "Midnight", "Sage"],
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    imageAlt: "Premium smartwatch",
  },
  {
    id: 6,
    name: "Drift Portable Monitor",
    category: "Workspace",
    price: 4899000,
    originalPrice: 5499000,
    rating: 4.6,
    reviewCount: 734,
    badge: "New",
    description:
      "Your second screen, anywhere. Drift is a 15.6″ 120Hz portable monitor so thin (5.9mm) it slides into a laptop sleeve. Its full-laminated panel covers 100% DCI-P3 — calibrated at the factory to ΔE < 1 — making it the choice of photographers and designers who refuse to compromise on color.",
    specs: {
      "Panel": "15.6″ IPS, 120Hz",
      "Resolution": "2560 × 1440 (2K)",
      "Color Space": "100% DCI-P3, ΔE < 1",
      "Brightness": "450 nits peak",
      "Thickness": "5.9mm",
      "Power": "USB-C single-cable (video + power)",
    },
    colors: ["Space Gray", "Silver"],
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    imageAlt: "Portable monitor workspace",
  },
  {
    id: 7,
    name: "Haven Sleep Tracker",
    category: "Smart Home",
    price: 2199000,
    originalPrice: 2599000,
    rating: 4.7,
    reviewCount: 1856,
    badge: null,
    description:
      "Understand your sleep like never before. Haven sits invisibly under your mattress, using millimeter-wave radar to track sleep stages, heart rate, and breathing — without a single device touching your body. Wake to a personalized sleep score and AI-generated recommendations every morning.",
    specs: {
      "Sensor Tech": "60GHz mmWave radar",
      "Metrics": "Sleep stages, HRV, breathing rate",
      "Power": "Passive USB-C, no battery needed",
      "Compatibility": "All mattress types up to 50cm",
      "Privacy": "On-device processing, no cloud upload",
      "App": "iOS & Android",
    },
    colors: ["Cloud White"],
    imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    imageAlt: "Smart bedroom sleep tracker",
  },
  {
    id: 8,
    name: "Prism Smart Projector",
    category: "Workspace",
    price: 8999000,
    originalPrice: 10499000,
    rating: 4.9,
    reviewCount: 423,
    badge: "Limited",
    description:
      "Cinema quality in a cylinder you can hold in one hand. Prism projects a razor-sharp 120″ image from just 80cm away using a triple-laser light engine with 3000 ANSI lumens. Its built-in Dolby Vision and auto-keystone correction ensure a perfect picture the moment it powers on.",
    specs: {
      "Technology": "Triple-laser DLP",
      "Brightness": "3000 ANSI lumens",
      "Resolution": "Native 4K (3840×2160)",
      "HDR": "Dolby Vision, HDR10+",
      "Throw Ratio": "Ultra-short (0.65:1)",
      "Audio": "30W Dolby Atmos built-in",
    },
    colors: ["Titanium Black", "Pearl White"],
    imageUrl: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
    imageAlt: "Smart portable projector",
  },
];

export const CATEGORIES = ["All", "Audio", "Lighting", "Smart Home", "Wearables", "Workspace"];

export const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "reviews", label: "Most Reviewed" },
];

/** Format IDR currency */
export const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
