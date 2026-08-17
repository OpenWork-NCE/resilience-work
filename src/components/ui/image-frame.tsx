import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

type AspectRatio = '1/1' | '3/2' | '4/3' | '16/9' | '16/10' | '21/9' | 'auto' | '3/4';

interface ImageFrameProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: AspectRatio;
  priority?: boolean;
  overlay?: boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

const aspectRatioStyles: Record<AspectRatio, string> = {
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '16/10': 'aspect-[16/10]',
  '21/9': 'aspect-[21/9]',
  'auto': '',
  '3/4': 'aspect-[3/4]',
};

export const ImageFrame = ({
  src,
  alt,
  width = 1200,
  height = 800,
  aspectRatio = '16/9',
  priority = false,
  overlay = false,
  objectFit = 'cover',
  objectPosition = 'center',
  className,
  ...props
}: ImageFrameProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-lg)]',
        aspectRatioStyles[aspectRatio],
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          'w-full h-full',
          objectFit === 'cover' ? 'object-cover' : 'object-contain'
        )}
        style={{ objectPosition }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay-strong)] via-[var(--overlay-soft)] to-transparent" />
      )}
    </div>
  );
};
