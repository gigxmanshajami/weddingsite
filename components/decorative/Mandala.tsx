import { cn } from "@/lib/utils";

interface MandalaProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

export function Mandala({ className, size = 200, color = "#C89B5C", opacity = 0.1 }: MandalaProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g transform="translate(100,100)" fill="none" stroke={color} strokeWidth="0.5">
        {/* Outer rings */}
        <circle r="95" />
        <circle r="88" />
        <circle r="80" />
        <circle r="70" />
        <circle r="55" />
        <circle r="40" />
        <circle r="25" />
        <circle r="12" />
        {/* Petal layers - 16 petals */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5})`}>
            <path d="M0,-90 Q12,-70 0,-50 Q-12,-70 0,-90Z" fill={color} fillOpacity={0.15} />
            <path d="M0,-75 Q8,-60 0,-45 Q-8,-60 0,-75Z" fill={color} fillOpacity={0.1} />
          </g>
        ))}
        {/* Inner petal layer - 8 petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45})`}>
            <path d="M0,-60 Q15,-45 0,-28 Q-15,-45 0,-60Z" fill={color} fillOpacity={0.2} />
            <line x1="0" y1="-95" x2="0" y2="-70" strokeWidth="0.3" />
          </g>
        ))}
        {/* Diamond accents */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`diamond-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
            <path d="M0,-38 L4,-30 L0,-22 L-4,-30Z" fill={color} fillOpacity={0.25} />
          </g>
        ))}
        {/* Center flower */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`center-${i}`} transform={`rotate(${i * 60})`}>
            <path d="M0,-18 Q6,-12 0,-6 Q-6,-12 0,-18Z" fill={color} fillOpacity={0.3} />
          </g>
        ))}
        <circle r="5" fill={color} fillOpacity={0.35} />
      </g>
    </svg>
  );
}
