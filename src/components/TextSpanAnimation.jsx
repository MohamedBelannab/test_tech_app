import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    if (!isPlaying) {
      controls.start({
        transform: [
          "scale3d(1, 1, 1)",
          "scale3d(1.4, .55, 1)",
          "scale3d(.75, 1.25, 1)",
          "scale3d(1.25, .85, 1)",
          "scale3d(.9, 1.05, 1)",
          "scale3d(1, 1, 1)",
        ],
       
      });
      setIsPlaying(true);
    }
  };

  return (
    <motion.span style={{ display: "inline-block" }}
      animate={controls}
      onAnimationComplete={() => setIsPlaying(false)}
      whileHover={{
        color: "#22c55e",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      onMouseOver={rubberBand}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
