import { useScroll, motion } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #991b1b, #dc2626, #f87171)',
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  );
}
