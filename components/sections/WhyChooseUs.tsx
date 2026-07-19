"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

const stats = [
  { value: 500, suffix: "+", label: "Masterpieces Crafted" },
  { value: 12, suffix: " Years", label: "Of Excellence" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Global Destinations" },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);
  const ringsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Counter animation
    countersRef.current.forEach((counter, i) => {
      const targetValue = stats[i].value;
      const startValue = { val: 0 };

      gsap.to(startValue, {
        val: targetValue,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        onUpdate: () => {
          if (counter) counter.innerText = Math.round(startValue.val).toString();
        },
      });
    });

    // Ring rotation animation on scroll
    gsap.to(ringsRef.current, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-dark text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-dark-royal opacity-90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="subheading text-secondary mb-4"><TextReveal text="OUR LEGACY" /></p>
        <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          <span className="italic font-light">Numbers</span> That Speak
        </h2>
        <AnimatedDivider type="lotus" className="mb-20" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Rotating Ring & Counter */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6">
                <div 
                  ref={el => { if (el) ringsRef.current[i] = el; }}
                  className="absolute inset-0 rounded-full border border-secondary/30 border-t-secondary/80 border-b-secondary/80" 
                />
                <div className="absolute inset-2 rounded-full border border-white/5 border-l-white/20 border-r-white/20 rotate-45" />
                
                <div className="flex items-baseline text-white z-10">
                  <span 
                    ref={el => { if (el) countersRef.current[i] = el; }}
                    className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl"
                  >
                    0
                  </span>
                  <span className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-secondary ml-1">
                    {stat.suffix}
                  </span>
                </div>
              </div>
              
              <h3 className="font-[family-name:var(--font-subheading)] text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 text-center max-w-[150px]">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
