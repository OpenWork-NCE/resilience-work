import { cn } from '@/lib/utils';

type ContainerSize = 'narrow' | 'content' | 'wide' | 'full';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeMap: Record<ContainerSize, string> = {
  narrow: 'max-w-[var(--container-narrow)]',
  content: 'max-w-[var(--container-content)]',
  wide: 'max-w-[var(--container-wide)]',
  full: 'w-full',
};

export function Container({ children, className, size = 'content' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]', sizeMap[size], className)}>
      {children}
    </div>
  );
}
