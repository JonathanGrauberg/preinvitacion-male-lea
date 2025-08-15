'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CostoPorPersona() {
  const [showInfo, setShowInfo] = useState(false)
  const alias = 'leaymale.boda'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(alias)
      .then(() => {
        alert(`Alias "${alias}" copiado al portapapeles ✨`)
      })
      .catch((err) => {
        console.error('Error al copiar:', err)
      })
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShowInfo(!showInfo)}
          className="w-[300px] h-[30px] text-[0.8rem] bg-grayblack border border-doradoboda text-white rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
      >
        COSTO POR PERSONA      
        </button>

      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-[300px] rounded shadow-md bg-white text-center text-grayblack p-4 "
          >
            
            <div className="py-1 text-[0.9rem]">
              <p className="text-black">$ 60.000 por persona.</p>
              <p className="text-gray-500 py-2">(solo para mayores)</p>
            </div>
            <div
              onClick={copyToClipboard}
              className="cursor-pointer text-sm text-black hover:text-doradoboda transition"
            >
              Alias: <span className="font-bold">{alias}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
