"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  ToggleGroup,
  ToggleGroupItem
} from "@/components/ui/toggle-group"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a placeholder with the same dimensions
  }

  return (
    <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value)}>
      <ToggleGroupItem value="light" aria-label="Light mode">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark mode">
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="System theme">
        <Laptop className="h-[1.2rem] w-[1.2rem]" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

