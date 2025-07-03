"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Volume2, ExternalLink, Music, X, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Song {
  id: number
  title: string
  artist: string
  album: string
  duration: number
  audioUrl: string
  albumArt: string
  youtubeUrl: string
}

const playlist: Song[] = [
  {
    id: 1,
    title: "Điều chưa nói",
    artist: "Tùa ft. CM1X",
    album: "Tùa",
    duration: 356,
    audioUrl: "https://upload.cdn.akk1to.is-a.dev/content/dieuchuanoi.m4a",
    albumArt: "https://upload.cdn.akk1to.is-a.dev/content/album1.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=WJ1Y9pZrNjA",
  },
  {
    id: 2,
    title: "廻廻奇譚 (kaikaikitan) - Eve MV",
    artist: "Jujutsu Kaisen",
    album: "Eve MV",
    duration: 343,
    audioUrl: "https://upload.cdn.akk1to.is-a.dev/content/jjk.m4a",
    albumArt: "https://upload.cdn.akk1to.is-a.dev/content/album2.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=1tk1pqwrOys",
  },
  {
    id: 3,
    title: "EGO - Valorant 5 Year Anniversary",
    artist: "Mary Ade (ft. Qung Madi)",
    album: "VALORANT",
    duration: 318,
    audioUrl: "https://upload.cdn.akk1to.is-a.dev/content/ego.mp3",
    albumArt: "https://upload.cdn.akk1to.is-a.dev/content/album3.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=MynXN5mcR9k",
  },
]

export function FloatingMusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  const safePlay = async () => {
    try {
      await audioRef.current?.play()
    } catch (err) {
      /* autoplay blocked or other issue – ignore */
    }
  }

  const currentSong = playlist[currentSongIndex]

  useEffect(() => {
    // Auto-play when component mounts
    const timer = setTimeout(() => {
      if (audioRef.current) {
        safePlay()
      }
    }, 10) // Small delay to ensure audio is loaded

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const handleEnded = () => nextSong()

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentSongIndex])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.audioUrl
      if (isPlaying) {
        // Small delay to ensure new audio source is loaded
        setTimeout(() => {
          safePlay()
        }, 100)
      }
    }
  }, [currentSongIndex, isPlaying])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        safePlay()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length)
  }

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
  }

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const openYouTube = () => {
    window.open(currentSong.youtubeUrl, "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <>
      <audio ref={audioRef} />

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          width: isExpanded ? "400px" : isMinimized ? "60px" : "420px",
          height: isExpanded ? "500px" : isMinimized ? "60px" : "80px",
        }}
        transition={{ duration: 0.3, type: "spring", damping: 20 }}
      >
        <div className="relative overflow-hidden rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 shadow-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-full blur opacity-50"></div>

          <div className="relative">
            {isMinimized ? (
              // Minimized State
              <div className="w-full h-full flex items-center justify-center p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(false)}
                  className="text-white hover:bg-white/10 rounded-full"
                >
                  <Music className="h-5 w-5" />
                </Button>
              </div>
            ) : isExpanded ? (
              // Expanded State - Full Player
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Now Playing</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(true)}
                      className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsVisible(false)}
                      className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Album Art */}
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                    <img
                      src={currentSong.albumArt || "/placeholder.svg"}
                      alt={currentSong.album}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Song Info */}
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-bold text-white truncate">{currentSong.title}</h4>
                  <p className="text-zinc-400 truncate">{currentSong.artist}</p>
                  <p className="text-zinc-500 text-sm truncate">{currentSong.album}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <Slider
                    value={[currentTime]}
                    max={currentSong.duration}
                    step={1}
                    onValueChange={(value) => seekTo(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(currentSong.duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSong}
                    className="text-white hover:bg-white/10 rounded-full"
                  >
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/10 rounded-full w-12 h-12 bg-blue-500/20"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSong}
                    className="text-white hover:bg-white/10 rounded-full"
                  >
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>

                {/* Volume & External Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    <Volume2 className="h-4 w-4 text-zinc-400" />
                    <Slider
                      value={[volume]}
                      max={1}
                      step={0.1}
                      onValueChange={(value) => setVolume(value[0])}
                      className="flex-1"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openYouTube}
                    className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full ml-4"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                {/* Playlist */}
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  <h5 className="text-sm font-medium text-zinc-400">Playlist</h5>
                  {playlist.map((song, index) => (
                    <button
                      key={song.id}
                      onClick={() => setCurrentSongIndex(index)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        index === currentSongIndex
                          ? "bg-blue-500/20 text-white"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="text-sm font-medium truncate">{song.title}</div>
                      <div className="text-xs text-zinc-500 truncate">{song.artist}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Compact State
              <div className="flex items-center gap-4 p-4">
                {/* Album Art */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={currentSong.albumArt || "/placeholder.svg"}
                    alt={currentSong.album}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Song Info */}
                <div className="flex-1 min-w-0 mr-2">
                  <h4 className="text-sm font-medium text-white truncate">{currentSong.title}</h4>
                  <p className="text-xs text-zinc-400 truncate">{currentSong.artist}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSong}
                    className="text-white hover:bg-white/10 rounded-full w-8 h-8"
                  >
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/10 rounded-full w-8 h-8"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSong}
                    className="text-white hover:bg-white/10 rounded-full w-8 h-8"
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openYouTube}
                    className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
                    title="Open on YouTube"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
