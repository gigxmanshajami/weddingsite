"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/lib/constants";
import { FloralDivider } from "@/components/decorative/FloralDivider";

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="/images/3.jpg"
          alt="Luxury wedding celebration"
          fill
          className="object-cover object-center"
          sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <FloralDivider color="#D4AE74" className="mb-8" />

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-secondary-light/80 mb-1"
          >
            Let&apos;s Plan Your
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[2.75rem] uppercase tracking-[2px] font-normal leading-tight text-white"
          >
            Dream Wedding
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-6 text-white/60 text-base md:text-lg max-w-xl mx-auto"
          >
            Every great celebration starts with a conversation. Tell us about your vision, and we&apos;ll make it extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10"
          >
            <Button
              variant="gold"
              size="lg"
              showArrow
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Consultation
            </Button>
          </motion.div>

          <FloralDivider color="#D4AE74" className="mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
