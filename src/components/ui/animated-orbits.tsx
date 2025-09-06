"use client";

import { motion } from "framer-motion";

export function AnimatedOrbits() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer orbit */}
      <motion.div
        className="absolute w-80 h-80 rounded-full border border-gradient-start/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ "--orbit-radius": "160px" } as React.CSSProperties}
      >
        <div
          className="absolute w-3 h-3 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ left: "100%", top: "50%" }}
        />
      </motion.div>

      {/* Middle orbit */}
      <motion.div
        className="absolute w-60 h-60 rounded-full border border-gradient-end/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ "--orbit-radius": "120px" } as React.CSSProperties}
      >
        <div
          className="absolute w-2.5 h-2.5 bg-gradient-to-r from-gradient-end to-gradient-start rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ left: "100%", top: "50%" }}
        />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        className="absolute w-40 h-40 rounded-full border border-gradient-start/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ "--orbit-radius": "80px" } as React.CSSProperties}
      >
        <div
          className="absolute w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ left: "100%", top: "50%" }}
        />
      </motion.div>

      {/* Central glow */}
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end opacity-80"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
