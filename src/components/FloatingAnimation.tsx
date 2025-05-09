import React from "react";
import { motion } from "framer-motion";

interface FloatingAnimationProps {
  children?: React.ReactNode;
  speed?: number;
  opacity?: number;
  size?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  className?: string;
}

const FloatingAnimation: React.FC<FloatingAnimationProps> = ({
  children,
  speed = 3,
  opacity = 0.3,
  size = 100,
  position = "center",
  className = "",
}) => {
  // Calculate position classes based on the position prop
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
      case "center":
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  // Animation variants for the floating effect
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      transition: {
        duration: speed,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${getPositionClasses()} ${className}`}
      style={{ opacity }}
      variants={floatingAnimation}
      animate="animate"
    >
      {children || (
        <div
          className="rounded-full bg-primary/10 backdrop-blur-sm"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      )}
    </motion.div>
  );
};

export default FloatingAnimation;
