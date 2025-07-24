'use client'


import { Playfair_Display } from 'next/font/google'
import { Great_Vibes } from 'next/font/google'
import CalendarButton from '../../components/CalendarButton'
import ConfirmButton from '../../components/ConfirmButton'
import SuggestSongButton from '../../components/SuggestSongButton'
import InfoButton from '../../components/InfoButton'
import Countdown from '../../components/Countdown'



const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' })





export default function Home() {
  return (
    <main className="min-h-screen bg-blackligth text-white text-center flex flex-col items-center justify-center">
      <section className="relative h-[90vh] flex flex-col items-center justify-between pt-16 pb-10">
          <h1 className={`${greatVibes.className} text-4xl sm:text-5xl`}>
            <span className="text-marron-100">¡</span>
            <span className="text-grayligth">Buenas y Santas</span>
            <span className="text-marron-100">!</span>
          </h1>


          <div className="flex flex-col items-center">
            <img
              src="/img/anillos_dorados.png"
              alt="Anillos"
              className="w-[400px] sm:w-[200px] mb-4"
            />
<div className={`${playfair.className} text-[3.5rem] text-marron-100 leading-none text-left mb-8`}>
  <div className="ml-auto">pre</div>
  <div>invitación</div>
</div>
          </div>
      </section>            
            <section className="flex flex-col items-center gap-4 mb-8">
        <p className={`${playfair.className} text-[1rem] sm:text-lg text-gray-400`}>
          Queremos compartir una<br />noticia muy importante:
        </p>

        <div className="border border-marron-100 px-6 py-2 rounded-md">
          <p className={`${playfair.className} text-3xl sm:text-[2rem] text-marron-100 font-semibold`}>
            ¡Nos Casamos!
          </p>
        </div>
      </section>

      <p className={`${playfair.className} max-w-[13rem] text-[1rem] sm:text-lg text-gray-400 mb-8`}>
        La vida nos juntó en el momento perfecto, y ahora damos el gran paso. Nos encanta la vida,
        disfrutar de nuestra familia y ahora queremos celebrarlo con todos ustedes.<br /><br />
        ¡Prepárense para una fiesta llena de alegría, amor y buena compañía!
      </p>

      <section className="flex flex-col items-center gap-4 mb-8">
        <h2 className={`${greatVibes.className} text-7xl sm:text-5xl text-marron-100`}>Male y Lea</h2>
        <p className={`${playfair.className} text-sm text-marron-100 uppercase tracking-widest`}>Día</p>
        <div className="flex gap-2">
          <div className="bg-marron-100 text-white px-4 py-2 rounded-md font-semibold text-lg sm:text-base">14</div>
          <div className="bg-marron-100 text-white px-4 py-2 rounded-md font-semibold text-lg sm:text-base">Feb.</div>
          <div className="bg-marron-100 text-white px-4 py-2 rounded-md font-semibold text-lg sm:text-base">2026</div>
        </div>
      </section>

    <section className="flex flex-col items-center gap-6 mt-12">

      
  {/* Puntos grises cuadrados */}
  <div className="flex gap-3">
    <div className="w-3 h-3 bg-gray-500" />
    <div className="w-3 h-3 bg-gray-500" />
    <div className="w-3 h-3 bg-gray-500" /> 
  </div>

  <section className="text-center mt-16 px-4 items-center">
  <h3 className="text-xl font-light text-grayblack mb-2">UBICACIÓN DE LA CELEBRACIÓN</h3>

  <p className="text-marron-100 text-lg mb-4 font-semibold">
    Acceso Norte y JL Borges, Paraná, E.R.
  </p>

  <a
    href="https://maps.app.goo.gl/Tm3PQLU6gV4ZmMH29"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block border border-marron-100 text-grayblack px-6 py-2 rounded text-sm hover:bg-marron-100 hover:text-black transition"
  >
    Ver en el mapa
  </a>
</section>


  {/* Tarjetas en fila siempre */}
<div className="flex flex-wrap justify-center gap-6 mt-4">
  {/* Música */}
  <div
    onClick={() => {
      window.open('https://forms.gle/pMTxebtFZ1qGcBBQ8', '_blank') // <-- Cambiá el enlace real si querés
    }}
    className="bg-marron-100 mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition hover:scale-105"
  >
    <p className="text-xs sm:text-base font-semibold text-white mb-2">MÚSICA</p>
    <img src="/icons/music.svg" alt="Música" className="w-12 h-12 sm:w-17 sm:h-17" />
  </div>

  {/* Vestimenta */}
  <div
    onClick={() => {
      alert('Próximamente les enviaremos información sobre la vestimenta. ✨')
    }}
    className="bg-marron-100 mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition hover:scale-105"
  >
    <p className="text-xs sm:text-base font-semibold text-white mb-2">VESTIMENTA</p>
    <img src="/icons/tie.svg" alt="Vestimenta" className="w-12 h-12 sm:w-17 sm:h-17" />
  </div>

  {/* Más Info */}
  <div
    onClick={() => {
      alert('¡Estamos muy felices y queremos que estés en este momento tan importante para nosotros! 🥰\n\nDentro de poco te enviaremos toda la información.')
    }}
    className="bg-marron-100 mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition hover:scale-105"
  >
    <p className="text-xs sm:text-base font-semibold text-white mb-2 whitespace-nowrap">MÁS INFO</p>
    <img src="/icons/info.svg" alt="Más Info" className="w-12 h-12 sm:w-17 sm:h-17" />
  </div>
</div>

</section>

<section className="text-center text-gray-300 mt-16 px-4 items-center">
  <h3 className="text-xl font-light text-grayblack mb-2">ALOJAMIENTOS</h3>

  <p className="max-w-[13rem] text-[0.8rem] sm:text-base text-marron-100 mb-6 mx-auto text-center"> 
  Te proporcionamos los mejores lugares para tu estadía, así pueden reservar con anticipación
</p>

  <img src="/icons/alojamiento.svg" alt="Alojamiento" className="w-20 h-20 mx-auto mb-4" />

  <InfoButton/>


  <p className="mt-20 mb-3 text-3xl sm:text-4xl">
    <span className={`${greatVibes.className} text-4xl sm:text-5xl text-grayligth`}>¡No </span>
    <span className={`${greatVibes.className} text-4xl sm:text-5xl text-grayblack`}>Podés faltar!</span>
  </p>
  <ConfirmButton />
  <Countdown />
</section>

      <section className="text-center text-gray-300 mt-16 px-4 items-center">
          <h3 className="text-xl font-light text-grayblack mb-2">¿Querés hacernos un regalo?</h3>

          <p className="text-marron-100 text-lg font-semibold mb-4">
            Alias CBU: <span className="block text-grayblack mt-1">leaymale.boda</span>
          </p>

          <p className="text-sm text-gray-400 max-w-xs mx-auto">
          Si deseás hacernos un regalo, este alias está habilitado para recibir transferencias. ¡Gracias por acompañarnos en este momento especial!
          </p>
      </section>

    {/* BOTONES */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 mt-28">
                
        <SuggestSongButton />
        <CalendarButton />
      </div>

      <img
        src="/img/male_y_lea_foto.png"
        alt="male y lea"
        className="w-full mb-4" 
      />

      <h2 className={`${greatVibes.className} mt-2 mb-20 text-5xl sm:text-5xl text-marron-100`}>Male y Lea</h2>


    </main>
  )
} 
 