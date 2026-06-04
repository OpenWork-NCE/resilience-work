import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'muted';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[rgb(var(--surface-muted))] text-[rgb(var(--foreground))] border-[rgb(var(--border))]',
  primary: 'bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]',
  success: 'bg-[rgb(var(--success-soft))] text-[rgb(var(--success))] border-[rgb(var(--success))]',
  warning: 'bg-[rgb(var(--warning-soft))] text-[rgb(var(--warning))] border-[rgb(var(--warning))]',
  danger: 'bg-[rgb(var(--danger-soft))] text-[rgb(var(--danger))] border-[rgb(var(--danger))]',
  muted: 'bg-[rgb(var(--muted))] text-[rgb(var(--muted-foreground))] border-transparent',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors',
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-[rgb(var(--border))]',
          orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
          className
        )}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';
