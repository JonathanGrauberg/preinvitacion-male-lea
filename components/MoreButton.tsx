'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MoreButton() {
  const [showOptions, setShowOptions] = useState(false)

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
        onClick={() => setShowOptions(!showOptions)}
          className="w-[170px] h-[30px] text-[0.8rem] border border-doradoboda text-grayblack rounded flex items-center justify-center hover: hover:text-white transition"
      >
        VER MÁS
      </button>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex flex-col space-y-2 w-64 mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={copyToClipboard}
              className="block text-center text-marron-100 py-2 rounded transition hover:bg-marron-100 hover:text-black cursor-pointer"
            >
              Nuestro ALIAS:<br />
              <span className="font-semibold">{alias}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
