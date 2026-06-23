"use client";

import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

// Dynamically import 3D scene — no SSR, loads only on client
const CakeScene = dynamic(() => import("./CakeScene"), { ssr: false });

export default function Hero() {
  return (
    <section style={{ position: "relative", height: "250vh", background: "linear-gradient(to bottom, #100C18, #0C0816, #100C18)" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* Subtle bg glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,133,162,0.06), transparent 70%)", pointerEvents: "none" }} />

        {/* Text content — above the cake */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", marginBottom: "-40px" }}>
          <div className="glass-badge" style={{ display: "inline-flex", marginBottom: "24px" }}>
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>Now booking holiday orders</span>
          </div>

          <h1 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05, marginBottom: "16px", color: "#FFF0F5" }}>
            Life is sweet.
            <br />
            We just <span className="shiny-text">bake it better</span>.
          </h1>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "520px", margin: "0 auto 24px", lineHeight: 1.7 }}>
            Handcrafted cakes, pastries, and sweet creations made with love
            in Tucson, Arizona.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#order" className="shiny-button" style={{ fontSize: "1rem" }}>
              Order Online
            </a>
            <a href="#offerings" className="glass-card" style={{ padding: "14px 32px", fontWeight: 700, fontSize: "1rem", display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", color: "#FFF0F5" }}>
              Custom Cakes
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <p style={{ color: "rgba(255,133,162,0.4)", fontSize: "0.75rem", letterSpacing: "0.15em", marginTop: "24px" }}>
            ↓ SCROLL TO SPIN THE CAKE
          </p>
        </div>

        {/* 3D Cake — spins on scroll, drops after halfway */}
        <CakeScene />
      </div>
    </section>
  );
}
