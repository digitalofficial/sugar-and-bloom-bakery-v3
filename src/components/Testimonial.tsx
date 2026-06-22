"use client";

import { Star } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function Testimonial() {
  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll scale>
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Subtle glow behind */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #FF85A2 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-8 text-foreground">
                &ldquo;Sugar & Bloom made our wedding cake beyond anything we
                imagined. Five tiers of pure art. Our guests are{" "}
                <span className="shiny-text">still</span> talking about
                it.&rdquo;
              </blockquote>

              <div>
                <p className="font-display font-bold text-foreground">
                  Maria & David R.
                </p>
                <p className="text-muted text-sm mt-1">
                  Tucson, AZ — Wedding, October 2025
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
