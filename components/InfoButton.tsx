'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function InfoButton() {
  const [showOptions, setShowOptions] = useState(false)

  const alojamientos = [
    {
      nombre: 'Cabañas del Parador',
      url: 'https://www.google.com/travel/search?q=caba%C3%B1as%20del%20parador&hl=es-AR&gl=ar',
    },
    {
      nombre: 'Open Club',
      url: 'https://www.openclubparana.com.ar/',
    },
    {
      nombre: 'Maran Suites & Towers',
      url: 'https://maran.com.ar/',
    },
    {
      nombre: 'Howard Johnson',
      url: 'https://www.wyndhamhotels.com/es-xl/hojo/parana-argentina/howard-johnson-plaza-hotel-mayorazgo/overview?CID=LC:q68ryvg9cq3avi8:19487&iata=00093796',
    },
    {
      nombre: 'Hotel Coé Verá',
      url: 'https://share.google/TRJruALmKoUzIh77i',
    },
    {
      nombre: 'Gran Hotel Paraná',
      url: 'https://share.google/5Cg36N9xYhpqqmUg9',
    },
    {
      nombre: 'Hotel San Jorge',
      url: 'https://share.google/2MTm1OjiATTsOFwtY',
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="w-64 mx-auto text-[1vh] tracking-wide uppercase border border-marron-100 text-grayblack px-6 py-2 rounded transition-colors duration-300 hover:bg-marron-100 hover:text-black"
      >
        ¿Dónde me alojo?
      </button>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex flex-col space-y-2 w-64 mx-auto"
          >
            {alojamientos.map((alojamiento, index) => (
              <motion.a
                key={alojamiento.nombre}
                href={alojamiento.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block text-center text-grayblack py-2 rounded transition hover:bg-marron-100 hover:text-black"
              >
                {alojamiento.nombre}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
