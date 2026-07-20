"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "default" | "lg" | "sm";
  showArrow?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", showArrow = false, children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer font-[family-name:var(--font-body)]";

    const variants = {
      primary:
        "bg-black text-white hover:bg-[#111] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 active:translate-y-0",
      outline:
        "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:shadow-[0_8px_30px_rgba(200,155,92,0.3)] hover:-translate-y-0.5",
      ghost:
        "text-secondary hover:bg-secondary/10 hover:-translate-y-0.5",
      gold:
        "gradient-gold text-dark font-bold hover:shadow-[0_8px_30px_rgba(200,155,92,0.4)] hover:-translate-y-0.5 active:translate-y-0",
    };

    const sizes = {
      sm: "px-5 py-2 text-sm",
      default: "px-7 py-3 text-sm",
      lg: "px-10 py-4 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
