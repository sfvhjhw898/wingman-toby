"use client";

import { motion } from "framer-motion";

export default function BlurReveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
