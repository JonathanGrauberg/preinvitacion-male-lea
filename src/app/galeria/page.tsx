'use client'

import { useEffect } from 'react'

const imageUrls = Array.from({ length: 30 }, (_, i) => `/galeriaswiper/${i + 1}.jpeg`)

export default function GaleriaPinterest() {
  useEffect(() => {
    // Importar solo del lado del cliente
    import('masonry-layout').then((MasonryModule) => {
      const Masonry = MasonryModule.default
      const grid = document.querySelector('.grid-container')
      if (grid) {
        new Masonry(grid, {
          itemSelector: '.grid-item',
          columnWidth: 230,
          gutter: 20,
          isFitWidth: true,
        })
      }
    })
  }, [])

  return (
    <main className="min-h-screen px-4 py-10 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Galería</h1>
        <p className="text-gray-500">Explorá los momentos especiales ❤️</p>
      </div>
      <div className="grid-container">
        {imageUrls.map((src, index) => (
          <img
            key={index}
            src={src}
            className="grid-item"
            alt={`Imagen ${index + 1}`}
            width={230}
            loading="lazy"
          />
        ))}
      </div>
    </main>
  )
}
