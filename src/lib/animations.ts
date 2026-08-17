import type { Variants, Transition } from 'framer-motion';

export const motionTokens = {
  duration: {
    fast: 0.16,
    normal: 0.24,
    slow: 0.36,
    reveal: 0.36,
  },
  ease: {
    standard: [0.2, 0.8, 0.2, 1] as const,
    emphasized: [0.22, 1, 0.36, 1] as const,
    out: [0.16, 1, 0.3, 1] as const,
  },
};

const defaultTransition: Transition = {
  duration: motionTokens.duration.normal,
  ease: motionTokens.ease.emphasized,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const subtleScale: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.ease.out,
    },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.ease.emphasized,
    },
  },
};

export const navigationReveal: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.ease.out,
    },
  },
};

export const mobileMenuReveal: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.ease.emphasized,
    },
  },
};

/** Hero load choreography: longer, more cinematic than section reveals */
export const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

export const heroStaggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: motionTokens.ease.emphasized,
    },
  },
};

export const heroMediaReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: motionTokens.ease.emphasized,
    },
  },
};

export const headerReveal: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: motionTokens.ease.out,
    },
  },
};
