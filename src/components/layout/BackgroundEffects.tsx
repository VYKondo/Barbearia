"use client";

import React from "react";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative Lateral Stripes - Left */}
      <div className="absolute top-0 left-[5%] md:left-[10%] w-[12px] md:w-[20px] h-full opacity-10 md:opacity-15">
        <div 
          className="w-full h-full animate-barber-slide"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              var(--color-barber-red),
              var(--color-barber-red) 12px,
              var(--color-light) 12px,
              var(--color-light) 24px,
              var(--color-accent) 24px,
              var(--color-accent) 36px
            )`,
            backgroundSize: "100% 72px",
          }}
        />
      </div>

      {/* Decorative Lateral Stripes - Right */}
      <div className="absolute top-0 right-[5%] md:right-[10%] w-[12px] md:w-[20px] h-full opacity-10 md:opacity-15">
        <div 
          className="w-full h-full animate-barber-slide"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              var(--color-barber-red),
              var(--color-barber-red) 12px,
              var(--color-light) 12px,
              var(--color-light) 24px,
              var(--color-accent) 24px,
              var(--color-accent) 36px
            )`,
            backgroundSize: "100% 72px",
          }}
        />
      </div>
    </div>
  );
}
