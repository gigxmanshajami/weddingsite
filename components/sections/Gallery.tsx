"use client";

import Script from "next/script";
import { motion } from "framer-motion";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24!  bg-background overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <span className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-primary/80 mb-1">
            Our Portfolio
          </span>
          <h2 className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-black mb-10">
            Moments In Time
          </h2>
        </motion.div>

        {/* Elfsight Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="elfsight-app-d7bb5052-32b6-4b10-b998-378f1f1e264e" data-elfsight-app-lazy></div>
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
        </motion.div>

      </div>
    </section>
  );
}
