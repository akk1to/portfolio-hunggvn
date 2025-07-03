"use client"

import type React from "react"

import { BlurBackground } from "./blur-background"

interface SectionBlurBackgroundProps {
  src: string
  alt?: string
  children: React.ReactNode
  id?: string
  className?: string
}

export function SectionBlurBackground({
  src,
  alt = "Section background",
  children,
  id,
  className = "",
}: SectionBlurBackgroundProps) {
  return (
    <BlurBackground src={src} alt={alt} overlay="gradient" blurIntensity="lg" className={`min-h-screen ${className}`}>
      <section id={id} className="py-32 relative">
        <div className="container relative z-10">{children}</div>
      </section>
    </BlurBackground>
  )
}
