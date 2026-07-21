"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function Showcase() {
  return (
    <>
      {/* First Section - Black */}
      <section className="bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Left */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/3.jpg"
                alt="Venue exterior"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Text Right */}
            <div className="md:pl-8">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0}
                className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-secondary mb-2"
              >
                Discover
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={1}
                className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-white mb-10"
              >
                THE EXPERIENCE
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={2}
                className="text-white/70 text-sm md:text-base leading-[1.8] mb-8 max-w-lg"
              >
                At Dream Moments, we elevate celebrations into breathtaking realities. With an uncompromising eye for detail and a passion for bespoke design, our team curates unparalleled luxury experiences. We don't just plan events; we orchestrate timeless memories that you and your guests will cherish forever.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - White */}
      <section className="bg-background text-dark py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Left (Right Aligned) */}
            <div className="order-2 md:order-1 text-left md:text-right md:pr-8 flex flex-col md:items-end">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0}
                className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-primary mb-2"
              >
                Bespoke
              </motion.span>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={1}
                className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-black mb-10"
              >
                CELEBRATIONS
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={2}
                className="text-black text-sm md:text-base leading-[1.8] mb-8 max-w-lg"
              >
                As premier artisans of event design, we transform spaces into enchanting visual masterpieces. From opulent grand weddings to intimate luxury affairs, our bespoke styling captivates the senses. Every floral arrangement, color palette, and architectural detail is meticulously crafted to tell your unique love story.
              </motion.p>
            </div>
            {/* Image Right */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="order-1 md:order-2 relative aspect-[16/9] w-full overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/1.jpg"
                alt="Wedding Decor"
                fill
                className="object-cover "
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
