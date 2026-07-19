"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  splitBy?: "word" | "char";
  delay?: number;
  trigger?: boolean;
}

export function TextReveal({
  text,
  className,
  as: Tag = "span",
  splitBy = "word",
  delay = 0,
  trigger = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(".reveal-item");
    
    gsap.set(elements, { 
      yPercent: 100, 
      opacity: 0,
      filter: "blur(10px)"
    });

    const anim = gsap.to(elements, {
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      stagger: splitBy === "char" ? 0.03 : 0.1,
      ease: "power4.out",
      delay: trigger ? 0 : delay,
      scrollTrigger: trigger
        ? {
            trigger: containerRef.current,
            start: "top 85%",
          }
        : undefined,
    });

    return () => {
      anim.kill();
    };
  }, [splitBy, delay, trigger]);

  const items = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <Tag ref={containerRef} className={cn("inline-block", className)}>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingRight: splitBy === "word" ? "0.25em" : "0" }}
        >
          <span className="reveal-item inline-block">
            {item === " " && splitBy === "char" ? "\u00A0" : item}
          </span>
        </span>
      ))}
    </Tag>
  );
}
