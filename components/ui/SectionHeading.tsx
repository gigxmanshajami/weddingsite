"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  /** Script font word displayed above the title (e.g. "Curating") */
  scriptText?: string;
  /** The old label prop — now renders as scriptText if scriptText is not set */
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeading({
  scriptText,
  label,
  title,
  description,
  className,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  // Use scriptText if provided, otherwise convert label to script style
  const displayScript = scriptText || label || "";

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
      {/* Script font heading */}
      {displayScript && (
        <span
          className={cn(
            "block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl mb-1",
            light ? "text-secondary-light/80" : "text-primary/80"
          )}
        >
          {displayScript}
        </span>
      )}

      {/* Bold uppercase title */}
      <h2
        className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-black mb-10"
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
    </motion.div>
  );
}
