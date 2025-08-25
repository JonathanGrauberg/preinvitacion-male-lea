'use client'
import { useEffect, useState } from 'react'
import { __bgm } from './BgmProvider'
export default function ModalInicio() {
  const [mostrar, setMostrar] = useState(false)
  // Verificar si el modal ya fue mostrado
  useEffect(() => {
    const modalVisto = localStorage.getItem('modalVisto');
    if (!modalVisto) {
      setMostrar(true);
    }
  }, [])
  // Bloquear scroll mientras el modal está visible
  useEffect(() => {
    const prev = document.body.style.overflow
    if (mostrar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prev || ''
    }
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [mostrar])
  const handleComenzar = async () => {
    if (!__bgm) return
    try {
      __bgm.muted = false
      if (__bgm.paused) await __bgm.play()
      setMostrar(false)
      localStorage.setItem('modalVisto', 'true'); // Marcar el modal como visto
    } catch (e) {
      console.warn('No se pudo activar sonido:', e)
    }
  }
  if (!mostrar) return null
  return (
    <div style={{ marginTop: '480px' }} className="absolute inset-0 w-full z-[9999] px-4 pb-6 pointer-events-none">
      <div className="bg-white text-black rounded-t-xl sm:rounded-xl px-5 py-6 shadow-lg text-center pointer-events-auto">
        <h2 className="text-xl font-semibold mb-2">¡Bienvenid@ a nuestra invitación!</h2>
        <p className="text-sm text-gray-700 mb-4">
          Con mucho cariño, gracias a Silvia Tejeira por regalarnos su canción para ambientar este recorrido.
        </p>
        <button
          onClick={handleComenzar}
          className="inline-flex items-center justify-center rounded-full bg-doradoboda text-white px-5 py-2 text-sm font-medium shadow hover:brightness-95 active:scale-[0.98]">
          Comenzar
        </button>
        <p className="text-[11px] text-gray-500 mt-3">
          Podrás silenciarla cuando quieras.
        </p>
      </div>
    </div>
  )
}