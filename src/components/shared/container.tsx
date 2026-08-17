import { cn } from '@/lib/utils';

export type ContainerSize = 'narrow' | 'content' | 'wide' | 'page' | 'full' | 'home';

export const DEFAULT_PAGE_CONTAINER_SIZE: ContainerSize = 'page';

/** Shared horizontal measure with the cinematic hero. */
export const HOME_MEASURE =
  'mx-auto w-[min(94vw,88rem)] px-5 sm:px-8 lg:w-[min(94vw,92rem)] lg:px-10';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeMap: Record<Exclude<ContainerSize, 'home'>, string> = {
  narrow: 'w-[min(90vw,var(--container-narrow))]',
  content: 'w-[min(90vw,var(--container-content))]',
  wide: 'w-[min(90vw,var(--container-wide))]',
  page: 'w-[min(90vw,var(--container-wide))]',
  full: 'w-full',
};

export function Container({ children, className, size = DEFAULT_PAGE_CONTAINER_SIZE }: ContainerProps) {
  if (size === 'home') {
    return <div className={cn(HOME_MEASURE, className)}>{children}</div>;
  }

  return (
    <div className={cn('mx-auto px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]', sizeMap[size], className)}>
      {children}
    </div>
  );
}
