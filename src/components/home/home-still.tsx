import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeStillProps {
  src: string;
  alt: string;
  objectPosition?: string;
  sizes: string;
  priority?: boolean;
  grain?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function HomeStill({
  src,
  alt,
  objectPosition,
  sizes,
  priority = false,
  grain = false,
  className,
  children,
}: HomeStillProps) {
  return (
    <figure className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: objectPosition ?? "center" }}
      />
      {grain ? (
        <>
          <div aria-hidden="true" className="hero-film-grain absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,24,0.08)_0%,transparent_36%,rgba(7,16,24,0.58)_100%)]"
          />
        </>
      ) : null}
      {children}
    </figure>
  );
}
