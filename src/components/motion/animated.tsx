'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

export function AnimatedText({ text, className, as: Component = 'p' }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component ref={ref} className={cn('overflow-hidden', className)}>
      <motion.span
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </Component>
  );
}
