"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Mandala } from "@/components/decorative/Mandala";
import { COMPANY } from "@/lib/constants";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Animate texts in
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char");
      tl.fromTo(chars, 
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }

    // Loading bar progress
    if (loaderBarRef.current) {
      tl.fromTo(loaderBarRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
        "-=0.5"
      );
    }

    // Fade out screen
    if (containerRef.current) {
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.5
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center origin-top"
    >
      {/* Spinning Mandala */}
      <div className="mb-8 animate-spin" style={{ animationDuration: "6s" }}>
        <Mandala size={120} color="#C89B5C" opacity={0.8} />
      </div>

      {/* Brand Name */}
      <div>
        <h1 ref={textRef} className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-8xl text-primary overflow-hidden flex font-bold tracking-tight">
          {COMPANY.name.split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-center text-secondary text-xs sm:text-sm uppercase tracking-[0.35em] md:tracking-[0.4em] mt-3 font-[family-name:var(--font-subheading)] opacity-90 font-semibold">
          {COMPANY.tagline}
        </p>
      </div>

      {/* Loading bar */}
      <div className="mt-10 w-48 h-[1px] bg-accent-light overflow-hidden">
        <div
          ref={loaderBarRef}
          className="h-full bg-secondary origin-left"
        />
      </div>
    </div>
  );
}
