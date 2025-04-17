"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  size?: number
  primaryColor?: string
  secondaryColor?: string
  className?: string
}

export default function AnimatedIcon({
  icon: Icon,
  size = 24,
  primaryColor = "#60a5fa", // blue-400
  secondaryColor = "#3b82f6", // blue-500
  className = "",
}: AnimatedIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-sm transition-opacity duration-300 ${
          isHovered ? "opacity-100 scale-110" : "opacity-70 scale-100"
        }`}
      ></div>
      <div
        className={`relative flex items-center justify-center w-full h-full rounded-lg transition-all duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      >
        <Icon
          size={size}
          className={`transition-all duration-300 ${isHovered ? "text-blue-400" : "text-blue-500"}`}
          strokeWidth={isHovered ? 2.5 : 2}
        />
      </div>
    </div>
  )
}
