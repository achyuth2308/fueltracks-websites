import { motion } from "framer-motion";

/**
 * AnimatedSection — Wrapper that fades/slides in when scrolled into view.
 * Use this around any section for Stripe-like scroll animations.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
