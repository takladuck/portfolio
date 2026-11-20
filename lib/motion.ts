import type { Variants } from "framer-motion";

/** Standard fade-up entrance for a container with staggered children */
export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/** Standard fade-up entrance for an individual item */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Faster stagger for denser grids */
export const fastContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

/** Common viewport options for whileInView */
export const viewport = { once: true, margin: "-60px" } as const;
