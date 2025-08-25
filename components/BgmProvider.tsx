'use client'
import { useEffect, useRef, useState } from 'react'

// --- Singleton a nivel de módulo (persistente entre rutas) ---
export let __bgm: HTMLAudioElement | null = null

export default function BgmProvider() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!__bgm) {
      const el = new Audio('/musica/audioboda.MP3')
      el.loop = true
      el.preload = 'auto'
      el.muted = true
      ;(el as any).playsInline = true
      __bgm = el
      el.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }

    audioRef.current = __bgm

    const onVisibility = () => {
      if (document.visibilityState === 'visible' && audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [isPlaying])

  const toggleMute = async () => {
    const el = audioRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
    if (!el.muted && el.paused) {
      try {
        await el.play()
        setIsPlaying(true)
      } catch {}
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <button
        onClick={toggleMute}
        className="rounded-full bg-black/70 text-white px-4 py-2 text-xs backdrop-blur shadow hover:bg-black active:scale-[0.98] min-w-[110px]"
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        aria-pressed={!muted}
      >
        {muted ? '🔇 Silencio' : '🔊 Sonido'}
      </button>
    </div>
  )
}
