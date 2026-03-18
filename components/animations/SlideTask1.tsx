"use client";
import { Floating } from "@/types/Animations/Floating";
import { motion } from "framer-motion";

interface FloatingProps extends Floating {
  isHovered: boolean;
}

export default function SlideTask1({
  children,
  slide = -40,
  duration = 0.6,
  isHovered,
}: FloatingProps) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={{
        x: isHovered ? slide : 0,
        opacity: isHovered ? 0 : 1,
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
