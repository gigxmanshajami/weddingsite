"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { COMPANY, BUDGET_OPTIONS, GUEST_OPTIONS, IMAGES } from "@/lib/constants";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

const inputStyles =
  "w-full px-0 py-3 bg-transparent border-b border-dark/20 text-dark placeholder:text-dark/40 focus:outline-none focus:border-secondary transition-colors font-[family-name:var(--font-body)] text-base";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-accent-light/30 py-24 px-4 sm:px-6 lg:px-8">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-accent-light opacity-50" />
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent animate-[shimmer_15s_linear_infinite] rounded-full blur-3xl opacity-60" />
      </div>

      {/* Floating Flowers (CSS) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-12 h-12 bg-secondary/10 rounded-full blur-[2px] animate-[particle-float_12s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] right-[10%] w-8 h-8 bg-primary/5 rounded-full blur-[1px] animate-[particle-float_15s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-secondary/5 rounded-full blur-[3px] animate-[particle-float_18s_ease-in-out_infinite_4s]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
      >

        {/* Left Side: Luxury Image & Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="lg:w-5/12 relative min-h-[550px] lg:min-h-full flex flex-col justify-end p-8 md:p-12 lg:p-16"
        >
          <Image
            src={'/images/4.jpg'}
            alt="Luxury Indian Wedding Couple"
            fill
            className="object-cover object-center z-0"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 gradient-overlay z-10" />

          <div className="relative z-20 flex flex-col justify-end text-white mt-auto pt-24">
            <h3 className="heading-xl text-4xl mb-4">Your Vision, Our Canvas</h3>
            <p className="text-white/80 font-light mb-10 max-w-sm">
              We take a limited number of commissions each year to ensure uncompromising dedication to your celebration.
            </p>

            <div className="space-y-6 border-t border-white/20 pt-8">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-light">{COMPANY.email}</span>
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-light">{COMPANY.phone}</span>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-light text-white/80">42, Connaught Place, New Delhi</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glass Form */}
        <div className="lg:w-7/12 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-primary/80 mb-1"
          >
            Book a
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-black mb-10"
          >
            Consultation
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Full Name *</label>
                <input required type="text" placeholder="Your name" className={inputStyles} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Email *</label>
                <input required type="email" placeholder="you@email.com" className={inputStyles} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Phone *</label>
                <input required type="tel" placeholder="+91 XXXX XXXXX" className={inputStyles} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Wedding Date</label>
                <input type="date" className={inputStyles} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Budget Range</label>
                <select className={cn(inputStyles, "cursor-pointer")}>
                  <option value="">Select range</option>
                  {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Guest Count</label>
                <select className={cn(inputStyles, "cursor-pointer")}>
                  <option value="">Select count</option>
                  {GUEST_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-semibold">Tell us about your vision</label>
              <textarea rows={3} placeholder="Locations you're considering, styles you love..." className={cn(inputStyles, "resize-none")} />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12"
              >
                {submitted ? "Message Sent ✓" : isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </div>
          </motion.form>
        </div>

      </motion.div>
    </section>
  );
}
