"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="glass-card !rounded-none !border-x-0 !border-b-0">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand */}
            <div>
              <Logo />
              <p className="text-muted text-sm leading-relaxed mt-4 max-w-xs">
                Handcrafted cakes and pastries in Tucson, AZ. Made with
                love, served with a smile.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-sm tracking-[0.15em] uppercase text-foreground mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-muted">
                <p>4201 E Speedway Blvd</p>
                <p>Tucson, AZ 85712</p>
                <a
                  href="tel:+15205550182"
                  className="block hover:text-primary transition-colors"
                >
                  (520) 555-0182
                </a>
                <a
                  href="mailto:hello@sugarandbloom.com"
                  className="block hover:text-primary transition-colors"
                >
                  hello@sugarandbloom.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-bold text-sm tracking-[0.15em] uppercase text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-icon !w-10 !h-10 !rounded-xl hover:border-primary/30 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 text-foreground relative z-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-icon !w-10 !h-10 !rounded-xl hover:border-primary/30 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 text-foreground relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-icon !w-10 !h-10 !rounded-xl hover:border-primary/30 transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-4 h-4 text-foreground relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.97a8.35 8.35 0 004.76 1.49V7a4.84 4.84 0 01-1-.31z" />
                  </svg>
                </a>
              </div>
              <p className="text-muted text-xs mt-6">
                Tag us @sugarandbloom for a chance to be featured!
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted text-xs">
              &copy; {new Date().getFullYear()} Sugar & Bloom Bakery. All
              rights reserved.
            </p>
            <p className="text-muted/50 text-xs">
              Baked with love in Tucson, AZ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
