"use client";

import { motion } from "framer-motion";

const clients = [
  "Marriott Hotels", "IHG Group", "Gordon Ramsay Restaurants", "Huel", "Deliveroo",
  "Zoopla", "Legal & General", "Chelsea FC", "The Shard", "Harrods",
  "Marriott Hotels", "IHG Group", "Gordon Ramsay Restaurants", "Huel", "Deliveroo",
  "Zoopla", "Legal & General", "Chelsea FC", "The Shard", "Harrods",
];

export function TrustBar() {
  return (
    <section className="w-full py-14 border-y border-white/[0.05] relative overflow-hidden flex flex-col justify-center gap-[30px]">
      <div className="w-full flex justify-center px-4">
        <p className="text-xs text-white/30 uppercase tracking-widest font-semibold text-center">
          Trusted by London&apos;s most ambitious brands
        </p>
      </div>

      {/* Fade masks */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #020818 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #020818 0%, transparent 100%)" }} />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-10 flex-shrink-0 animate-marquee"
            style={{ width: "max-content" }}
          >
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] whitespace-nowrap"
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#1b9058" }} />
                <span className="text-sm font-medium text-white/40">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
