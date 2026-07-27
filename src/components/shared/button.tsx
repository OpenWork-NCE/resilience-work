import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'inverse' | 'outlineInverse' | 'onInverse';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = ButtonBaseProps & {
  href: string;
  locale?: string;
  children: ReactNode;
  className?: string;
};

const variantStyles = {
  primary:
    'bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] hover:bg-[rgb(var(--primary-hover))] active:bg-[rgb(var(--primary-active))] shadow-sm',
  secondary:
    'bg-[rgb(var(--secondary))] text-[rgb(var(--secondary-foreground))] hover:bg-[rgb(var(--secondary-hover))] border border-[rgb(var(--border))]',
  outline:
    'border border-[rgb(var(--border-strong))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--surface-muted))] hover:border-[rgb(var(--primary))]',
  ghost: 'text-[rgb(var(--foreground))] hover:bg-[rgb(var(--surface-muted))]',
  link: 'text-[rgb(var(--primary))] hover:text-[rgb(var(--primary-hover))] hover:underline',
  inverse:
    'bg-[rgb(var(--inverse-foreground))] text-[rgb(var(--surface-inverse))] hover:bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_92%,rgb(var(--surface-inverse)))]',
  outlineInverse:
    'border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_28%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_8%,transparent)] text-[rgb(var(--inverse-foreground))] hover:bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] hover:border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_40%,transparent)]',
  onInverse:
    'border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_28%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] text-[rgb(var(--inverse-foreground))] backdrop-blur-sm hover:bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_18%,transparent)]',
};

// sm/md meet ≥44px touch target; icon is 44×44.
const sizeStyles = {
  sm: 'h-11 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
  icon: 'h-11 w-11',
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-px active:translate-y-0 cursor-pointer';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, variant = 'primary', size = 'md', leftIcon, rightIcon, href, locale, className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        locale={locale}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }
);

LinkButton.displayName = 'LinkButton';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: 'default' | 'ghost' | 'muted';
}

const iconVariants = {
  default: 'hover:bg-[rgb(var(--surface-muted))]',
  ghost: 'hover:bg-[rgb(var(--surface-muted))]/50',
  muted: 'bg-[rgb(var(--surface-muted))] hover:bg-[rgb(var(--border))]',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, variant = 'default', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        className={cn(
          'inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[var(--radius-md)] transition-colors duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          iconVariants[variant],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
