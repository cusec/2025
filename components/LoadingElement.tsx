import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.6,
  ease: "easeOut",
  delay,
});

export default function LoadingSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="w-full "
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: transitionConfig(delay),
            }
          : { opacity: 0, y: 50 }
      }
    >
      {children}
    </motion.div>
  );
}
