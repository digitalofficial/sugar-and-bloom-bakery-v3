"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const hours = [
  { day: "Tuesday - Saturday", time: "7:00 AM - 5:00 PM" },
  { day: "Sunday", time: "8:00 AM - 2:00 PM" },
  { day: "Monday", time: "Closed" },
];

export default function Hours() {
  return (
    <section id="hours" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-secondary mb-4">
              Visit Us
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
              Hours & <span className="shiny-text">Location</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Hours card */}
          <RevealOnScroll delay={1}>
            <div className="glass-card p-8 h-full">
              <div className="glass-icon mb-6">
                <Clock className="w-6 h-6 text-secondary relative z-10" />
              </div>
              <h3 className="font-display font-bold text-xl mb-6 text-foreground">
                Bakery Hours
              </h3>
              <div className="space-y-4">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-foreground font-display font-semibold text-sm">
                      {h.day}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        h.time === "Closed"
                          ? "text-primary/60"
                          : "text-muted"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Location card */}
          <RevealOnScroll delay={2}>
            <div className="glass-card p-8 h-full">
              <div className="glass-icon mb-6">
                <MapPin className="w-6 h-6 text-primary relative z-10" />
              </div>
              <h3 className="font-display font-bold text-xl mb-6 text-foreground">
                Find Us
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-muted mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">
                      4201 E Speedway Blvd
                    </p>
                    <p className="text-muted text-sm">Tucson, AZ 85712</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-muted mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+15205550182"
                      className="text-foreground text-sm font-semibold hover:text-primary transition-colors"
                    >
                      (520) 555-0182
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-muted text-xs leading-relaxed">
                    Located in the heart of Tucson near the University of
                    Arizona. Free parking available in the rear lot.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
