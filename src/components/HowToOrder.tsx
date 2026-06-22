"use client";

import { MousePointerClick, ChefHat, Truck } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const steps = [
  {
    number: "01",
    title: "Pick Your Treat",
    description:
      "Browse our menu or tell us your dream creation. Custom orders, party trays, or daily favorites — we do it all.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "We Bake Fresh",
    description:
      "Every order is made from scratch with premium, locally-sourced ingredients. No shortcuts, ever.",
    icon: ChefHat,
  },
  {
    number: "03",
    title: "Pickup or Delivery",
    description:
      "Swing by our Tucson shop or let us bring the sweetness to you. Wedding cakes include complimentary delivery.",
    icon: Truck,
  },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-tertiary mb-4">
              Simple & Sweet
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
              How to <span className="shiny-text">order</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <RevealOnScroll
                key={step.number}
                delay={(index + 1) as 1 | 2 | 3}
              >
                <div className="glass-card p-8 text-center h-full flex flex-col items-center">
                  <span className="font-display font-bold text-5xl text-white/[0.04] mb-4">
                    {step.number}
                  </span>
                  <div className="glass-icon mb-6">
                    <Icon className="w-6 h-6 text-tertiary relative z-10" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
