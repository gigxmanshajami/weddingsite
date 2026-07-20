"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted || isTouch) return;
    if (!cursorDotRef.current || !cursorRingRef.current) return;

    // Set initial position outside viewport to hide before mouse moves
    gsap.set([cursorDotRef.current, cursorRingRef.current], { xPercent: -50, yPercent: -50 });
    
    // Create GSAP quickSetters for better performance
    const xDotSet = gsap.quickSetter(cursorDotRef.current, "x", "px");
    const yDotSet = gsap.quickSetter(cursorDotRef.current, "y", "px");
    const xRingSet = gsap.quickSetter(cursorRingRef.current, "x", "px");
    const yRingSet = gsap.quickSetter(cursorRingRef.current, "y", "px");

    let mouse = { x: 0, y: 0 };
    let ringPos = { x: 0, y: 0 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    // Smoothly follow the mouse with the outer ring
    gsap.ticker.add(() => {
      // Dot follows immediately
      xDotSet(mouse.x);
      yDotSet(mouse.y);
      
      // Ring follows with easing
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      ringPos.x += (mouse.x - ringPos.x) * dt;
      ringPos.y += (mouse.y - ringPos.y) * dt;
      xRingSet(ringPos.x);
      yRingSet(ringPos.y);
    });

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Expand on links/buttons
    const handleLinkHoverIn = () => {
      gsap.to(cursorRingRef.current, { scale: 1.5, opacity: 0.3, duration: 0.3, ease: "power2.out" });
    };
    const handleLinkHoverOut = () => {
      gsap.to(cursorRingRef.current, { scale: 1, opacity: 0.6, duration: 0.3, ease: "power2.out" });
    };

    const addLinkListeners = () => {
      document.querySelectorAll("a, button, input, textarea, select, .magnetic-btn").forEach((el) => {
        el.addEventListener("mouseenter", handleLinkHoverIn);
        el.addEventListener("mouseleave", handleLinkHoverOut);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // Adding to current elements
    addLinkListeners();
    
    // Observer for new elements
    const observer = new MutationObserver(() => {
      addLinkListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [isMounted, isTouch]);

  if (!isMounted || isTouch) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999]"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 border border-secondary/60 rounded-full pointer-events-none z-[9998]"
        style={{ opacity: isVisible ? 0.6 : 0, transition: "opacity 0.3s ease" }}
      />
    </>
  );
}
