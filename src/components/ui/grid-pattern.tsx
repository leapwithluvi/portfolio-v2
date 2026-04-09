import React, { useMemo } from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: [number, number][]
  strokeDasharray?: string
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  numSquares = 10,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  className,
  ...props
}: GridPatternProps) {
  const id = React.useId()
  const [mounted, setMounted] = React.useState(false);

  // Ensure random values are only generated on the client to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const randomSquares = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: numSquares }).map(() => [
      Math.floor(Math.random() * 30),
      Math.floor(Math.random() * 20),
    ]);
  }, [numSquares, mounted]);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern height={height} id={id} patternUnits="userSpaceOnUse" width={width} x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
      {randomSquares.map(([x, y], index) => (
        <motion.rect
          key={`${x}-${y}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, maxOpacity, 0] }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: Math.random() * 10,
            repeatDelay: repeatDelay,
          }}
          height={height - 1}
          width={width - 1}
          x={x * width + 1}
          y={y * height + 1}
          fill="currentColor"
          strokeWidth="0"
        />
      ))}
    </svg>
  )
}

export default GridPattern
