"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface DiscordActivity {
  name: string
  type: number
  details?: string
  state?: string
  timestamps?: {
    start?: number
    end?: number
  }
}

interface DiscordData {
  username: string
  status: "online" | "idle" | "dnd" | "offline"
  activities: DiscordActivity[]
}

interface DiscordStatusProps {
  className?: string
}

export function DiscordStatus({ className = "" }: DiscordStatusProps) {
  const [discordData, setDiscordData] = useState<DiscordData>({
    username: "hungg",
    status: "offline",
    activities: [],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchDiscordStatus = async () => {
    try {
      const response = await fetch("/api/discord-status")
      const result = await response.json()

      if (result.success && result.data) {
        setDiscordData({
          username: result.data.username,
          status: result.data.status,
          activities: result.data.activities || [],
        })
        setLastUpdated(new Date())
      }
    } catch (error) {
      console.error("Failed to fetch Discord status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDiscordStatus()

    // Update every 30 seconds
    const interval = setInterval(fetchDiscordStatus, 30000)

    return () => clearInterval(interval)
  }, [])

  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  }

  const statusText = {
    online: "Online",
    idle: "Away",
    dnd: "Do Not Disturb",
    offline: "Offline",
  }

  const getActivityText = () => {
    if (!discordData.activities.length) return null

    const activity = discordData.activities[0]
    if (activity.details && activity.state) {
      return `${activity.details} - ${activity.state}`
    }
    return activity.details || activity.name
  }

  const getElapsedTime = () => {
    if (!discordData.activities.length || !discordData.activities[0].timestamps?.start) {
      return null
    }

    const start = discordData.activities[0].timestamps.start
    const elapsed = Math.floor((Date.now() - start) / 1000)
    const hours = Math.floor(elapsed / 3600)
    const minutes = Math.floor((elapsed % 3600) / 60)

    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={`relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-4 transition-all duration-300 hover:border-blue-500/50 ${className}`}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-discord-blurple flex items-center justify-center">
              <img src={"https://upload.cdn.akk1to.is-a.dev/content/image.png"} />
            </div>
            <div
              className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-zinc-800 ${statusColors[discordData.status]} ${
                discordData.status === "online" ? "animate-pulse" : ""
              }`}
            ></div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white truncate">{discordData.username}</span>
              <span className="text-xs text-zinc-400">{statusText[discordData.status]}</span>
            </div>
          </div>

          {isLoading && (
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>

        {getActivityText() && (
          <div className="space-y-1">
            <div className="text-xs text-zinc-300 truncate">{getActivityText()}</div>
            {getElapsedTime() && <div className="text-xs text-zinc-500">for {getElapsedTime()}</div>}
          </div>
        )}

        {lastUpdated && (
          <div className="text-xs text-zinc-600 mt-2">Last updated: {lastUpdated.toLocaleTimeString()}</div>
        )}
      </div>
    </motion.div>
  )
}
