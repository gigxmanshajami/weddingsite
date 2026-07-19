"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "@/lib/constants";
import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowUpRight } from "lucide-react";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

const services = [
  {
    title: "Destination Weddings",
    desc: "From the majestic palaces of Udaipur to the serene beaches of Goa, we manage end-to-end logistics for flawless destination celebrations.",
    image: IMAGES.destinations.udaipur,
  },
  {
    title: "Bespoke Design",
    desc: "Our design house creates immersive environments. We handle floral architecture, lighting design, and custom structures.",
    image: IMAGES.gallery.haldi[0],
  },
  {
    title: "Guest Hospitality",
    desc: "Dedicated hospitality teams providing 24/7 concierge services, luxury transport, and personalized welcome experiences.",
    image: IMAGES.gallery.wedding[1],
  },
  {
    title: "Entertainment",
    desc: "Curating world-class artists, from traditional folk performances to international celebrity appearances.",
    image: IMAGES.gallery.sangeet[0],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Staggered 3D card reveal
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 100,
        rotationX: 15,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32 bg-accent-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <p className="subheading text-secondary mb-4"><TextReveal text="" /></p>
          <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl text-dark">
            <span className="italic">Signature</span> Services
          </h2>
          <AnimatedDivider type="line" className="mt-8 mb-0" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <div
              key={i}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer tilt-card border border-border shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Arrow slide on hover */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="p-8 lg:p-10 relative overflow-hidden">
                {/* Moving background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light/0 via-secondary/5 to-accent-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                <h3 className="heading-lg text-2xl text-dark mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed relative z-10">
                  {service.desc}
                </p>

                {/* Gold border bottom animates on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
