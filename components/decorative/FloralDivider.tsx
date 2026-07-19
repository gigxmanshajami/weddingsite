import { cn } from "@/lib/utils";

interface FloralDividerProps {
  className?: string;
  color?: string;
}

export function FloralDivider({ className, color = "#C89B5C" }: FloralDividerProps) {
  return (
    <div className={cn("flex items-center justify-center w-full", className)} aria-hidden="true">
      <svg width="300" height="30" viewBox="0 0 300 30" className="max-w-[280px] md:max-w-none">
        <g fill="none" stroke={color} strokeWidth="0.8">
          {/* Left line */}
          <line x1="0" y1="15" x2="110" y2="15" strokeOpacity={0.4} />
          {/* Left curl */}
          <path d="M110,15 Q120,5 130,15 Q120,25 110,15" strokeOpacity={0.6} />
          {/* Center lotus */}
          <path d="M140,5 C144,8 146,12 150,15 C154,12 156,8 160,5" fill={color} fillOpacity={0.2} />
          <path d="M135,10 C140,12 145,14 150,15 C145,16 140,18 135,20" fill={color} fillOpacity={0.15} />
          <path d="M165,10 C160,12 155,14 150,15 C155,16 160,18 165,20" fill={color} fillOpacity={0.15} />
          <circle cx="150" cy="15" r="2" fill={color} fillOpacity={0.4} />
          {/* Right curl */}
          <path d="M170,15 Q180,5 190,15 Q180,25 170,15" strokeOpacity={0.6} />
          {/* Right line */}
          <line x1="190" y1="15" x2="300" y2="15" strokeOpacity={0.4} />
        </g>
      </svg>
    </div>
  );
}
