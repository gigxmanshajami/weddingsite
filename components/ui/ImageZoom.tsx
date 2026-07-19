"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  onClick?: () => void;
}

export function ImageZoom({
  src,
  alt,
  className,
  containerClassName,
  fill = true,
  width,
  height,
  priority = false,
  onClick,
}: ImageZoomProps) {
  return (
    <div
      className={cn(
        "overflow-hidden group",
        onClick && "cursor-pointer",
        containerClassName
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-700 ease-out group-hover:scale-110",
          className
        )}
        sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      />
    </div>
  );
}
