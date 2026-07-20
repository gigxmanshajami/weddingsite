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
          Curating
        </span>

        {/* Bold uppercase title */}
        <h2
          ref={titleRef}
          className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-dark mb-10"
        >
          BESPOKE EXPERIENCES
        </h2>


        {/* First paragraph */}
        <p
          ref={para1Ref}
          className="text-black text-base md:text-lg leading-[1.9] mb-10 max-w-6xl mx-auto"
        >
          Dream Moments is a premier luxury wedding planning atelier with a nationwide presence across India. We specialize in curating breathtaking floral artistry, bespoke décor, and immersive event experiences. With an uncompromising dedication to detail, we ensure your celebration transcends the ordinary. From intricately designed centerpieces to magnificent architectural stage setups, our artisans transform any venue into an enchanting sanctuary that beautifully echoes your unique love story. Guided by meticulous planning and visionary creative flair, we bring your grandest dreams to life with effortless sophistication.
        </p>

        {/* Second paragraph */}
        <p
          ref={para2Ref}
          className="text-black text-base md:text-lg leading-[1.9] max-w-6xl mx-auto"
        >
          With Dream Moments at the helm, every fleeting second of your celebration is flawlessly orchestrated. Our collective of seasoned professionals works tirelessly to weave your vision into a captivating reality, leaving no detail to chance. From your first steps down the aisle to the final lingering notes of the evening, we cultivate a magical atmosphere that captivates you and your guests. Entrust us with your journey, and let our expertise and unwavering dedication turn your luxury wedding aspirations into an unforgettable legacy of love. Step into a world of elegance—choose Dream Moments for an experience beyond compare.
        </p>
      </div>
    </section>
  );
}
