"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Palette,
  Users,
  Music,
  Briefcase,
  Compass
} from "lucide-react";

const services = [
  {
    title: "Destination Weddings",
    desc: "From majestic palaces to serene beaches, we manage end-to-end logistics for flawless destination celebrations.",
    icon: MapPin,
  },
  {
    title: "Bespoke Décor",
    desc: "Our design house creates immersive environments with floral architecture, lighting design, and custom structures.",
    icon: Palette,
  },
  {
    title: "Guest Hospitality",
    desc: "Dedicated teams providing 24/7 concierge services, luxury transport, and personalized welcome experiences.",
    icon: Users,
  },
  {
    title: "Entertainment",
    desc: "Curating world-class artists, from traditional folk performances to international celebrity appearances.",
    icon: Music,
  },
  {
    title: "Logistics & Guest Management",
    desc: "Flawless execution of travel, accommodations, and event flow, ensuring every guest feels like royalty.",
    icon: Compass,
  },
  {
    title: "Vendor Management",
    desc: "We coordinate with top-tier global vendors, managing contracts and deliverables for a seamless experience.",
    icon: Briefcase,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function Services() {
  return (
    <section id="services" className="relative bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Service details row — dynamic icons + titles + descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16 max-w-7xl mx-auto">
          {services.map((service, i) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group text-center flex flex-col items-center px-6 py-12 rounded-3xl hover:bg-white/5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer"
              >
                <div className="relative w-20 h-20 mb-8 rounded-full border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500 shadow-sm group-hover:shadow-[0_10px_30px_rgba(158,115,30,0.3)]">
                  {/* Decorative expanding outer ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-secondary/50 scale-100 group-hover:scale-[1.3] transition-all duration-700 opacity-0 group-hover:opacity-100" />

                  <IconComp className="w-8 h-8 text-secondary group-hover:text-black transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-[14px] uppercase tracking-[0.15em] text-white group-hover:text-secondary transition-colors duration-500 font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/60 text-[15px] leading-[1.8] max-w-xs group-hover:text-white/90 transition-colors duration-500">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
