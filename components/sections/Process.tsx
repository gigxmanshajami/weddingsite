"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { processSteps } from "@/lib/data";
import {
  MessageCircle, ClipboardList, Building2, Palette, CheckCircle, Heart,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "message-circle": MessageCircle,
  "clipboard-list": ClipboardList,
  "building-2": Building2,
  palette: Palette,
  "check-circle": CheckCircle,
  heart: Heart,
};

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          scriptText="Our"
          title="Process"
          description="A seamless journey from your first dream to your forever moment."
        />

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[52px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || Heart;
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="text-center group">
                      {/* Number */}
                      <div className="font-[family-name:var(--font-subheading)] text-xs text-secondary tracking-widest mb-3">
                        {step.number}
                      </div>

                      {/* Icon circle */}
                      <div className="w-[72px] h-[72px] mx-auto rounded-full gradient-gold flex items-center justify-center shadow-[0_4px_20px_rgba(200,155,92,0.25)] mb-5 transition-transform duration-300 group-hover:scale-110 relative z-10">
                        <Icon className="w-7 h-7 text-dark" />
                      </div>

                      <h3 className="font-[family-name:var(--font-heading)] text-xl text-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Heart;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-dark" />
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-[1px] flex-1 mt-2 bg-secondary/30" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="font-[family-name:var(--font-subheading)] text-xs text-secondary tracking-widest">
                      {step.number}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl text-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
