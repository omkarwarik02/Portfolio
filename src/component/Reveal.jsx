import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

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
  const Tag = as;
  const ref = useRef(null);
  // Content already visible in the viewport on mount shouldn't play an
  // entrance animation - that reads as the page "adjusting itself" right
  // after first paint. Only animate sections scrolled into view later.
  // "pending" is resolved to "static" or "animated" inside a layout effect,
  // which runs before the browser paints, so the user never sees the
  // in-between state.
  const [mode, setMode] = useState("pending");

  useLayoutEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    const inView = rect && rect.top < window.innerHeight && rect.bottom > 0;
    setMode(inView ? "static" : "animated");
  }, []);

  if (mode === "pending") {
    return (
      <Tag ref={ref} className={className} style={{ visibility: "hidden" }}>
        {children}
      </Tag>
    );
  }

  if (mode === "static") {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

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
