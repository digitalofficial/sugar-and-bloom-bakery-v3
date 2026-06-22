"use client";

import { Sparkles } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <div className="glass-badge mb-8 inline-flex">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>Now booking holiday orders</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
            Life is sweet.
            <br />
            We just{" "}
            <span className="shiny-text">bake it better</span>.
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Handcrafted cakes, pastries, and sweet creations made with love
            in Tucson, Arizona. From custom wedding cakes to daily fresh
            croissants.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#order" className="shiny-button text-base">
              Order Online
            </a>
            <a
              href="#offerings"
              className="glass-card px-8 py-3.5 font-display font-bold text-base text-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              Custom Cakes
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5"
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
