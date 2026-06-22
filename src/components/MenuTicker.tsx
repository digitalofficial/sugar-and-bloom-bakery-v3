"use client";

const items = [
  "CROISSANTS",
  "MACARONS",
  "CUSTOM CAKES",
  "CUPCAKES",
  "COOKIES",
  "WEDDING CAKES",
  "DONUTS",
  "CINNAMON ROLLS",
];

function MarqueeContent({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="marquee-content"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-display font-bold text-lg sm:text-xl tracking-widest text-foreground/60">
            {item}
          </span>
          <span className="text-primary/40 text-2xl">&middot;</span>
        </span>
      ))}
    </div>
  );
}

export default function MenuTicker() {
  return (
    <section className="py-8 border-y border-white/5">
      <div className="glass-card !rounded-none !border-x-0 py-6">
        <div className="marquee-container">
          <div className="marquee-track">
            <MarqueeContent />
            <MarqueeContent ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
