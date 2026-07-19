"use client";

import { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { COMPANY, BUDGET_OPTIONS, GUEST_OPTIONS, IMAGES } from "@/lib/constants";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

const inputStyles =
  "w-full px-5 py-4 rounded-xl bg-white/40 border border-secondary/20 text-dark placeholder:text-dark/40 focus:outline-none focus:border-secondary focus:bg-white/60 transition-all font-[family-name:var(--font-body)] text-sm backdrop-blur-sm";

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
    <section id="contact" className="relative min-h-screen py-24 md:py-32 lg:py-0 overflow-hidden flex items-center">
      
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

      <div className="relative z-10 w-full max-w-[90rem] mx-auto lg:h-[90vh] flex flex-col lg:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white/40 lg:rounded-[40px] overflow-hidden backdrop-blur-xl border border-white">
        
        {/* Left Side: Luxury Image & Info */}
        <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-full">
          <Image
            src={IMAGES.contactCta}
            alt="Luxury Indian Wedding Couple"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 gradient-overlay" />
          
          <div className="absolute inset-0 p-10 lg:p-16 flex flex-col justify-end text-white">
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
        </div>

        {/* Right Side: Glass Form */}
        <div className="lg:w-7/12 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <p className="subheading text-secondary mb-3">BEGIN THE JOURNEY</p>
          <h2 className="heading-lg text-4xl md:text-5xl text-dark mb-10">
            Book a <span className="italic">Consultation</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Full Name *</label>
                <input required type="text" placeholder="Your name" className={inputStyles} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Email *</label>
                <input required type="email" placeholder="you@email.com" className={inputStyles} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Phone *</label>
                <input required type="tel" placeholder="+91 XXXX XXXXX" className={inputStyles} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Wedding Date</label>
                <input type="date" className={inputStyles} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Budget Range</label>
                <select className={cn(inputStyles, "appearance-none cursor-pointer")}>
                  <option value="">Select range</option>
                  {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Guest Count</label>
                <select className={cn(inputStyles, "appearance-none cursor-pointer")}>
                  <option value="">Select count</option>
                  {GUEST_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-xs uppercase tracking-widest text-dark/60 font-semibold">Tell us about your vision</label>
              <textarea rows={3} placeholder="Locations you're considering, styles you love..." className={cn(inputStyles, "resize-none")} />
            </div>

            <div className="pt-6">
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
          </form>
        </div>

      </div>
    </section>
  );
}
