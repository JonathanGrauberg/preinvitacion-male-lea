'use client'

import { Playfair_Display } from 'next/font/google'
import { Great_Vibes } from 'next/font/google'
import CalendarButton from '../../components/CalendarButton'
import ConfirmButton from '../../components/ConfirmButton'
import SuggestSongButton from '../../components/SuggestSongButton'
import InfoButton from '../../components/InfoButton'
import Countdown from '../../components/Countdown'
import MoreButton from '../../components/MoreButton'
import LibroAnimado from '../../components/LibroAnimado'


const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-white text-center flex flex-col items-center justify-center">
      <img src="/img/encabezado.png" alt="Anillos" className="w-full sm:w-[200px] mb-2" />
      <p className="text-black text-xl px-20 py-20 mb-auto mt-[-6em]">Un sí para toda la vida</p>
      <img src="/icons/ML.svg" alt="Anillos" className="w-[170px] sm:w-[200px] mb-2" />
      <p className="text-black px-20 py-20 mb-10">Después de tanto buscarnos nos encontramos,
        ahora nos elegimos y decidimos caminar juntos
        la vida... nada sería igual sin vos en este día
        tan importante para nosotros.</p> 

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
        {/* Caja 1 */}
        <div className="w-[170px] h-[30px] bg-doradoboda text-white rounded flex items-center justify-center">
          <span className="text-base">Ceremonia</span>
        </div>

        {/* Caja 2 */}
        <div className="w-[170px] h-[15px] text-doradoboda rounded flex items-center justify-center">
          <span className="text-2xl">20:30 hs</span>
        </div>

        {/* Caja 3 */}
        <button
          onClick={() => window.open('https://forms.gle/xxxxxxx', '_blank')} // Reemplazá con tu link real
          className="w-[170px] h-[30px] border border-doradoboda text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
        >
          <span className="text-[0.7rem]">CONFIRMAR ASISTENCIA</span>
        </button>
      </section>


      <section className="text-center mt-12 items-center space-y-3">
        {/* Caja 1 */}
        <div className="w-[170px] h-[30px] bg-doradoboda text-white rounded flex items-center justify-center">
          <span className="text-base">Celebración</span>
        </div>

        {/* Caja 2 */}
        <div className="w-[170px] h-[15px] text-doradoboda rounded flex items-center justify-center">
          <span className="text-2xl">21:30 hs</span>
        </div>

        {/* Caja 3 */}
        <button
          onClick={() => window.open('https://forms.gle/xxxxxxx', '_blank')} // Reemplazá con tu link real
          className="w-[170px] h-[30px] border border-doradoboda text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
        >
          <span className="text-[0.7rem]">CONFIRMAR ASISTENCIA</span>
        </button>
      </section>


      <section className="text-center mt-12 items-center space-y-3">
        {/* Caja 1 */}
        <div className="w-[170px] h-[30px] bg-marron-100 text-white rounded flex items-center justify-center">
          <span className="text-sm">Salón Piedra Mora</span>
        </div>

        {/* Caja 2 */}
        <div className="w-[170px] h-[15px] text-grayblack rounded flex items-center justify-center">
          <span className="text-sm">Acceso Norte - Paraná</span>
        </div>

        {/* Caja 3 */}
        <button
          onClick={() => window.open('https://forms.gle/xxxxxxx', '_blank')} // Reemplazá con tu link real
          className="w-[170px] h-[30px] border border-marron-100 text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
        >
          <span className="text-[0.7rem]">COMO LLEGAR</span>
        </button>
      </section>

      <h3 className="text-center text-black text-[1rem] mb-4 mt-[10rem]">INSTANTES ETERNOS</h3>

      <div>
        <LibroAnimado />
      </div>
      

