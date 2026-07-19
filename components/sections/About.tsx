"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "@/lib/constants";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";
import { TextReveal } from "@/components/ui/TextReveal";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current || !imageRef.current || !contentRef.current) return;

    // Pin the image on the left while scrolling the text on the right
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 1024px)": function() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });

        // Image slow scale during pinned scroll
        tl.to(imageRef.current, {
          scale: 1.15,
          ease: "none",
        });

        // Pin the left column
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: imageWrapperRef.current,
          pinSpacing: false,
        });
      }
    });

    // Animate text cards fading in as they scroll up
    const cards = contentRef.current.querySelectorAll(".about-card");
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Pinned Left Side - Image */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-screen w-full" ref={imageWrapperRef}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              ref={imageRef}
              src={IMAGES.about}
              alt="Luxury wedding setup"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-transparent to-transparent opacity-40" />
          </div>
        </div>

        {/* Scrolling Right Side - Content */}
        <div ref={contentRef} className="lg:w-1/2 px-6 lg:px-16 xl:px-24 py-20 lg:py-32 flex flex-col justify-center">
          
          <div className="about-card mb-20">
            <p className="subheading text-secondary mb-6"><TextReveal text="WHO WE ARE" /></p>
            <h2 className="heading-lg text-4xl lg:text-5xl text-dark leading-tight mb-8">
              Curating <span className="italic text-primary">Masterpieces</span> of Love
            </h2>
            <AnimatedDivider type="mandala" />
            <p className="text-muted leading-relaxed text-lg">
              Since 2012, Dream Moments has been the quiet architect behind India's most breathtaking celebrations. We don't just plan weddings; we craft immersive experiences that reflect the unique heritage and romance of our couples.
            </p>
          </div>

          <div className="about-card mb-20 pl-8 lg:pl-12 border-l border-secondary/30 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-secondary origin-top transform scale-y-0 animate-[scaleY_1.5s_ease-out_forwards_scrollTrigger]" />
            <h3 className="heading-lg text-2xl text-primary mb-4">The Philosophy</h3>
            <p className="text-muted leading-relaxed">
              True luxury lies in the unseen details. It's the seamless flow of events, the personalized fragrance in the hallways, and the subtle lighting that makes every photograph a painting. We believe in elegance through restraint.
            </p>
          </div>

          <div className="about-card">
            <h3 className="heading-lg text-2xl text-primary mb-4">The Experience</h3>
            <p className="text-muted leading-relaxed mb-10">
              From the palaces of Rajasthan to the beaches of Goa, our network of elite vendors and our meticulous design team ensure that your celebration is nothing short of extraordinary. Welcome to the new standard of Indian weddings.
            </p>
            <AnimatedDivider type="lotus" />
          </div>

        </div>
      </div>
    </section>
  );
}
