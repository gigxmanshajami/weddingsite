import { cn } from "@/lib/utils";

interface PaisleyProps {
  className?: string;
  size?: number;
  color?: string;
  flip?: boolean;
}

export function Paisley({ className, size = 120, color = "#C89B5C", flip = false }: PaisleyProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 80 112"
      className={cn("pointer-events-none select-none", className)}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="0.6" opacity={0.3}>
        {/* Main paisley shape */}
        <path
          d="M40,10 C55,10 70,25 70,45 C70,70 50,90 35,100 C25,95 15,80 15,60 C15,35 25,15 40,10Z"
          fill={color}
          fillOpacity={0.08}
        />
        {/* Inner paisley */}
        <path
          d="M40,20 C50,20 60,30 60,45 C60,62 48,78 38,85 C30,80 22,68 22,55 C22,38 30,22 40,20Z"
        />
        {/* Inner detail curves */}
        <path d="M40,30 C48,30 54,38 54,48 C54,58 46,68 40,72 C34,66 28,56 28,48 C28,38 34,30 40,30Z" />
        <path d="M40,40 C44,40 48,44 48,50 C48,56 44,60 40,62 C36,58 33,54 33,50 C33,44 36,40 40,40Z" />
        {/* Dot at top */}
        <circle cx="40" cy="48" r="3" fill={color} fillOpacity={0.2} />
        {/* Decorative spirals */}
        <path d="M35,100 C30,105 25,105 22,100" />
        <path d="M22,100 C18,95 20,90 25,88" />
      </g>
    </svg>
  );
}
