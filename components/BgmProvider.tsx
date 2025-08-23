'use client'
import { useEffect, useRef, useState } from 'react'

// --- Singleton a nivel de módulo (no se destruye entre rutas) ---
let __bgm: HTMLAudioElement | null = null

export default function BgmProvider() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [muted, setMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTapHint, setShowTapHint] = useState(true)

  // Crear/reusar el objeto Audio una sola vez
  useEffect(() => {
    if (!__bgm) {
      const el = new Audio('/musica/audioboda.MP3')
      el.loop = true
      el.preload = 'auto'
      el.muted = true
      ;(el as any).playsInline = true
      __bgm = el

      // Intento de autoplay en mute
      el.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }

    audioRef.current = __bgm

    const onVisibility = () => {
      if (
        document.visibilityState === 'visible' &&
        audioRef.current &&
        isPlaying // sólo si estaba reproduciendo
      ) {
        audioRef.current.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      // OJO: no pausamos ni borramos el src acá, para que el audio siga.
    }
  }, [isPlaying])

  // Bloquear scroll mientras el modal está visible
  useEffect(() => {
    const prev = document.body.style.overflow
    if (showTapHint) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prev || ''
    }
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [showTapHint])

  // Botón "Comenzar" (gesto válido) → desmutea + play y cierra modal
  const handleComenzar = async () => {
    const el = audioRef.current
    if (!el) return
    try {
      el.muted = false
      if (el.paused) await el.play()
      setMuted(false)
      setIsPlaying(true)
      setShowTapHint(false)
    } catch (e) {
      console.warn('No se pudo activar sonido tras gesto:', e)
      // Si falla, el modal queda para reintentar
    }
  }

  // Único control global: Silencio/Sonido (no tocamos tu “backend”)
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
    <>
      {/* Modal inicial (no desaparece por scroll) */}
      {showTapHint && (
        <div className="fixed inset-0 z-[9999] flex flex-col justify-center px-4 pt-32 pb-10 min-h-screen">
          <div className="bg-white bg-opacity-[0.6] text-black rounded-xl px-5 py-6 w-full max-w-sm mx-auto shadow-lg text-center mt-[50px]">
            <h2 className="text-xl font-semibold mb-2">¡Bienvenid@ a nuestra invitación!</h2>
            <p className="text-sm text-gray-700 mb-4 px-4">
              Con mucho cariño, gracias a Silvia Tejeira por regalarnos su canción para ambientar este recorrido.
            </p>
            <button
              onClick={handleComenzar}
              className="inline-flex items-center justify-center rounded-full bg-doradoboda text-white px-5 py-2 text-sm font-medium shadow hover:brightness-95 active:scale-[0.98]"
            >
              Comenzar
            </button>
            <p className="text-[11px] text-gray-500 mt-3">
              Podrás silenciarla cuando quieras.
            </p>
          </div>
        </div>
      )}

      {/* Botón flotante global: Silencio/Sonido */}
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
    </>
  )
}