"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#123527]"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-72 h-72 rounded-full border border-[#F5F0E6]/20"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full border border-[#EAB308]/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Thunderstorm Radial Flash */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-50"
              style={{
                background: "radial-gradient(circle, rgba(234, 179, 8, 0.95) 0%, rgba(234, 179, 8, 0) 70%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.9, 0.1, 1, 0, 0.8, 0],
                scale: [1, 1.3, 1, 1.6, 1, 1.2, 1],
              }}
              transition={{
                duration: 0.6,
                times: [0, 0.15, 0.25, 0.4, 0.55, 0.75, 1],
                delay: 1.6, // Triggers just before the loader exits
                ease: "linear"
              }}
              style={{ mixBlendMode: 'screen' }}
            />

            {/* Logo image */}
            <motion.div
              className="relative flex items-center justify-center z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                filter: [
                  "brightness(1) contrast(1)", 
                  "brightness(2.5) contrast(1.5)", 
                  "brightness(0.8) contrast(1)", 
                  "brightness(3) contrast(2)", 
                  "brightness(1) contrast(1)"
                ]
              }}
              transition={{ 
                scale: { delay: 0.2, type: "spring", stiffness: 200 },
                opacity: { delay: 0.2, type: "spring", stiffness: 200 },
                filter: {
                  delay: 1.6,
                  duration: 0.6,
                  times: [0, 0.2, 0.4, 0.7, 1],
                  ease: "linear"
                }
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/Sparx Icon.png"
                  alt="SparxGrowth"
                  width={200}
                  height={200}
                  className="w-40 h-40 object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.35)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #1C4D38, #EAB308)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
