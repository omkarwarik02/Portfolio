import { motion } from "framer-motion";

const Reveal = ({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 28,
  duration = 0.6,
  amount = 0.2,
  once = true,
}) => {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
