"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { IMAGES } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax and fade effects on scroll
    if (!containerRef.current || !imageRef.current || !overlayRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Image zooms in and moves down slowly (parallax)
    tl.to(imageRef.current, {
      yPercent: 30,
      scale: 1.1,
      ease: "none",
    }, 0);

    // Overlay gets darker
    tl.to(overlayRef.current, {
      opacity: 0.8,
      ease: "none",
    }, 0);

    // Content moves up and fades out
    if (contentRef.current) {
      tl.to(contentRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: "none",
      }, 0);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with GSAP initial scale down animation */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          ref={imageRef}
          src={IMAGES.hero}
          alt="Luxury Indian Wedding Celebration"
          fill
          priority
          className="object-cover animate-image-scale-down"
          sizes="100vw"
          quality={90}
          style={{ transformOrigin: "center center" }}
        />
        {/* Animated Particles/Dust (CSS) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-secondary rounded-full filter blur-[1px] animate-[particle-float_8s_ease-in-out_infinite]" />
          <div className="absolute top-[60%] left-[30%] w-3 h-3 bg-white rounded-full filter blur-[2px] animate-[particle-float_12s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-secondary rounded-full filter blur-[1px] animate-[particle-float_10s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[70%] right-[10%] w-4 h-4 bg-white rounded-full filter blur-[3px] animate-[particle-float_15s_ease-in-out_infinite_3s]" />
        </div>
        <div ref={overlayRef} className="absolute inset-0 bg-dark/40 transition-opacity duration-1000" />
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16">
        
        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
          <p className="subheading text-secondary animate-[slideUp_1s_ease-out_2s_both]">
            India&apos;s Premier Wedding Planners
          </p>
        </div>

        {/* Headline with TextReveal */}
        <h1 className="heading-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white max-w-5xl mx-auto mb-8">
          <TextReveal text="Crafting" delay={2.2} />
          <br />
          <TextReveal text="Unforgettable" delay={2.4} />
          <br />
          <span className="italic text-secondary font-light">
            <TextReveal text="Wedding Experiences" delay={2.6} />
          </span>
        </h1>

        {/* Magnetic Button */}
        <div className="mt-8 animate-[fadeIn_1s_ease-out_3s_both]">
          <MagneticButton 
            strength={0.4}
            className="px-10 py-4 border border-secondary/50 text-white hover:bg-secondary/10 hover:border-secondary backdrop-blur-sm rounded-full text-sm font-[family-name:var(--font-subheading)] uppercase tracking-[0.2em] transition-all"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discover Our World
          </MagneticButton>
        </div>
      </div>

      {/* Floating Stats */}
      <div 
        ref={statsRef}
        className="absolute bottom-12 left-0 right-0 z-10 hidden md:block animate-[fadeIn_1s_ease-out_3.5s_both]"
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-white/80">
          <div className="flex gap-12">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-2xl text-white">500+</p>
              <p className="text-xs uppercase tracking-widest text-secondary mt-1 font-[family-name:var(--font-subheading)]">Weddings</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-2xl text-white">50+</p>
              <p className="text-xs uppercase tracking-widest text-secondary mt-1 font-[family-name:var(--font-subheading)]">Destinations</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
            <ChevronDown className="w-4 h-4 text-secondary animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Background scaling CSS animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes image-scale-down {
          from { transform: scale(1.2); }
          to { transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-image-scale-down {
          animation: image-scale-down 4s ease-out forwards;
        }
      `}} />
    </section>
  );
}
