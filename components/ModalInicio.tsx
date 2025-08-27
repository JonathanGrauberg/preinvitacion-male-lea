'use client'
import { useEffect, useState } from 'react'
import { __bgm } from './BgmProvider'
import { DM_Serif_Display } from 'next/font/google'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
})


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
    <div style={{ background: '#eec461f8'}} className="absolute inset-0 w-full z-[9999] px-4 pb-6 pointer-events-none">
      <div style={{ marginTop: '30vh'}} className="text-white sm:rounded-xl px-5 py-6 text-center pointer-events-auto">
        <h2 style={{ fontSize: '40px'}} className={`${dmSerif.className} mb-2`}>
          ¡Bienvenidos a nuestra invitación!
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Con mucho cariño, gracias a Silvia Tejeira por regalarnos su canción para ambientar este recorrido.
        </p>
        <button
          onClick={handleComenzar}
          style={{background: '#f4882adf',
          color: 'white',
          padding: '10px 24px',
          border: 'none',
          borderRadius: '9999px'}}className="inline-flex items-center justify-center rounded-full bg-doradoboda text-white px-5 py-2 text-sm font-medium shadow hover:brightness-95 active:scale-[0.98]">
          Comenzar
        </button>
        <p style={{ fontSize: '11px'}}className="text-gray-500 mt-4">
          Podrás silenciarla cuando quieras.
        </p>
      </div>
    </div>
  )
}