type textVariantProps = {
  delay: number;
};

type fadeInProps = {
  direction: "left" | "right" | "up" | "down";
  type: "spring" | "tween" | "keyframes";
  delay: number;
  duration: number;
};

type zoomInProps = {
  delay: number;
  duration: number;
};

type slideInProps = {
  direction: "left" | "right" | "up" | "down";
  type: "spring" | "tween" | "keyframes";
  delay: number;
  duration: number;
};

type staggerContainerProps = {
  staggerChildren: number;
  delayChildren?: number;
};

export const textVariant = ({ delay }: textVariantProps) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = ({ direction, type, delay, duration }: fadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = ({ delay, duration }: zoomInProps) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = ({ direction, type, delay, duration }: slideInProps) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: staggerContainerProps) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
