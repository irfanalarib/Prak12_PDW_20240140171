/**
 * Footer Component
 * Clean, minimal footer with navigation and branding
 */

const FOOTER_LINKS = {
  Products: ["Smart Home", "Audio", "Wearables", "Workspace", "Lighting"],
  Company: ["About Us", "Sustainability", "Careers", "Press"],
  Support: ["FAQ", "Warranty", "Returns", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-400">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400 font-display font-bold text-sm">L</span>
              </div>
              <span className="font-display font-semibold text-white text-lg tracking-tight">
                LÜXE <span className="text-zinc-500 font-light">TECH</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              Premium minimalist lifestyle technology. Designed for people who
              believe beautiful things work better.
            </p>

            {/* Certifications */}
            <div className="flex items-center gap-3">
              {["B Corp", "Carbon Neutral", "ISO 9001"].map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] font-mono tracking-wider border border-zinc-700 text-zinc-500 px-2 py-1 rounded-lg"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {["Instagram", "X (Twitter)", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
                  title={social}
                >
                  {social.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-mono font-medium text-zinc-300 tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 pt-10 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm font-medium text-zinc-200">
                Get exclusive early access and design notes.
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                We send one thoughtful email per month. No spam.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
              />
              <button className="flex-shrink-0 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium rounded-xl transition-colors duration-200 active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
            <p>© {currentYear} LÜXE TECH. All rights reserved.</p>
            <p className="font-mono">
              Praktikum Frontend Development — React + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
