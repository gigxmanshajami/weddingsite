"use client";

import Script from "next/script";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 md:mb-24">
          <p className="subheading text-secondary mb-4"><TextReveal text="OUR PORTFOLIO" /></p>
          <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl text-dark">
            <span className="italic font-light">Moments</span> in Time
          </h2>
          <AnimatedDivider type="mandala" />
        </div>

        {/* Elfsight Instagram Feed */}
        <div className="elfsight-app-d7bb5052-32b6-4b10-b998-378f1f1e264e" data-elfsight-app-lazy></div>
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

      </div>
    </section>
  );
}
