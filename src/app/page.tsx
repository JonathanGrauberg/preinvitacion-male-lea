'use client'
import { Playfair_Display } from 'next/font/google'
import { Great_Vibes } from 'next/font/google'
import { useRef, useState, useEffect } from 'react'
import ConfirmButton from '../../components/ConfirmButton'
import SuggestSongButton from '../../components/SuggestSongButton'
import InfoButton from '../../components/InfoButton'
import Countdown from '../../components/Countdown'
import MoreButton from '../../components/MoreButton'
import LibroAnimado from '../../components/LibroAnimado'
import CostoPorPersona from '../../components/CostoPorPersona'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' })

// app/page.tsx

export const metadata = {
  title: 'M+L | Invitación',
  description: 'Nuestra invitación de boda',
  openGraph: {
    title: '¡Llegó la invitación! 💍',
    description:
      'Todo lo que necesitás: fecha, lugar, confirmación y más. Tocá para abrir ✨',
    url: 'https://boda-male-lea.vercel.app/',
    siteName: 'M+L Boda',
    images: [
      {
        url: 'https://boda-male-lea.vercel.app/og/invitacion.jpg', // tu imagen 1200x630
        width: 1200,
        height: 630,
        alt: 'Invitación M+L',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '¡Llegó la invitación! 💍',
    description:
      'Todo lo que necesitás: fecha, lugar, confirmación y más. Tocá para abrir ✨',
    images: ['https://boda-male-lea.vercel.app/og/invitacion.jpg'],
  },
}


export default function Home() {
  const [showVestimentaText, setShowVestimentaText] = useState(false)

  // === AUDIO ===
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTapHint, setShowTapHint] = useState(true)

  useEffect(() => {
    // Crear el elemento de audio una sola vez
    const el = new Audio('/musica/audioboda.MP3')
    el.loop = true
    el.preload = 'auto'
    el.muted = true          // iOS permite autoplay solo si está muted
    // playsInline ayuda en iOS (para <video>), pero dejamos el flag por compat:
    ;(el as any).playsInline = true

    audioRef.current = el

    // Intento de autoplay (muted)
    el.play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        // Si ni siquiera puede reproducir en muted (raro), mostramos botón
        setIsPlaying(false)
      })

    // Al cambiar de pestaña y volver, reintentar
    const onVisibility = () => {
      if (document.visibilityState === 'visible' && audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      el.pause()
      el.src = ''
      audioRef.current = null
    }
  }, []) // solo al montar

  // Habilita el sonido al primer gesto
  useEffect(() => {
    const enableSound = () => {
      if (!audioRef.current) return
      if (!isPlaying) {
        audioRef.current.play().catch(() => {})
        setIsPlaying(true)
      }
      // Fade-in suave del volumen
      audioRef.current.muted = false
      setMuted(false)
      setShowTapHint(false)

      // Quitamos listeners después del primer gesto
      window.removeEventListener('pointerdown', enableSound)
      window.removeEventListener('keydown', enableSound)
      window.removeEventListener('touchend', enableSound)
      window.removeEventListener('scroll', enableSound, { capture: true } as any)
    }

    // Cualquier gesto cuenta
    window.addEventListener('pointerdown', enableSound, { once: true })
    window.addEventListener('keydown', enableSound, { once: true })
    window.addEventListener('touchend', enableSound, { once: true })
    // En algunos navegadores, el primer scroll también vale como gesto
    window.addEventListener('scroll', enableSound, { capture: true, once: true })

    return () => {
      window.removeEventListener('pointerdown', enableSound)
      window.removeEventListener('keydown', enableSound)
      window.removeEventListener('touchend', enableSound)
      window.removeEventListener('scroll', enableSound, { capture: true } as any)
    }
  }, [isPlaying])

  const togglePlay = async () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch {}
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !audioRef.current.muted
    setMuted(audioRef.current.muted)
    if (!audioRef.current.muted && !isPlaying) {
      audioRef.current.play().catch(() => {})
      setIsPlaying(true)
    }
  }

  return (
    <main className="min-h-screen bg-white text-white text-center flex flex-col items-center justify-center relative">
      {/* Hint para activar sonido la 1ª vez */}
      {showTapHint && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 bg-black/70 text-white px-4 py-2 rounded-full text-sm shadow">
          🔊 Toca la pantalla para activar el sonido
        </div>
      )}

      {/* Botones flotantes de audio */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <button
          onClick={togglePlay}
          className="rounded-full bg-black/70 text-white px-4 py-2 text-xs backdrop-blur shadow hover:bg-black"
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
        </button>
        <button
          onClick={toggleMute}
          className="rounded-full bg-black/70 text-white px-4 py-2 text-xs backdrop-blur shadow hover:bg-black"
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? '🔇 Silencio' : '🔊 Sonido'}
        </button>
      </div>

      {/* --------- TU CONTENIDO ACTUAL --------- */}
      <img src="/img/encabezado.png" alt="Anillos" className="w-full h-1600 sm:w-[200px] mb-2" />
      <p className="text-black text-xl px-20 py-20 mb-auto mt-[-6em]">Un sí para toda la vida</p>
      <img src="/icons/ML.svg" alt="Anillos" className="w-[170px] sm:w-[200px] mb-2" />
      <p className="text-black px-20 py-20 mb-10 w-auto">
        Después de tanto buscarnos nos encontramos,<br />
        ahora nos elegimos y decidimos caminar juntos<br />
        la vida... nada sería igual sin vos en este día<br />
        tan importante para nosotros.
      </p>

      <p className="mb-5 text-[1.5rem] text-marron-100 uppercase tracking-widest">Día</p>
      <section className="text-center mt-auto items-center">
        <div className="flex gap-6">
          <div className="w-[70px] h-[50px] bg-cards-color text-white px-2 py-2 rounded-md font-ligth text-[1.5rem] sm:text-base">14</div>
          <div className="w-[70px] h-[50px] bg-cards-color text-white px-2 py-2 rounded-md font-ligth text-[1.5rem] sm:text-base">Feb.</div>
          <div className="w-[70px] h-[50px] bg-cards-color text-white px-2 py-2 rounded-md font-ligth text-[1.5rem] sm:text-base">2026</div>
        </div>
      </section>
      <img src="/icons/separador.svg" alt="Anillos" className="w-full sm:w-[200px] mb-4" />

      <section className="text-center mt-1 items-center space-y-3">
        <div className="w-[170px] h-[30px] bg-doradoboda text-white rounded flex items-center justify-center">
          <span className="text-base">Ceremonia</span>
        </div>
        <div className="w-[170px] h-[15px] text-doradoboda rounded flex items-center justify-center">
          <span className="text-2xl">20:30 hs</span>
        </div>
        <button
          onClick={() => window.open('https://forms.gle/n2cP8u7BhHEDnMKQ7', '_blank')}
          className="w-[170px] h-[30px] border border-doradoboda text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
        >
          <span className="text-[0.7rem]">CONFIRMAR ASISTENCIA</span>
        </button>
      </section>

      <section className="text-center mt-12 items-center space-y-3">
        <div className="w-[170px] h-[30px] bg-doradoboda text-white rounded flex items-center justify-center">
          <span className="text-base">Celebración</span>
        </div>
        <div className="w-[170px] h-[15px] text-doradoboda rounded flex items-center justify-center">
          <span className="text-2xl">21:30 hs</span>
        </div>
        <button
          onClick={() => window.open('https://forms.gle/c1Dfi2KMqA4GQLoC8', '_blank')}
          className="w-[170px] h-[30px] border border-doradoboda text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
        >
          <span className="text-[0.7rem]">CONFIRMAR ASISTENCIA</span>
        </button>
      </section>

      <section className="text-center mt-12 items-center space-y-3">
        <div className="w-[170px] h-[30px] bg-marron-100 text-white rounded flex items-center justify-center">
          <span className="text-sm">Salón Piedra Mora</span>
        </div>
        <div className="w-[170px] h-[15px] text-grayblack rounded flex items-center justify-center">
          <span className="text-sm">Acceso Norte - Paraná</span>
        </div>
        <button
          onClick={() => window.open('https://maps.app.goo.gl/gXDVLLEXV9E3pWCL9', '_blank')}
          className="w-[170px] h-[30px] border border-marron-100 text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
        >
          <span className="text-[0.7rem]">COMO LLEGAR</span>
        </button>
      </section>

      <img src="/icons/camara.gif" alt="Alojamiento" className="w-20 h-20 mx-auto mb-0 mt-20" />
      <h3 className="text-center text-black text-[1rem] mb-4 mt-0">INSTANTES ETERNOS</h3>

      <div>
        <LibroAnimado />
      </div>

      <section className="flex flex-col items-center gap-6 mt-12">
        <div className="flex gap-6">
          <div className="w-2 h-2 bg-cards-color rounded-[20%]" />
          <div className="w-2 h-2 bg-cards-color rounded-[20%]" />
          <div className="w-2 h-2 bg-cards-color rounded-[20%]" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-4 mb-12 sm:gap-10">
          <div
            onClick={() => { window.open('https://forms.gle/pMTxebtFZ1qGcBBQ8', '_blank') }}
            className="bg-cards-color mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition sm:w-[117px] sm:h-[138px] hover:scale-105"
          >
            <p className="text-xs sm:text-base font-semibold text-white mb-2">MÚSICA</p>
            <img src="/icons/music.svg" alt="Música" className="w-12 h-12 mr-3 sm:w-17 sm:h-17" />
          </div>

          <div className="flex items-center">
            <div
              onClick={() => setShowVestimentaText((prev) => !prev)}
              className={`bg-cards-color mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition-all duration-300 sm:w-[117px] sm:h-[138px] hover:scale-105 ${
                showVestimentaText ? 'translate-x-[-130%]' : ''
              }`}
            >
              <p className="text-xs sm:text-base font-semibold text-white mb-2">VESTIMENTA</p>
              <img src="/icons/tie.svg" alt="Vestimenta" className="w-12 h-12 sm:w-17 sm:h-17" />
            </div>

            {showVestimentaText && (
              <div className="absolute left-[40%] mt-10 bg-grayblack text-white rounded-lg px-3 py-4 w-[210px] h-[200px] shadow-md sm:w-[250px] sm:h-[138px] flex items-center justify-center text-center transition-all duration-400">
                Elegante, pero con onda y comodidad. Queremos que vengas con tu estilo, ese que te haga sentir bien, bailar sin frenos y disfrutar toda la noche.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="text-center text-gray-300 mt-16 px-4 items-center">
        <h3 className="text-xl font-light text-black mb-2">REGALOS</h3>
        <p className="max-w-[15rem] text-[0.8rem] sm:text-base text-marron-100 mb-6 mx-auto text-center">
          Si deseas regalarnos algo más que tu presencia...
        </p>
        <img src="/icons/regalo.gif" alt="Alojamiento" className="w-20 h-20 mx-auto mb-4" />
        <MoreButton />
      </section>

      <section className="text-center text-gray-300 mt-16 px-4 items-center">
        <h3 className="text-xl font-light text-black mb-2">ALOJAMIENTOS</h3>
        <p className="max-w-[13rem] text-[0.8rem] sm:text-base text-marron-100 mb-6 mx-auto text-center">
          Te proporcionamos los mejores lugares para tu estadía, así pueden reservar con anticipación
        </p>
        <img src="/icons/alojamiento.gif" alt="Alojamiento" className="w-20 h-20 mx-auto mb-4" />
        <InfoButton />
      </section>

      <img src="/img/ovalo.png" alt="ovalo" className="mt-[6rem] w-full sm:w-[200px] mb-4" />
      <img src="/icons/maleylea.svg" alt="maleylea" className="mt-auto w-[300px] sm:w-[200px] mb-4" />

      <section className="text-center text-gray-300 mt-16 px-4 items-center mb-5">
        <ConfirmButton />
      </section>

      <section className="text-center text-gray-300 mt-0 px-4 items-center mb-12">
        <CostoPorPersona />
      </section>

      <section className="text-center text-gray-300 mt-0 px-4 items-center mb-0">
        <SuggestSongButton />
      </section>

      <section className="text-center text-gray-300 mt-0 px-4 items-center mb-12">
        <Countdown />
      </section>

      <img src="/img/confirmacion.png" alt="tarjeta confirmacion" className="mt-5 w-[300px] sm:w-[200px] mb-4" />
      <img src="/icons/ML.svg" alt="Anillos" className="mt-20 w-[170px] sm:w-[200px] mb-[100px]" />
    </main>
  )
}
