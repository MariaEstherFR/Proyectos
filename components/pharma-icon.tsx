"use client"

import { useState } from "react"
import { Pill, FlaskRoundIcon as Flask, Stethoscope, ClipboardList } from "lucide-react"

interface PharmaIconProps {
  type: "pill" | "flask" | "stethoscope" | "clipboard"
  size?: number
  className?: string
}

export default function PharmaIcon({ type, size = 24, className = "" }: PharmaIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (type) {
      case "pill":
        return (
          <Pill
            size={size}
            className={`transition-all duration-300 ${isHovered ? "text-green-400" : "text-green-500"}`}
          />
        )
      case "flask":
        return (
          <Flask
            size={size}
            className={`transition-all duration-300 ${isHovered ? "text-purple-400" : "text-purple-500"}`}
          />
        )
      case "stethoscope":
        return (
          <Stethoscope
            size={size}
            className={`transition-all duration-300 ${isHovered ? "text-blue-400" : "text-blue-500"}`}
          />
        )
      case "clipboard":
        return (
          <ClipboardList
            size={size}
            className={`transition-all duration-300 ${isHovered ? "text-amber-400" : "text-amber-500"}`}
          />
        )
    }
  }

  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 rounded-lg blur-sm transition-opacity duration-300 ${
          isHovered ? "opacity-100 scale-110" : "opacity-70 scale-100"
        } ${
          type === "pill"
            ? "bg-green-400/20"
            : type === "flask"
              ? "bg-purple-400/20"
              : type === "stethoscope"
                ? "bg-blue-400/20"
                : "bg-amber-400/20"
        }`}
      ></div>
      <div
        className={`relative flex items-center justify-center w-full h-full rounded-lg transition-all duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      >
        {getIcon()}
      </div>
    </div>
  )
}
