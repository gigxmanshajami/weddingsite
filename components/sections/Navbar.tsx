"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial animation for logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 2.2 } // after loading screen
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Dropdown logic removed

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-[51] transition-all duration-500 ease-in-out overflow-hidden",
          isScrolled
            ? "max-h-0 opacity-0"
            : "max-h-10 opacity-100"
        )}
      >
        <div className="bg-dark/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 py-1.5">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 text-[11px] text-white/70 hover:text-secondary transition-colors font-[family-name:var(--font-body)] tracking-wide"
            >
              <Mail className="w-3 h-3" />
              {COMPANY.email}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 text-[11px] text-white/70 hover:text-secondary transition-colors font-[family-name:var(--font-body)] tracking-wide"
            >
              <Phone className="w-3 h-3" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out",
          isScrolled
            ? "top-0 bg-white py-4 shadow-sm"
            : "top-[34px] bg-white py-7 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            ref={logoRef}
            href="#hero"
            className="block origin-left"
          >
            <Image
              src="/logo.png"
              alt={COMPANY.name}
              width={200}
              height={60}
              className="object-contain h-10 w-auto md:h-12"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
              >
                <a
                  href={link.href}
                  className={cn(
                    "relative font-[family-name:var(--font-heading)] text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-300 py-2 group block",
                    "text-dark hover:text-primary"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-500 ease-out group-hover:w-full bg-primary" />
                </a>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors cursor-pointer z-50 relative",
              isScrolled ? "text-dark" : "text-dark"
            )}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/40 backdrop-blur-md z-[55] lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-background z-[60] lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-8 px-8 pb-8 relative">
                {/* Close Button Inside Drawer */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="absolute top-6 right-6 p-2 text-dark hover:text-primary transition-colors z-10"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>

                <nav className="flex-1 space-y-6 mt-16">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                      onClick={() => setIsMobileOpen(false)}
                      className="block font-[family-name:var(--font-heading)] text-3xl text-dark hover:text-primary transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="border-t border-border pt-8 space-y-6">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-3 font-[family-name:var(--font-heading)] text-sm tracking-widest font-semibold text-muted hover:text-primary transition-colors uppercase"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY.phone}
                  </a>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setIsMobileOpen(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
