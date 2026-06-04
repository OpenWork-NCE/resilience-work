import { cn } from '@/lib/utils';
import { Container } from './container';
import { HTMLAttributes, forwardRef } from 'react';

type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';
type SectionTone = 'default' | 'muted' | 'accent' | 'inverse';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  tone?: SectionTone;
  containerSize?: 'narrow' | 'content' | 'wide' | 'full';
  withContainer?: boolean;
}

const spacingStyles: Record<SectionSpacing, string> = {
  sm: 'py-[var(--section-space-sm)]',
  md: 'py-[var(--section-space-md)]',
  lg: 'py-[var(--section-space-lg)]',
  xl: 'py-[var(--section-space-xl)]',
};

const toneStyles: Record<SectionTone, string> = {
  default: 'bg-[rgb(var(--background))] text-[rgb(var(--foreground))]',
  muted: 'bg-[rgb(var(--surface-muted))] text-[rgb(var(--foreground))]',
  accent: 'bg-[rgb(var(--accent-soft))] text-[rgb(var(--foreground))]',
  inverse: 'bg-[rgb(var(--surface-inverse))] text-[rgb(var(--background))]',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, spacing = 'lg', tone = 'default', containerSize = 'content', withContainer = true, className, ...props }, ref) => {
    const content = withContainer ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        className={cn(spacingStyles[spacing], toneStyles[tone], className)}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = 'Section';
