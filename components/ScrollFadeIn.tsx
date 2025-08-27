'use client'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function ScrollFadeIn({
  children,
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
