"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Lotus } from "@/components/decorative/Lotus";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
  showOrnament?: boolean;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
  showOrnament = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block font-[family-name:var(--font-subheading)] text-xs md:text-sm uppercase tracking-[0.3em] mb-4",
            light ? "text-secondary-light" : "text-secondary"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 md:mt-6 text-base md:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
      {showOrnament && (
        <div className={cn("mt-6 md:mt-8", align === "center" && "flex justify-center")}>
          <Lotus size={50} color={light ? "#D4AE74" : "#C89B5C"} />
        </div>
      )}
    </motion.div>
  );
}
