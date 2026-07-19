import { cn } from "@/lib/utils";

interface LotusProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Lotus({ className, size = 60, color = "#C89B5C" }: LotusProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <g transform="translate(50,55)" fill="none">
        {/* Center petal */}
        <path
          d="M0,-50 C8,-40 10,-25 0,-5 C-10,-25 -8,-40 0,-50Z"
          fill={color}
          fillOpacity={0.3}
          stroke={color}
          strokeWidth="0.5"
        />
        {/* Side petals - left */}
        <path
          d="M-5,-45 C-18,-38 -25,-22 -12,-5 C-8,-22 -10,-35 -5,-45Z"
          fill={color}
          fillOpacity={0.25}
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          d="M-12,-38 C-28,-30 -35,-15 -22,-2 C-16,-15 -18,-28 -12,-38Z"
          fill={color}
          fillOpacity={0.2}
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          d="M-20,-28 C-38,-20 -42,-5 -30,3 C-24,-8 -26,-20 -20,-28Z"
          fill={color}
          fillOpacity={0.15}
          stroke={color}
          strokeWidth="0.5"
        />
        {/* Side petals - right (mirrored) */}
        <path
          d="M5,-45 C18,-38 25,-22 12,-5 C8,-22 10,-35 5,-45Z"
          fill={color}
          fillOpacity={0.25}
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          d="M12,-38 C28,-30 35,-15 22,-2 C16,-15 18,-28 12,-38Z"
          fill={color}
          fillOpacity={0.2}
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          d="M20,-28 C38,-20 42,-5 30,3 C24,-8 26,-20 20,-28Z"
          fill={color}
          fillOpacity={0.15}
          stroke={color}
          strokeWidth="0.5"
        />
        {/* Base curve */}
        <path
          d="M-15,0 Q0,8 15,0"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
        />
      </g>
    </svg>
  );
}
