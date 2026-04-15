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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#030f07]"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-72 h-72 rounded-full border border-[#1b9058]/30"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full border border-[#ffde59]/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(27,144,88,0.15) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Logo image */}
            <motion.div
              className="relative flex items-center justify-center z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/SparxGrowth Logo.png"
                  alt="SparxGrowth"
                  width={220}
                  height={60}
                  className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(27,144,88,0.5)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #1b9058, #ffde59)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
