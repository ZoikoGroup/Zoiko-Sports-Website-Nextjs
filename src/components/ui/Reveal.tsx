"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Distance (px) the element travels upward while fading in. */
  y?: number;
};

/** Fades + slides an element in the first time it scrolls into view. */
export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/** Container whose <RevealItem> children animate in one after another. */
export function RevealGroup({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={group} {...rest}>
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={item} {...rest}>
      {children}
    </motion.div>
  );
}
