"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Cupcake base / wrapper */}
        <path
          d="M14 28L16 42H32L34 28H14Z"
          fill="#FF85A2"
          opacity="0.9"
        />
        {/* Wrapper ridges */}
        <path
          d="M16 28L17 42M20 28L20.5 42M24 28V42M28 28L27.5 42M32 28L31 42"
          stroke="#100C18"
          strokeWidth="0.5"
          opacity="0.3"
        />
        {/* Frosting swirl */}
        <path
          d="M12 28C12 28 13 20 18 20C20 20 20 23 22 22C24 21 23 18 26 18C29 18 28 22 30 22C32 22 32 20 34 21C37 22 36 28 36 28H12Z"
          fill="#FF85A2"
        />
        {/* Frosting highlight */}
        <path
          d="M16 26C16 24 18 21 21 22C23 22.5 23 20 26 19.5C28 19.2 28.5 22 30 22"
          stroke="white"
          strokeWidth="0.8"
          opacity="0.3"
          fill="none"
        />
        {/* Flower / bloom on top */}
        <circle cx="24" cy="14" r="3" fill="#F5D5A0" />
        <circle cx="21" cy="12" r="2.5" fill="#FF85A2" opacity="0.8" />
        <circle cx="27" cy="12" r="2.5" fill="#FF85A2" opacity="0.8" />
        <circle cx="22" cy="16" r="2.5" fill="#FF85A2" opacity="0.7" />
        <circle cx="26" cy="16" r="2.5" fill="#FF85A2" opacity="0.7" />
        <circle cx="24" cy="14" r="2" fill="#F5D5A0" />
        {/* Stem hint */}
        <line
          x1="24"
          y1="10"
          x2="24"
          y2="7"
          stroke="#A8E6CF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Small leaf */}
        <path
          d="M24 8C24 8 26 6 28 7C26 8 24 8 24 8Z"
          fill="#A8E6CF"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-display font-bold text-lg tracking-wide text-foreground">
          SUGAR & BLOOM
        </span>
        <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
          BAKERY
        </span>
      </div>
    </div>
  );
}
