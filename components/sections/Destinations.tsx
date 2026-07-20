"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/lib/data";
import { MapPin } from "lucide-react";

export function Destinations() {
  return (
    <section id="destinations" className="relative py-15 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          scriptText="Dream"
          title="Destinations"
          description="India's most spectacular wedding destinations, each offering a unique canvas for your celebration."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                <Image
                  src={dest.image}
                  alt={`${dest.name} wedding destination`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay - Hidden initially, fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Content - Hidden initially, fades in on hover, aligned to bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 z-20 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-secondary text-xs uppercase tracking-wider font-[family-name:var(--font-subheading)]">
                      {dest.tagline}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {dest.description}
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
