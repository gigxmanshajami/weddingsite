"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";
import { Star } from "lucide-react";
import { gsap } from "gsap";

export function Testimonials() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // 3D tilt effect on mousemove
    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation based on cursor position relative to center
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          boxShadow: `${-rotateY}px ${rotateX}px 30px rgba(200,155,92,0.15)`,
          duration: 0.5,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 lg:py-40 bg-accent-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <p className="subheading text-secondary mb-4"><TextReveal text="LOVE STORIES" /></p>
          <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl text-dark">
            <span className="italic font-light">Words</span> of Joy
          </h2>
          <AnimatedDivider type="line" className="mt-8 mb-0" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 perspective-1000">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              className="bg-white rounded-3xl p-10 md:p-12 border border-border shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative group transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Quote marks background */}
              <div className="absolute top-10 right-10 text-9xl font-[family-name:var(--font-heading)] text-accent-light leading-none pointer-events-none select-none z-0 transform translate-z-[-20px]">
                &quot;
              </div>

              <div className="relative z-10 transform translate-z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-dark/80 leading-relaxed mb-10 min-h-[120px]">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-border">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] text-xl text-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary text-sm font-[family-name:var(--font-subheading)] tracking-wider mt-1">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
