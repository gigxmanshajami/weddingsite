"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate script heading
      if (scriptRef.current) {
        gsap.fromTo(
          scriptRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Animate title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
            },
          }
        );
      }

      // Animate divider
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
            },
          }
        );
      }

      // Animate paragraphs
      [para1Ref, para2Ref].forEach((ref, i) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-background pt-24 md:pt-32 pb-20 lg:py-40 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* Script heading */}
        <span
          ref={scriptRef}
          className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-primary/80 mb-2"
        >
          Crafting
        </span>

        {/* Bold uppercase title */}
        <h2
          ref={titleRef}
          className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-dark mb-10"
        >
          EXTRAORDINARY JOURNEYS
        </h2>


        {/* First paragraph */}
        <p
          ref={para1Ref}
          className="text-black text-base md:text-lg leading-[1.9] mb-10 max-w-6xl mx-auto"
        >
          At                We don&apos;t just plan weddings; we design memories that resonate through generations. Our commitment to excellence, meticulous attention to detail, and passion for creating beauty ensure that your celebration is nothing short of perfection. your unique narrative. From awe-inspiring floral installations to intricately crafted architectural stages, our team transforms spaces into ethereal sanctuaries. With a masterful blend of meticulous planning and limitless creativity, we ensure every detail resonates with sophistication and grace.
        </p>

        {/* Second paragraph */}
        <p
          ref={para2Ref}
          className="text-black text-base md:text-lg leading-[1.9] max-w-6xl mx-auto"
        >
          Your journey with us is defined by seamless execution and absolute peace of mind. Our seasoned professionals manage every fleeting moment, allowing you to immerse yourself entirely in the magic of your day. From the very first steps down the aisle to the final toast of the evening, we cultivate an atmosphere of pure enchantment. Trust our expertise to elevate your aspirations, turning a beautiful vision into an extraordinary legacy. Step into a world of unparalleled elegance with Dream Moments.
        </p>
      </div>
    </section>
  );
}
