import type { ReactNode } from "react"

export interface GameCard {
  title: string
  description: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  extraContent?: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
  games?: GameCard[]
}

export interface SectionProps extends Section {
  isActive: boolean
}