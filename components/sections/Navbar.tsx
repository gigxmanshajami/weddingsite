"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  // Use GSAP for dropdown clip-path animation
  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };
  
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
          isScrolled
            ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.04)] py-4 border-b border-secondary/20"
            : "bg-transparent py-8 border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            ref={logoRef}
            href="#hero"
            className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl tracking-wide origin-left"
          >
            <span className={cn(
              "transition-colors duration-500",
              isScrolled ? "text-primary" : "text-white"
            )}>
              {COMPANY.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => "children" in link ? handleDropdownEnter(link.label) : undefined}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={link.href}
                  className={cn(
                    "relative font-[family-name:var(--font-heading)] text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 py-2 group block",
                    isScrolled ? "text-dark hover:text-primary" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-500 ease-out group-hover:w-full",
                    isScrolled ? "bg-primary" : "bg-white"
                  )} />
                </a>

                {/* GSAP Clip-path Dropdown */}
                {"children" in link && (
                  <div 
                    className={cn(
                      "absolute top-full left-0 mt-4 w-60 glass rounded-xl shadow-2xl overflow-hidden transition-all duration-500 origin-top",
                      activeDropdown === link.label ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                    )}
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="py-2">
                      {link.children.map((child, i) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-6 py-3 text-sm text-dark hover:bg-secondary/10 hover:text-primary transition-colors font-[family-name:var(--font-body)]"
                          style={{
                            transitionDelay: activeDropdown === link.label ? `${i * 50}ms` : '0ms'
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-[family-name:var(--font-heading)] uppercase tracking-widest font-semibold transition-colors",
                isScrolled ? "text-dark" : "text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <Button
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Enquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors cursor-pointer z-50 relative",
              isScrolled || isMobileOpen ? "text-dark" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="fixed inset-0 bg-dark/40 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-background z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                <nav className="flex-1 space-y-6">
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
