"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import Image from "next/image";

export function WhatsAppButton() {
  return (
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20wedding%20planning%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all bg-white"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/images/ws.jpeg" alt="WhatsApp" fill className="object-cover" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50 pointer-events-none" />
      </motion.a>
  );
}
