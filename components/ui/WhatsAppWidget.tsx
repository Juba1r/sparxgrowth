"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds to grab attention
    const timer = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "447700000000"; // Placeholder UK number
  const message = "Hi SparxGrowth! I'd like to talk about growing my business.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[95] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] bg-[#020d06] border border-[#1b9058]/30 rounded-2xl shadow-2xl overflow-hidden glass-card"
          >
            {/* Header */}
            <div className="bg-[#1b9058] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20 p-1">
                   <Image src="/SparxGrowth Logo.png" alt="SparxGrowth" width={52} height={52} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">SparxGrowth Team</h3>
                  <p className="text-white/80 text-xs">Replies typically in minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Chat Body */}
            <div className="p-5 bg-[#020a05] relative min-h-[140px] flex flex-col justify-end">
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+')] pointer-events-none" />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white text-gray-800 p-3.5 rounded-2xl rounded-tl-sm text-sm shadow-sm inline-block max-w-[85%] self-start"
              >
                <p>Hi there! 👋 How can we help you grow your business today?</p>
                <span className="text-[10px] text-gray-400 mt-1.5 block text-right">Just now</span>
              </motion.div>
            </div>
            
            {/* Footer */}
            <div className="p-4 bg-[#030f07] border-t border-white/[0.05] flex items-center justify-center">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center">
        <AnimatePresence>
          {!isOpen && isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-4 bg-[#020d06] border border-[#1b9058]/30 glass-card text-white px-4 py-2.5 rounded-2xl text-sm whitespace-nowrap shadow-xl flex items-center gap-3 drop-shadow-[0_0_15px_rgba(27,144,88,0.2)]"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
              </div>
              Chat with us
              <button 
                onClick={(e) => { e.stopPropagation(); setIsTooltipVisible(false); }}
                className="ml-1 text-white/50 hover:text-white"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          onClick={() => { setIsOpen(!isOpen); setIsTooltipVisible(false); }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 transition-all cursor-pointer z-10 border border-[#25D366]/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: isOpen ? 0 : [0, -6, 0]
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {isOpen ? <X size={26} /> : <WhatsAppIcon className="w-7 h-7 fill-current" />}
        </motion.button>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
