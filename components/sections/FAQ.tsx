"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqItems } from "@/lib/data";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 lg:py-40 bg-accent-light/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Questions & Answers"
          description="Everything you need to know about planning your luxury wedding with us."
        />

        <ScrollReveal>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqItems.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 data-[state=open]:shadow-[0_4px_20px_rgba(200,155,92,0.1)] data-[state=open]:border-secondary/30"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 md:p-7 text-left group cursor-pointer">
                  <span className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-dark pr-4 group-data-[state=open]:text-primary transition-colors">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-border group-data-[state=open]:border-secondary group-data-[state=open]:bg-secondary/10 flex items-center justify-center transition-all">
                    <Plus className="w-4 h-4 text-muted group-data-[state=open]:hidden" />
                    <Minus className="w-4 h-4 text-secondary hidden group-data-[state=open]:block" />
                  </span>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 md:px-7 pb-6 md:pb-7">
                    <div className="w-12 h-[1px] bg-secondary/30 mb-4" />
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  );
}
