"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lotus } from "./Lotus";
import { Mandala } from "./Mandala";

interface AnimatedDividerProps {
  type?: "lotus" | "mandala" | "line";
  color?: string;
  className?: string;
}

export function AnimatedDivider({ type = "line", color = "#C89B5C", className = "" }: AnimatedDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    // Draw the line from center outwards
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      tl.to(pathRef.current, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }, 0);
    }

    // Spin or fade the icon
    if (iconRef.current) {
      gsap.set(iconRef.current, { scale: 0, opacity: 0, rotation: type === "mandala" ? -180 : 0 });
      tl.to(iconRef.current, { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }, 0.5);
    }
    
    return () => {
      tl.kill();
    };
  }, [type]);

  return (
    <div ref={containerRef} className={`w-full flex items-center justify-center my-16 opacity-80 ${className}`}>
      <svg className="w-1/3 max-w-[200px]" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
        <path 
          ref={pathRef}
          d="M100 1L0 1" 
          stroke={color} 
          strokeWidth="1" 
          fill="none" 
          className="svg-draw"
          style={{ transformOrigin: "right center" }}
        />
      </svg>
      
      <div ref={iconRef} className="mx-6">
        {type === "lotus" && <Lotus color={color} size={30} />}
        {type === "mandala" && <Mandala color={color} size={40} />}
        {type === "line" && <div className="w-2 h-2 rounded-full rotate-45 border border-secondary" style={{ borderColor: color }} />}
      </div>
      
      <svg className="w-1/3 max-w-[200px]" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
        <path 
          d="M0 1L100 1" 
          stroke={color} 
          strokeWidth="1" 
          fill="none" 
          className="svg-draw"
          style={{ transformOrigin: "left center" }}
        />
      </svg>
    </div>
  );
}
