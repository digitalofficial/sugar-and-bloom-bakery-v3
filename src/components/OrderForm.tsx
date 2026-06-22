"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const orderTypes = [
  "Custom Cake",
  "Cupcakes",
  "Pastries",
  "Wedding Cake",
  "Catering",
  "Other",
];

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="order" className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-primary mb-4">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
              Place your <span className="shiny-text">order</span>
            </h2>
            <p className="text-muted mt-4 max-w-lg mx-auto">
              Fill out the form below and we&apos;ll get back to you within
              24 hours. For urgent orders, call us at (520) 555-0182.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="glass-card p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="glass-icon !w-20 !h-20 mx-auto mb-6">
                  <Send className="w-8 h-8 text-tertiary relative z-10" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-foreground">
                  Order received!
                </h3>
                <p className="text-muted">
                  We&apos;ll be in touch within 24 hours. Thank you for choosing
                  Sugar & Bloom!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-display font-semibold text-sm text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="glass-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-display font-semibold text-sm text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="glass-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-display font-semibold text-sm text-foreground mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(520) 555-0000"
                      className="glass-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="orderType"
                      className="block font-display font-semibold text-sm text-foreground mb-2"
                    >
                      Order Type
                    </label>
                    <select
                      id="orderType"
                      name="orderType"
                      required
                      className="glass-input appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-surface text-muted">
                        Select an option
                      </option>
                      {orderTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-surface text-foreground"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="block font-display font-semibold text-sm text-foreground mb-2"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="glass-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block font-display font-semibold text-sm text-foreground mb-2"
                  >
                    Order Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="Tell us about your order — flavors, theme, serving size, any special requests..."
                    className="glass-input resize-none"
                  />
                </div>

                <button type="submit" className="shiny-button w-full text-base">
                  <Send className="w-4 h-4" />
                  Send Order Request
                </button>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
