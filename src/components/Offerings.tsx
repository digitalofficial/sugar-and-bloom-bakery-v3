"use client";

import { Cake, CakeSlice, Cookie, Croissant, Heart, Sparkles } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const offerings = [
  {
    title: "Custom Cakes",
    description:
      "Birthdays, weddings, celebrations — every layer crafted to your vision with premium ingredients and artistic detail.",
    icon: Cake,
    large: true,
    glow: true,
  },
  {
    title: "Cupcakes & Minis",
    description:
      "Perfectly portioned bites of joy. Over 20 rotating flavors from classic vanilla to lavender honey.",
    icon: CakeSlice,
    large: false,
    glow: false,
  },
  {
    title: "French Pastries",
    description:
      "Buttery croissants, delicate macarons, and silky eclairs made with traditional French techniques.",
    icon: Croissant,
    large: false,
    glow: false,
  },
  {
    title: "Cookies & Bars",
    description:
      "Crispy edges, chewy centers. From chocolate chip to decorated sugar cookies for any occasion.",
    icon: Cookie,
    large: false,
    glow: false,
  },
  {
    title: "Wedding Cakes",
    description:
      "Your dream day deserves a dream cake. Complimentary consultations, tastings, and on-site delivery included.",
    icon: Heart,
    large: true,
    glow: true,
  },
  {
    title: "Seasonal Specials",
    description:
      "Limited-edition flavors and treats that celebrate the best of every season. Follow us for drops.",
    icon: Sparkles,
    large: false,
    glow: false,
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-primary mb-4">
              Our Offerings
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
              Baked with <span className="shiny-text">love</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll
                key={item.title}
                delay={Math.min(index + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
                className={item.large ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
              >
                <div
                  className={`glass-card p-8 h-full flex flex-col ${
                    item.glow ? "glow-border" : ""
                  }`}
                >
                  <div className="glass-icon mb-6">
                    <Icon className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm flex-1">
                    {item.description}
                  </p>
                  {item.glow && (
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <a
                        href="#order"
                        className="font-display font-semibold text-sm text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
                      >
                        Start your order
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
