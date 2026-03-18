"use client";
import { motion } from "framer-motion";
import { Floating } from "@/types/Animations/Floating";
export default function FloatingPerson({
  children,
  slide = 10,
  duration = 0.1,
}: Floating) {
  return (
    <motion.div
      animate={{ y: [0, slide, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
}
