import React from "react";
import { motion, Variants } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 50,
  duration: 0.5,
  delay: delay,
});

const parentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
    },
  },
};

const withAnimation = (Component: React.ComponentType, delay = 0) => {
  return (props: any) => (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <motion.div variants={childVariants} transition={transitionConfig(delay)}>
        <Component {...props} />
      </motion.div>
    </motion.div>
  );
};

export default withAnimation;
