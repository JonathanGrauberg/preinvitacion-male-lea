'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
const imageUrls = Array.from({ length: 30 }, (_, i) => `/galeriaswiper/${i + 1}.jpeg`)
export default function GaleriaPinterest() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : imageUrls.length - 1))
  }
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev! < imageUrls.length - 1 ? prev! + 1 : 0))
  }
  const handleBack = () => {
    window.history.back()
  }
  return (
    <main className="min-h-screen px-4 py-10 bg-white">
      <div className="text-center mb-10">
        <button
          onClick={handleBack}
          className="absolute top-5 left-5 text-gray-800 hover:text-gray-600"
        >
          <ChevronLeft size={30} />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Galería</h1>
        <p className="text-gray-500">Explorá los momentos especiales ❤️</p>
      </div>
      {/* Galería */}
      <div className="grid-container">
        {imageUrls.map((src, index) => (
          <img
            key={index}
            src={src}
            className="grid-item"
            alt={`Imagen ${index + 1}`}
            loading="lazy"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
          >
            <X size={30} />
          </button>
          <button className="absolute left-5 text-white" onClick={handlePrev}>
            <ChevronLeft size={40} />
          </button>
          <img
            src={imageUrls[selectedIndex]}
            alt="Vista ampliada"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
          <button className="absolute right-5 text-white" onClick={handleNext}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </main>
  )
}