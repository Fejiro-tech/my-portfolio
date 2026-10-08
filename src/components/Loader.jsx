import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Initializing...",
  "Loading Projects...",
  "Rendering Components...",
  "Optimizing Experience...",
  "Ready.",
  "👋 Welcome!"
];

export default function Loader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Spinner */}
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
    

          <div className="absolute inset-3 rounded-full bg-black flex items-center justify-center text-white text-2xl font-bold">
          <span>PO</span>
          </div>
        </div>

        {/* Animated Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={messages[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-blue-400 text-lg font-medium tracking-widest"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}