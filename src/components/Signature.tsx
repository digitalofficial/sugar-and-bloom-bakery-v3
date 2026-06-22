"use client";

import { Cake } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function Signature() {
  return (
    <section className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image placeholder */}
            <RevealOnScroll>
              <div className="relative h-72 md:h-full min-h-[360px] bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="glass-icon !w-20 !h-20 mx-auto mb-4">
                    <Cake className="w-10 h-10 text-primary relative z-10" />
                  </div>
                  <p className="text-muted text-sm font-display">
                    Signature Collection
                  </p>
                </div>
                {/* Decorative grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </RevealOnScroll>

            {/* Text side */}
            <RevealOnScroll delay={2}>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-secondary mb-6">
                  Our Philosophy
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                  Every cake tells a{" "}
                  <span className="shiny-text">story</span>
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  At Sugar & Bloom, we believe baking is an art form. Every
                  creation starts with the finest ingredients, a dash of
                  imagination, and an unwavering commitment to making your
                  sweetest moments unforgettable.
                </p>
                <p className="text-muted leading-relaxed">
                  From intimate gatherings to grand celebrations, our team
                  of pastry artisans pours heart and craft into every layer,
                  every swirl, and every bite.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
