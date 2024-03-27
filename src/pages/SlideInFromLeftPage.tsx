// pages/SlideInFromLeftPage.tsx
import { motion } from 'framer-motion';
import React from 'react';

const SlideInFromLeftPage = () => {
  const variants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ 
        type: "spring", 
        stiffness: 10,
        duration: 4  // Duration of 2 seconds
      }}
    >
      <h1>This content will slide in from the left more slowly and fade in</h1>
    </motion.div>
  );
};

export default SlideInFromLeftPage;
