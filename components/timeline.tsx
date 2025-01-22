"use client"

import React, { useState, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { format } from 'date-fns'

interface TimelineEvent {
  date: Date
  company: string
  role: string
  summary: string
}

interface TimelineProps {
  events: TimelineEvent[]
  onMilestoneClick?: () => void
}

export function Timeline({ events, onMilestoneClick }: TimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (timelineRef.current) {
      const scrollAmount = 300
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount
      
      timelineRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  const calculateProgress = (date: Date) => {
    const now = new Date()
    const start = sortedEvents[0].date
    const end = sortedEvents[sortedEvents.length - 1].date
    
    if (date > now) return 0
    
    const total = end.getTime() - start.getTime()
    const current = now.getTime() - start.getTime()
    return Math.min(Math.max((current / total) * 100, 0), 100)
  }

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event)
    onMilestoneClick?.()
  }

  return (
    <div className="relative max-w-full">
      <div className="flex items-center gap-2 mb-8">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hidden sm:flex"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div 
          ref={timelineRef}
          className="flex-1 overflow-x-auto relative scrollbar-hide"
          style={{ height: '80px' }}
        >
          <div className="absolute w-full h-0.5 bg-gray-200 dark:bg-gray-700 top-1/2 -translate-y-1/2">
            <div 
              className="absolute h-full bg-blue-500 dark:bg-blue-400 transition-all duration-500"
              style={{ width: `${calculateProgress(new Date())}%` }}
            />
          </div>
          
          <div className="flex gap-12 sm:gap-24 absolute top-0 left-0 w-full items-center px-4" 
               style={{ height: '80px' }}>
            {sortedEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => handleEventClick(event)}
                className={`flex flex-col items-center relative transition-all
                  ${selectedEvent === event ? 'scale-110' : 'hover:scale-105'}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 shadow-sm transition-colors
                  ${selectedEvent === event 
                    ? 'bg-blue-500 border-blue-500 dark:bg-blue-400 dark:border-blue-400' 
                    : 'bg-white border-gray-300 dark:border-gray-600'}`}
                />
                <span className="text-sm font-medium mt-3 whitespace-nowrap">
                  {format(event.date, 'yyyy')}
                </span>
              </button>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hidden sm:flex"
          onClick={() => handleScroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {selectedEvent && (
        <div className="mt-8">
          <Card className="border-0 shadow-lg dark:shadow-none">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{selectedEvent.company}</h3>
                  <h4 className="text-base text-gray-600 dark:text-gray-400">{selectedEvent.role}</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                  {format(selectedEvent.date, 'MMMM yyyy')}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedEvent.summary}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

