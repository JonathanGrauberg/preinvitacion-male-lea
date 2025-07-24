'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ months: 0, weeks: 0, days: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const eventDate = new Date('2026-02-14')

      const totalDays = Math.floor((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

      const months = Math.floor(totalDays / 30.44) // promedio
      const remainingDaysAfterMonths = totalDays % 30.44
      const weeks = Math.floor(remainingDaysAfterMonths / 7)
      const days = Math.floor(remainingDaysAfterMonths % 7)

      setTimeLeft({ months, weeks, days })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 86400000) // cada 24 hs

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center mt-10 text-gray-300">
      <p className="text-lg sm:text-xl">
        Faltan <span className="text-marron-100 font-semibold">{timeLeft.months}</span> meses,{' '}
        <span className="text-marron-100 font-semibold">{timeLeft.weeks}</span> semanas y{' '}
        <span className="text-marron-100 font-semibold">{timeLeft.days}</span> días
      </p>
    </div>
  )
}
