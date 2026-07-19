"use client";

import { motion } from "framer-motion";

export function FloatingFlowers() {
  const flowers = [
    { x: "10%", y: "20%", size: 20, delay: 0, duration: 7 },
    { x: "85%", y: "15%", size: 16, delay: 1, duration: 8 },
    { x: "75%", y: "70%", size: 22, delay: 2, duration: 6 },
    { x: "15%", y: "75%", size: 18, delay: 0.5, duration: 9 },
    { x: "50%", y: "10%", size: 14, delay: 3, duration: 7.5 },
    { x: "90%", y: "45%", size: 12, delay: 1.5, duration: 8.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {flowers.map((flower, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: flower.x, top: flower.y }}
          animate={{
            y: [0, -20, 10, -15, 0],
            x: [0, 10, -5, 8, 0],
            rotate: [0, 15, -10, 5, 0],
            opacity: [0.3, 0.5, 0.3, 0.6, 0.3],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width={flower.size} height={flower.size} viewBox="0 0 24 24" fill="none">
            {/* Simple 5-petal flower */}
            {Array.from({ length: 5 }).map((_, j) => (
              <ellipse
                key={j}
                cx="12"
                cy="6"
                rx="3"
                ry="5"
                fill="#C89B5C"
                fillOpacity={0.4}
                transform={`rotate(${j * 72}, 12, 12)`}
              />
            ))}
            <circle cx="12" cy="12" r="2" fill="#C89B5C" fillOpacity={0.6} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
