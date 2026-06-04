import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

export const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xs font-bold uppercase tracking-[0.14em] text-[rgb(var(--accent))]',
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Eyebrow.displayName = 'Eyebrow';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  maxWidth?: 'narrow' | 'default' | 'wide';
}

const maxWidthStyles = {
  narrow: 'max-w-2xl',
  default: 'max-w-3xl',
  wide: 'max-w-4xl',
};

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ eyebrow, title, description, align = 'center', maxWidth = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12 lg:mb-16',
          align === 'center' ? 'text-center mx-auto' : 'text-left',
          align === 'center' && maxWidthStyles[maxWidth],
          className
        )}
        {...props}
      >
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-[var(--text-5xl)] font-medium text-balance leading-tight mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg leading-relaxed text-[rgb(var(--muted-foreground))] text-balance reading-width">
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';
