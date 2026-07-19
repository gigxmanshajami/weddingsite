import { cn } from "@/lib/utils";

interface GoldBorderProps {
  className?: string;
  children: React.ReactNode;
}

export function GoldBorder({ className, children }: GoldBorderProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Corner ornaments */}
      <svg className="absolute -top-3 -left-3 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M4,44 L4,8 Q4,4 8,4 L44,4" fill="none" stroke="#C89B5C" strokeWidth="1.5" opacity={0.6} />
        <path d="M4,30 L4,10 Q4,6 10,6 L30,6" fill="none" stroke="#C89B5C" strokeWidth="0.5" opacity={0.3} />
        <circle cx="8" cy="8" r="2" fill="#C89B5C" opacity={0.4} />
      </svg>
      <svg className="absolute -top-3 -right-3 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M44,44 L44,8 Q44,4 40,4 L4,4" fill="none" stroke="#C89B5C" strokeWidth="1.5" opacity={0.6} />
        <path d="M44,30 L44,10 Q44,6 38,6 L18,6" fill="none" stroke="#C89B5C" strokeWidth="0.5" opacity={0.3} />
        <circle cx="40" cy="8" r="2" fill="#C89B5C" opacity={0.4} />
      </svg>
      <svg className="absolute -bottom-3 -left-3 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M4,4 L4,40 Q4,44 8,44 L44,44" fill="none" stroke="#C89B5C" strokeWidth="1.5" opacity={0.6} />
        <path d="M4,18 L4,38 Q4,42 10,42 L30,42" fill="none" stroke="#C89B5C" strokeWidth="0.5" opacity={0.3} />
        <circle cx="8" cy="40" r="2" fill="#C89B5C" opacity={0.4} />
      </svg>
      <svg className="absolute -bottom-3 -right-3 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M44,4 L44,40 Q44,44 40,44 L4,44" fill="none" stroke="#C89B5C" strokeWidth="1.5" opacity={0.6} />
        <path d="M44,18 L44,38 Q44,42 38,42 L18,42" fill="none" stroke="#C89B5C" strokeWidth="0.5" opacity={0.3} />
        <circle cx="40" cy="40" r="2" fill="#C89B5C" opacity={0.4} />
      </svg>
      {children}
    </div>
  );
}
