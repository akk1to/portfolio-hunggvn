"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Code } from "lucide-react"
import { DiscordStatus } from "./discord-status"

interface ProfileCardProps {
  name: string
  jobTitle: string
  location: string
  avatar: string
  joinedDate: string
}

export function ProfileCard({ name, jobTitle, location, avatar, joinedDate }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-10 max-w-sm"
    >
      {/* Main Profile Card */}
      <div className="relative overflow-hidden rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-2xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/50">
              <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-zinc-800 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
            <p className="text-blue-400 font-medium mb-3 text-sm">{jobTitle}</p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Calendar className="w-3 h-3" />
                <span>Joined {joinedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Code className="w-3 h-3" />
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discord Status */}
      <DiscordStatus />
    </motion.div>
  )
}
