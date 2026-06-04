import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef, ReactNode } from 'react';

type CardVariant = 'default' | 'muted' | 'elevated' | 'outline' | 'interactive' | 'editorial' | 'inverse';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-[rgb(var(--surface))] border border-[rgb(var(--border))]',
  muted: 'bg-[rgb(var(--surface-muted))] border border-[rgb(var(--border-muted))]',
  elevated: 'bg-[rgb(var(--surface-elevated))] border border-[rgb(var(--border))] shadow-[var(--shadow-card)]',
  outline: 'bg-transparent border-2 border-[rgb(var(--border-strong))]',
  interactive: 'bg-[rgb(var(--surface))] border border-[rgb(var(--border))] cursor-pointer',
  editorial: 'bg-[rgb(var(--surface))] border border-[rgb(var(--border))] overflow-hidden',
  inverse: 'bg-[rgb(var(--surface-inverse))] text-[rgb(var(--background))] border-none',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', hover = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--radius-lg)] p-6 transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)]',
          variantStyles[variant],
          hover && 'hover:shadow-[var(--shadow-elevated)] hover:border-[rgb(var(--border-strong))] hover:-translate-y-1',
          variant === 'interactive' && 'hover:shadow-[var(--shadow-card)] hover:border-[rgb(var(--primary))]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, icon, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('mb-4', className)} {...props}>
        {icon && <div className="mb-3 text-[rgb(var(--accent))]">{icon}</div>}
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('text-xl font-semibold font-sans text-[rgb(var(--foreground))]', className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-[rgb(var(--muted-foreground))] leading-relaxed', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';
