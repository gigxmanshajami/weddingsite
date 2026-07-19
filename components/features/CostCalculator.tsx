"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calculator, Users, Building2, UtensilsCrossed, Palette, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: number;
  icon?: React.ElementType;
}

const guestOptions: Option[] = [
  { label: "Under 100", value: 100 },
  { label: "100–250", value: 250 },
  { label: "250–500", value: 500 },
  { label: "500–1000", value: 1000 },
  { label: "1000+", value: 1500 },
];

const venueOptions: Option[] = [
  { label: "Banquet Hall", value: 1 },
  { label: "5-Star Hotel", value: 2.5 },
  { label: "Heritage Palace", value: 4 },
  { label: "Beach Resort", value: 3 },
  { label: "Destination", value: 5 },
];

const decorOptions: Option[] = [
  { label: "Elegant", value: 1 },
  { label: "Premium", value: 2 },
  { label: "Luxury", value: 3.5 },
  { label: "Ultra Luxury", value: 5 },
];

export function CostCalculator() {
  const [guests, setGuests] = useState(1);
  const [venue, setVenue] = useState(0);
  const [decor, setDecor] = useState(0);

  const estimatedMin = Math.round(
    (guestOptions[guests]?.value || 100) *
    (venueOptions[venue]?.value || 1) *
    (decorOptions[decor]?.value || 1) *
    800
  );
  const estimatedMax = Math.round(estimatedMin * 1.6);

  const formatCurrency = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
    return `₹${n.toLocaleString("en-IN")}`;
  };

  const OptionButton = ({
    options,
    selected,
    onChange,
  }: {
    options: Option[];
    selected: number;
    onChange: (i: number) => void;
  }) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-all cursor-pointer",
            i === selected
              ? "gradient-primary text-white shadow-md"
              : "bg-white border border-border text-muted hover:border-secondary"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <section id="calculator" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Plan Your Budget"
          title="Wedding Cost Calculator"
          description="Get an estimated budget range for your dream celebration."
        />

        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-border">
            <div className="space-y-8">
              {/* Guests */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-secondary" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-dark">
                    Guest Count
                  </h3>
                </div>
                <OptionButton options={guestOptions} selected={guests} onChange={setGuests} />
              </div>

              {/* Venue */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-secondary" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-dark">
                    Venue Type
                  </h3>
                </div>
                <OptionButton options={venueOptions} selected={venue} onChange={setVenue} />
              </div>

              {/* Decor */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-5 h-5 text-secondary" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-dark">
                    Decor Level
                  </h3>
                </div>
                <OptionButton options={decorOptions} selected={decor} onChange={setDecor} />
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Result */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-secondary" />
                  <span className="text-xs text-muted uppercase tracking-wider">Estimated Budget Range</span>
                </div>
                <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary">
                  {formatCurrency(estimatedMin)} — {formatCurrency(estimatedMax)}
                </div>
                <p className="text-muted text-sm mt-3">
                  *This is an approximate estimate. Get a detailed quote tailored to your needs.
                </p>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    showArrow
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Detailed Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
