"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { TextReveal } from "@/components/ui/TextReveal";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";
import { Star } from "lucide-react";
import { gsap } from "gsap";

export function Testimonials() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (!container) return;

        const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 + 32 : 500 + 32;
        const oneSetWidth = container.scrollWidth / 3;

        // If we reach the 3rd set, instantly jump back to the identical 2nd set
        if (container.scrollLeft >= oneSetWidth * 2 - scrollAmount) {
          container.scrollLeft = container.scrollLeft - oneSetWidth;
        }

        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }, 1000); // 1 second interval
    };

    startAutoScroll();

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.style.cursor = "grabbing";
      container.style.scrollBehavior = "auto"; // Disable smooth scroll while dragging
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeaveDrag = () => {
      isDown = false;
      container.style.cursor = "grab";
      startAutoScroll();
    };

    const handleMouseUp = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseEnter = () => {
      clearInterval(intervalId);
      container.style.cursor = "grab";
    };

    const handleTouchStart = () => clearInterval(intervalId);
    const handleTouchEnd = () => startAutoScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeaveDrag);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeaveDrag);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);

      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

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
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)",
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
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-full mx-auto ">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <span className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-secondary mb-1">
            Heartfelt Stories
          </span>
          <h2 className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-white mb-10">
            From Our Beloved Clients
          </h2>
          <AnimatedDivider type="line" className="mt-8 mb-0" color="rgba(255,255,255,0.2)" />
        </motion.div>

        {/* Horizontal Scroll Container with Edge Fades */}
        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-12 pt-4 px-12 md:px-32 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={i}
                ref={el => { if (el) cardsRef.current[i] = el; }}
                className="bg-dark backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 shadow-xl relative group transform-gpu snap-center shrink-0 w-[85vw] md:w-[600px] lg:w-[500px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Quote marks background */}
                <div className="absolute top-10 right-10 text-9xl font-[family-name:var(--font-heading)] text-white/5 leading-none pointer-events-none select-none z-0 transform translate-z-[-20px]">
                  &quot;
                </div>

                <div className="relative z-10 transform translate-z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-white/90 leading-relaxed mb-10 min-h-[120px]">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] text-xl text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm font-[family-name:var(--font-subheading)] tracking-wider mt-1">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
