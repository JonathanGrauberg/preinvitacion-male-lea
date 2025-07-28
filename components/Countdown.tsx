'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ months: 0, weeks: 0, days: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const eventDate = new Date('2026-02-14')

      // Total días hasta el evento
      const totalDays = Math.floor(
        (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      )

      // Calcular meses de forma real
      let months =
        eventDate.getMonth() -
        now.getMonth() +
        12 * (eventDate.getFullYear() - now.getFullYear())

      let monthAdjustedDate = new Date(now)
      monthAdjustedDate.setMonth(now.getMonth() + months)

      if (monthAdjustedDate > eventDate) {
        months -= 1
        monthAdjustedDate = new Date(now)
        monthAdjustedDate.setMonth(now.getMonth() + months)
      }

      // Días restantes después de quitar meses
      const remainingDays = Math.floor(
        (eventDate.getTime() - monthAdjustedDate.getTime()) /
          (1000 * 60 * 60 * 24)
      )

      const weeks = Math.floor(remainingDays / 7)
      const days = remainingDays % 7

      setTimeLeft({ months, weeks, days })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 86400000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center mt-10 text-gray-300">
      <p className="text-lg sm:text-xl">
        Faltan{' '}
        <span className="text-marron-100 font-semibold">{timeLeft.months}</span>{' '}
        meses,{' '}
        <span className="text-marron-100 font-semibold">{timeLeft.weeks}</span>{' '}
        semanas y{' '}
        <span className="text-marron-100 font-semibold">{timeLeft.days}</span>{' '}
        días
      </p>
    </div>
  )
}
