import { cn } from "@/lib/utils";

interface SiteShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col overflow-x-clip bg-[rgb(var(--background))] text-[rgb(var(--foreground))]",
        className
      )}
    >
      {children}
    </div>
  );
}
