import { cn } from '@/lib/utils';

export type ContainerSize = 'narrow' | 'content' | 'wide' | 'page' | 'full';

export const DEFAULT_PAGE_CONTAINER_SIZE: ContainerSize = 'page';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeMap: Record<ContainerSize, string> = {
  narrow: 'w-[min(90vw,var(--container-narrow))]',
  content: 'w-[min(90vw,var(--container-content))]',
  wide: 'w-[min(90vw,var(--container-wide))]',
  page: 'w-[min(90vw,var(--container-wide))]',
  full: 'w-full',
};

export function Container({ children, className, size = DEFAULT_PAGE_CONTAINER_SIZE }: ContainerProps) {
  return (
    <div className={cn('mx-auto px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]', sizeMap[size], className)}>
      {children}
    </div>
  );
}