<section className="flex flex-col items-center gap-6 mt-12">     
  {/* Puntos grises cuadrados */}
      <div className="flex gap-6">
        <div className="w-2 h-2 bg-cards-color rounded-[20%]" />
        <div className="w-2 h-2 bg-cards-color rounded-[20%]" />
        <div className="w-2 h-2 bg-cards-color rounded-[20%]" /> 
      </div>


  {/* Tarjetas en fila siempre */}
  <div className="flex flex-wrap justify-center gap-6 mt-4 mb-12 sm:gap-10">
  {/* Música */}
  <div
    onClick={() => {
      window.open('https://forms.gle/pMTxebtFZ1qGcBBQ8', '_blank') // <-- Cambiá el enlace real si querés
    }}
    className="bg-cards-color mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition sm:w-[117px] sm:h-[138px] hover:scale-105"
  >
    <p className="text-xs sm:text-base font-semibold text-white mb-2">MÚSICA</p>
    <img src="/icons/music.svg" alt="Música" className="w-12 h-12 sm:w-17 sm:h-17" />
  </div>

  {/* Vestimenta */}
    <div
      onClick={() => {
        alert('Próximamente les enviaremos información sobre la vestimenta. ✨')
      }}
      className="bg-cards-color mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition sm:w-[117px] sm:h-[138px] hover:scale-105"
    >
      <p className="text-xs sm:text-base font-semibold text-white mb-2">VESTIMENTA</p>
      <img src="/icons/tie.svg" alt="Vestimenta" className="w-12 h-12 sm:w-17 sm:h-17" />
    </div>

    {/* Más Info */}
    <div
      onClick={() => {
        alert('¡Estamos muy felices y queremos que estés en este momento tan importante para nosotros! 🥰\n\nDentro de poco te enviaremos toda la información.')
      }}
      className="bg-cards-color mt-10 rounded-lg px-4 py-6 w-[90px] h-[115px] shadow-md flex flex-col items-center cursor-pointer transition sm:w-[117px] sm:h-[138px] hover:scale-105"
    >
      <p className="text-xs sm:text-base font-semibold text-white mb-2 whitespace-nowrap">MÁS INFO</p>
      <img src="/icons/info.svg" alt="Más Info" className="w-12 h-12 sm:w-17 sm:h-17" />
    </div> 
</div>  

</section>
      <section className="text-center text-gray-300 mt-16 px-4 items-center">
        <h3 className="text-xl font-light text-black mb-2">REGALOS</h3>
        <p className="max-w-[15rem] text-[0.8rem] sm:text-base text-marron-100 mb-6 mx-auto text-center">
          Si deseas regalarnos algo más que tu presencia...
        </p>
        <img src="/icons/regalo.svg" alt="Alojamiento" className="w-20 h-20 mx-auto mb-4" />
        <MoreButton />
      </section>

      <section className="text-center text-gray-300 mt-16 px-4 items-center">
        <h3 className="text-xl font-light text-black mb-2">ALOJAMIENTOS</h3>
        <p className="max-w-[13rem] text-[0.8rem] sm:text-base text-marron-100 mb-6 mx-auto text-center">
          Te proporcionamos los mejores lugares para tu estadía, así pueden reservar con anticipación
        </p>
        <img src="/icons/alojamiento.svg" alt="Alojamiento" className="w-20 h-20 mx-auto mb-4" />
        <InfoButton />
      </section>

      <img src="/img/ovalo.png" alt="Anillos" className="mt-[6rem] w-full sm:w-[200px] mb-4" />
      <img src="/icons/maleylea.svg" alt="Anillos" className="mt-auto w-[300px] sm:w-[200px] mb-4" />

      <section className="text-center text-gray-300 mt-16 px-4 items-center mb-12">
        <ConfirmButton />
        
      </section>

      <div className="mt-16 px-4 py-6 bg-[#111] text-white text-center rounded-lg max-w-xl mx-auto">
        <p className="text-lg font-medium text-yellow-500 mb-4">
          Estamos realmente emocionados por compartir este momento con ustedes
        </p>
        <p className="text-sm text-white leading-relaxed">
          🪙 Un detalle especial
Traé una monedita (sí, aunque suene raro 😄). El motivo te lo vamos a contar en la fiesta… pero confiá: es parte de algo lindo que queremos compartir con vos.

👗 Vestimenta
Elegante, pero con onda y comodidad. Queremos que vengas con tu estilo, ese que te haga sentir bien, bailar sin frenos y disfrutar toda la noche.

✅ Confirmación de asistencia
Podés confirmar hasta principios de septiembre, así nos ayudás a organizar todo con tiempo. ¡Gracias!
        </p>
      </div>

      <img src="/icons/ML.svg" alt="Anillos" className="mt-20 w-[170px] sm:w-[200px] mb-2" />
      
      

      <audio autoPlay loop>
        <source src="/musica/audioboda.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>
    </main>
  )
}
