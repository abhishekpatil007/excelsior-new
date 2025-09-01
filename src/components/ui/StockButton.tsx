"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

interface StockButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

const tickerVariants = {
  animate: {
    x: [0, -40, 0],
    transition: {
      repeat: Infinity,
      duration: 2.5,
    },
  },
};

export const StockButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  showArrow = true,
}: StockButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 rounded-xl bg-black border border-green-500/40 shadow-lg group flex items-center justify-center font-semibold text-lg text-green-400 tracking-wide transition-all duration-200 hover:bg-green-950/80 hover:shadow-green-500/20 ${className}`}
      style={{ boxShadow: "0 2px 16px 0 rgba(34,197,94,0.10)" }}
    >
      {/* Animated ticker line */}
      <motion.div
        className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 opacity-40"
        variants={tickerVariants}
        animate="animate"
      />

      {/* Button text */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform duration-200" />}
      </span>
      {/* Animated bottom ticker */}
      <motion.div
        className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 opacity-40"
        variants={tickerVariants}
        animate="animate"
      />
    </button>
  );
};

export default StockButton; 