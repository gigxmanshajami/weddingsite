"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
  delay?: number;
}

export function Card({ className, children, hover = true, glass = false, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-500",
        glass
          ? "glass"
          : "bg-white border border-border shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        hover && "hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(200,155,92,0.15)] hover:border-secondary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
