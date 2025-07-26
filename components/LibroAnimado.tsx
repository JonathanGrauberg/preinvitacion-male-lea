'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function LibroAnimado() {
  const bookRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!bookRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('open')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(bookRef.current)
    return () => observer.disconnect()
  }, [])

  const handleClick = () => {
    router.push('/galeria')
  }

  return (
    <div
      ref={bookRef}
      className="book mx-auto mt-10"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <p>Entrá</p>
      <div className="cover">
        <p>Ver recuerdos</p>
      </div>
    </div>
  )
}
