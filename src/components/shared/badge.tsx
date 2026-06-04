import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning';
  className?: string;
}

const variantStyles = {
  default: 'bg-[rgb(var(--muted))] text-[rgb(var(--muted-foreground))]',
  accent: 'bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent))]',
  success: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
