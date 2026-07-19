"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/lib/constants";
import { FloralDivider } from "@/components/decorative/FloralDivider";

export function ContactCTA() {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.contactCta}
          alt="Luxury wedding celebration"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FloralDivider color="#D4AE74" className="mb-8" />

          <p className="font-[family-name:var(--font-subheading)] text-secondary-light text-xs sm:text-sm uppercase tracking-[0.4em] mb-6">
            Begin Your Journey
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight">
            Let&apos;s Plan Your
            <br />
            <span className="italic">Dream Wedding</span>
          </h2>

          <p className="mt-6 text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Every great celebration starts with a conversation. Tell us about your vision, and we&apos;ll make it extraordinary.
          </p>

          <div className="mt-10">
            <Button
              variant="gold"
              size="lg"
              showArrow
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Consultation
            </Button>
          </div>

          <FloralDivider color="#D4AE74" className="mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
