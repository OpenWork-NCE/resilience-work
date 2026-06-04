import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

type LogoVariant = 'default' | 'dark' | 'light' | 'monochrome';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: LogoVariant;
  size?: LogoSize;
  showText?: boolean;
}

const sizeStyles: Record<LogoSize, { height: number; width: number }> = {
  sm: { height: 32, width: 160 },
  md: { height: 40, width: 200 },
  lg: { height: 48, width: 240 },
  xl: { height: 64, width: 320 },
};

export const Logo = ({
  variant = 'default',
  size = 'md',
  className,
  ...props
}: LogoProps) => {
  const { height, width } = sizeStyles[size];

  const logoSrc = variant === 'dark' 
    ? '/images/brand/resilience-at-work-logo-dark.png'
    : '/images/brand/resilience-at-work-logo.png';

  return (
    <div className={cn('flex min-w-0 items-center', className)} {...props}>
      <Image
        src={logoSrc}
        alt="Resilience@Work"
        width={width}
        height={height}
        priority
        className="h-auto max-w-full object-contain"
      />
    </div>
  );
};

export const LogoFavicon = () => {
  return (
    <Image
      src="/images/brand/resilience-at-work-favicon.png"
      alt="Resilience@Work"
      width={32}
      height={32}
    />
  );
};
