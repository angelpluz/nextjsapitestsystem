// pages/FadeInPage.tsx
import { motion } from 'framer-motion';
import React from 'react';

const FadeInPage = () => {
  // Variants define the initial, animate, and exit states
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"  // Start with the hidden state
      animate="visible" // Animate to the visible state
      variants={variants} // Use the defined variants
      transition={{ duration: 1 }} // Duration of the animation
    >
      <h1>This content will fade in</h1>
    </motion.div>
  );
};

export default FadeInPage;
