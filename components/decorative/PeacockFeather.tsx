import { cn } from "@/lib/utils";

interface PeacockFeatherProps {
  className?: string;
  size?: number;
  color?: string;
}

export function PeacockFeather({ className, size = 150, color = "#C89B5C" }: PeacockFeatherProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 60 150"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <g fill="none" opacity={0.25}>
        {/* Stem */}
        <path
          d="M30,150 C30,130 28,100 30,60"
          stroke={color}
          strokeWidth="1"
        />
        {/* Outer eye shape */}
        <path
          d="M30,20 C45,30 50,50 45,65 C40,78 30,82 30,82 C30,82 20,78 15,65 C10,50 15,30 30,20Z"
          stroke={color}
          strokeWidth="0.8"
          fill={color}
          fillOpacity={0.08}
        />
        {/* Middle ring */}
        <path
          d="M30,30 C40,36 44,50 40,60 C37,68 30,72 30,72 C30,72 23,68 20,60 C16,50 20,36 30,30Z"
          stroke={color}
          strokeWidth="0.6"
          fill={color}
          fillOpacity={0.1}
        />
        {/* Inner eye */}
        <ellipse
          cx="30"
          cy="50"
          rx="8"
          ry="12"
          fill={color}
          fillOpacity={0.15}
          stroke={color}
          strokeWidth="0.5"
        />
        {/* Center dot */}
        <circle cx="30" cy="48" r="3" fill={color} fillOpacity={0.3} />
        {/* Barbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="30"
            y1={65 + i * 10}
            x2={i % 2 === 0 ? 20 : 40}
            y2={68 + i * 10}
            stroke={color}
            strokeWidth="0.3"
            strokeOpacity={0.4}
          />
        ))}
      </g>
    </svg>
  );
}
