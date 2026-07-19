"use client";

import Image from "next/image";
import { COMPANY, NAV_LINKS, IMAGES } from "@/lib/constants";
import { Mandala } from "@/components/decorative/Mandala";
import { Heart } from "lucide-react";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

const footerServices = [
  "Destination Weddings", "Palace Weddings", "Beach Celebrations",
  "Floral Design", "Entertainment", "Guest Hospitality",
];

const footerDestinations = [
  "Udaipur", "Jaipur", "Jodhpur", "Goa", "Kerala", "Mussoorie",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark text-white/70 overflow-hidden">
      {/* Dark Royal Gradient Background */}
      <div className="absolute inset-0 gradient-dark-royal opacity-90 z-0" />

      {/* Mandala Watermark */}
      <div className="absolute -bottom-[20%] -right-[10%] opacity-5 pointer-events-none z-0 transform rotate-45 scale-150">
        <Mandala size={800} color="#C89B5C" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#hero" className="font-[family-name:var(--font-heading)] text-4xl text-white block mb-6">
              {COMPANY.name}
            </a>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-sm">
              Architects of luxury celebrations. Crafting unparalleled wedding experiences for the world's most discerning couples across India's most majestic destinations.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-sm">
              <h4 className="subheading text-secondary mb-4">THE DREAM MOMENTS LIST</h4>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors text-sm font-light"
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-3 text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="subheading text-secondary mb-6">EXPLORE</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-secondary transition-colors font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="subheading text-secondary mb-6">SERVICES</h4>
            <ul className="space-y-4">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-white/60 hover:text-secondary transition-colors font-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="subheading text-secondary mb-6">DESTINATIONS</h4>
            <ul className="space-y-4">
              {footerDestinations.map((dest) => (
                <li key={dest}>
                  <a href="#destinations" className="text-sm text-white/60 hover:text-secondary transition-colors font-light">
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons / Instagram Preview */}
          <div className="lg:col-span-2">
            <h4 className="subheading text-secondary mb-6">CONNECT</h4>
            <div className="flex gap-4 mb-8">
              <a href={COMPANY.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors">Instagram</a>
              <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors">Facebook</a>
              <a href={COMPANY.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors">YouTube</a>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {IMAGES.instagram.slice(0, 4).map((src, i) => (
                <a key={i} href={COMPANY.socials.instagram} target="_blank" rel="noopener noreferrer" className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image src={src} alt="Instagram" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="100px" />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Line Divider */}
        <div className="mt-20">
          <AnimatedDivider type="line" color="#C89B5C" className="opacity-30 my-8" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-light text-center md:text-left">
            © {year} {COMPANY.name}. All rights reserved. Registered in India.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/40 font-light">
            Designed with <Heart className="w-3 h-3 text-secondary fill-secondary" /> by {COMPANY.name} Studio
          </div>
        </div>
      </div>
    </footer>
  );
}
