import { motion } from "framer-motion";

// this was for testing purposes, will be updated when in development
const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 50,
  duration: 0.5,
  delay: delay,
});

export default function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transitionConfig()}
    >
      <h1>HOMEPAGE</h1>
    </motion.div>
  );
}
