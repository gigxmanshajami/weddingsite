"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY, NAV_LINKS, IMAGES } from "@/lib/constants";
import { Mandala } from "@/components/decorative/Mandala";
import { Heart } from "lucide-react";
import { AnimatedDivider } from "@/components/decorative/AnimatedDivider";

const footerServices = [
  "Destination Weddings", "Palace Weddings", "Beach Celebrations",
  "Floral Design", "Entertainment", "Guest Hospitality",
];

const footerDestinations = [
  "Delhi", "Gurugram", "Noida", "Ahmedabad", "Faridabad", "Ghaziabad",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Mandala Watermark */}
      <div className="absolute -bottom-[20%] -right-[10%] opacity-5 pointer-events-none z-0 transform rotate-45 scale-150">
        <Mandala size={800} color="#C89B5C" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            className="lg:col-span-4"
          >
            <a href="#hero" className="block mb-6">
              <Image
                src="/logo.png"
                alt={COMPANY.name}
                width={200}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </a>
            <p className="text-white text-sm leading-relaxed max-w-sm mt-6 font-light">
              We don&apos;t just plan weddings; we craft legacies of love. Let&apos;s create something extraordinary together.
            </p>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
            className="lg:col-span-2"
          >
            <h4 className="subheading text-secondary mb-6">EXPLORE</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white hover:text-secondary transition-colors font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={2}
            className="lg:col-span-2"
          >
            <h4 className="subheading text-secondary mb-6">SERVICES</h4>
            <ul className="space-y-4">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-white hover:text-secondary transition-colors font-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={3}
            className="lg:col-span-2"
          >
            <h4 className="subheading text-secondary mb-6">DESTINATIONS</h4>
            <ul className="space-y-4">
              {footerDestinations.map((dest) => (
                <li key={dest}>
                  <a href="#destinations" className="text-sm text-white hover:text-secondary transition-colors font-light">
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Icons & Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={4}
            className="lg:col-span-2"
          >
            <h4 className="subheading text-secondary mb-6">CONNECT</h4>
            <div className="flex flex-col gap-4 mb-8">
              <a href={COMPANY.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-secondary transition-colors group" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <span className="text-sm font-light group-hover:text-secondary">Instagram</span>
              </a>
              <a href="https://wa.me/919953913445" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-secondary transition-colors group" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-sm font-light group-hover:text-secondary">+91 99539 13445</span>
              </a>
            </div>
          </motion.div>
        </div>


        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white font-light text-center md:text-left">
            © {year} {COMPANY.name}. All rights reserved. Registered in India.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-white font-light">
            <span>
              Developed by <a href="https://www.mxova.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-[family-name:var(--font-heading)] tracking-[2px] font-bold text-sm uppercase hover:text-white transition-colors ml-1">MXOVA</a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
