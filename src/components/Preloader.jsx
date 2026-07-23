import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ children }) {
  const [percent, setPercent] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    // Check if the user has already seen the preloader in this session
    const hasSeen = sessionStorage.getItem('vitaly_preloader_seen')
    if (hasSeen) {
      setIsComplete(true)
    } else {
      setShouldShow(true)
    }
  }, [])

  useEffect(() => {
    if (!shouldShow) return

    let current = 0
    const duration = 1600 // Total animation duration in ms
    const intervalTime = 20
    const totalSteps = duration / intervalTime

    const interval = setInterval(() => {
      current += 1
      const progress = current / totalSteps
      
      // Non-linear progress curve (starts fast, slows down in middle, speeds up at end)
      let calculatedPercent = Math.floor(progress * 100)
      if (progress < 0.4) {
        // Fast start
        calculatedPercent = Math.floor(Math.sin((progress / 0.4) * (Math.PI / 2)) * 50)
      } else if (progress < 0.85) {
        // Slow middle
        const ratio = (progress - 0.4) / 0.45
        calculatedPercent = 50 + Math.floor(Math.sin(ratio * (Math.PI / 2)) * 40)
      } else {
        // Linear finish
        const ratio = (progress - 0.85) / 0.15
        calculatedPercent = 90 + Math.floor(ratio * 10)
      }

      if (calculatedPercent >= 100) {
        setPercent(100)
        clearInterval(interval)
        setTimeout(() => {
          setIsComplete(true)
          sessionStorage.setItem('vitaly_preloader_seen', 'true')
        }, 400) // Hold at 100% for a brief moment
      } else {
        setPercent(calculatedPercent)
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [shouldShow])

  return (
    <>
      <AnimatePresence mode="wait">
        {!isComplete && shouldShow && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%',
              transition: { 
                duration: 0.85, 
                ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for a luxury slide-up feel
                delay: 0.1 
              }
            }}
            className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-between py-16 px-6 text-white select-none pointer-events-auto"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none" />

            {/* Header label */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-bold"
            >
              Premium Seramik & Tasarım
            </motion.div>

            {/* Main Content: Large Number and Brand Name */}
            <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
              {/* Brand Lettering */}
              <div className="overflow-hidden py-2">
                <motion.span 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.3 }}
                  className="font-display text-2xl sm:text-3xl lg:text-4xl text-white block tracking-[0.18em]"
                >
                  VITALY CONCEPT
                </motion.span>
              </div>

              {/* Elegant Counter */}
              <div className="h-24 sm:h-32 flex items-center justify-center">
                <motion.span 
                  key={percent}
                  initial={{ opacity: 0.4, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-display text-6xl sm:text-8xl text-[#C5A059] font-light font-variant-numeric-tabular-nums"
                >
                  {String(percent).padStart(2, '0')}
                  <span className="text-xl sm:text-3xl align-super ml-1 font-sans text-white/50">%</span>
                </motion.span>
              </div>
            </div>

            {/* Bottom Bar: Loading Progress Bar */}
            <div className="w-full max-w-[240px] flex flex-col items-center space-y-4">
              {/* Slim Progress Bar */}
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                  className="absolute top-0 bottom-0 left-0 bg-[#C5A059]"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.5 }}
                className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-medium"
              >
                Yükleniyor...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fade-in wrapper for the website content */}
      {(!shouldShow || isComplete) ? (
        <motion.div
          initial={shouldShow ? { opacity: 0, y: 15 } : false}
          animate={shouldShow ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {children}
        </motion.div>
      ) : (
        // Hide content while loading to prevent flashes and jumpy scroll behavior
        <div className="opacity-0 h-screen overflow-hidden" aria-hidden="true" />
      )}
    </>
  )
}
