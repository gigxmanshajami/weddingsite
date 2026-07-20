"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";

const slides = [
  {
    image: '/images/12.png',
    scriptText: "Crafting",
    title: "Unforgettable\nWedding Experiences",
  },
  {
    image: '/images/13.png',
    scriptText: "Bringing",
    title: "Dreams\nTo Life",
  },
  {
    image: '/images/10.png',
    scriptText: "Celebrating",
    title: "Love\nIn Grand Style",
  },
  {
    image: '/images/5.png',
    scriptText: "Creating",
    title: "Timeless\nMemories",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance carousel
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  // Parallax on scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    if (contentRef.current) {
      tl.to(contentRef.current, {
        yPercent: -30,
        opacity: 0,
        ease: "none",
      }, 0);
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[100svh] lg:h-auto lg:aspect-[1672/941] overflow-hidden"
    >
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentSlide ? 1 : 0, zIndex: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={`Wedding slide ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover! transition-transform duration-[8000ms] ease-out"
            sizes="100vw"
            quality={100}
            style={{
              transform: index === currentSlide ? "scale(1.08)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* White fade overlay — Desktop */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 25%, rgba(255,255,255,0.3) 45%, transparent 60%)",
        }}
      />
      {/* White fade overlay — Mobile (Increased fade to the right) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none block md:hidden"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.5) 80%, transparent 100%)",
        }}
      />

      {/* Content — positioned on the left */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center pt-24 lg:pt-0"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-lg">
            {/* Script heading — animated per slide */}
            <span
              key={`script-${currentSlide}`}
              className="block font-[family-name:var(--font-script)] text-6xl md:text-7xl lg:text-8xl text-primary/80 mb-0 leading-[0.9] animate-hero-text-in"
            >
              {slides[currentSlide].scriptText}
            </span>

            {/* Elegant uppercase title */}
            <h1
              key={`title-${currentSlide}`}
              className="font-[family-name:var(--font-heading)] font-normal font-[math]!  text-4xl md:text-5xl lg:text-[3.5rem] uppercase tracking-[3px] leading-[1.1] text-dark mt-2 animate-hero-text-in"
              style={{ animationDelay: "0.15s" }}
            >
              {slides[currentSlide].title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < slides[currentSlide].title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Carousel navigation arrows */}
      <div className="absolute z-10 bottom-28 md:bottom-1/2 md:translate-y-1/2 left-0 right-0 pointer-events-none">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <button
            onClick={prevSlide}
            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white  flex items-center justify-center hover:bg-white hover:border-dark/40 transition-all duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10 text-dark" strokeWidth={1} />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-white hover:border-dark/40 transition-all duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10 text-dark" strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Arrow/Chevron clip at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,80 L1440,80 L1440,0 L760,0 L720,60 L680,0 Z"
            fill="#FFFDFB"
          />
        </svg>
      </div>

      {/* CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes hero-text-in {
          from {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-hero-text-in {
          animation: hero-text-in 0.8s ease-out both;
        }
      `}} />
    </section>
  );
}
