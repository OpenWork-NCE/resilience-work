import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';
import { Eyebrow } from '@/components/ui/content';

export { Eyebrow } from '@/components/ui/content';

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
        <h2 className="mb-4 font-display text-[clamp(2.35rem,5vw,3.7rem)] font-medium leading-[1.02] text-balance">
          {title}
        </h2>
        {description && (
          <p className="reading-width text-base leading-relaxed text-[rgb(var(--muted-foreground))] text-balance sm:text-lg">
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';
