"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { weddingStyles } from "@/lib/data";

export function WeddingStyles() {
  return (
    <section id="wedding-styles" className="relative py-28! bg-accent-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          scriptText="Find Your"
          title="Perfect Style"
          description="From royal grandeur to intimate minimalism — we bring every vision to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {weddingStyles.map((style, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 bg-black/50 lg:bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 lg:opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white mb-2 transition-transform duration-500 -translate-y-3 lg:translate-y-0 group-hover:-translate-y-3">
                    {style.name}
                  </h3>
                  {/* Decorative line */}
                  <div className="w-16 lg:w-10 h-[1px] bg-secondary mb-3 transition-all duration-500 group-hover:w-16" />
                  <p className="text-white/80 lg:text-white/0 group-hover:text-white/80 text-sm leading-relaxed transition-all duration-500 max-w-[200px]">
                    {style.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
