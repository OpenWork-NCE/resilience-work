import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div';
}

export const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ className, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]',
          className
        )}
        {...props}
      />
    );
  }
);

Eyebrow.displayName = 'Eyebrow';

interface QuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  author?: string;
  role?: string;
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, children, author, role, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(
          'border-l-4 border-[rgb(var(--primary))] pl-6 py-2',
          className
        )}
        {...props}
      >
        <p className="text-lg md:text-xl font-display text-[rgb(var(--foreground))] leading-relaxed">
          {children}
        </p>
        {(author || role) && (
          <footer className="mt-4 text-sm text-[rgb(var(--muted-foreground))]">
            {author && <cite className="not-italic font-semibold">{author}</cite>}
            {role && <span className="before:content-[',_']">{role}</span>}
          </footer>
        )}
      </blockquote>
    );
  }
);

Quote.displayName = 'Quote';

interface KeyValueProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  orientation?: 'horizontal' | 'vertical';
}

export const KeyValue = forwardRef<HTMLDivElement, KeyValueProps>(
  ({ className, label, value, orientation = 'vertical', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'space-y-1',
          orientation === 'horizontal' && 'flex items-baseline justify-between space-y-0',
          className
        )}
        {...props}
      >
        <dt className="font-[family:var(--font-accent)] text-sm text-[rgb(var(--muted-foreground))]">{label}</dt>
        <dd className="text-lg font-semibold text-[rgb(var(--foreground))]">{value}</dd>
      </div>
    );
  }
);

KeyValue.displayName = 'KeyValue';
