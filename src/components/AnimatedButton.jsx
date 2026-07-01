import { useState } from 'react'
import { motion } from 'framer-motion'

function ArrowUpRight({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

const SIZE_CLASSES = {
  sm: 'text-[10px] tracking-[0.15em] h-11 pl-5',
  md: 'text-xs tracking-[0.15em] h-12 pl-6',
  lg: 'text-xs tracking-[0.15em] h-14 pl-8',
}

export default function AnimatedButton({
  children,
  href,
  type = 'button',
  onClick,
  className = '',
  size = 'md',
  fullWidth = false,
  ...props
}) {
  const [hovered, setHovered] = useState(false)
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={[
        'btn-animated relative inline-flex items-center justify-between gap-4',
        'bg-obsidian text-white font-sans font-bold uppercase select-none',
        'overflow-hidden cursor-pointer transition-shadow duration-300',
        SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <motion.span
        className="btn-animated-circle absolute"
        animate={
          hovered
            ? {
              width: 'calc(100% - 4px)',
              height: 'calc(100% - 4px)',
              right: 2,
              top: '50%',
              y: '-50%',
              backgroundColor: 'var(--color-primary)',
            }
            : {
              width: 36,
              height: 36,
              right: 6,
              top: '50%',
              y: '-50%',
              backgroundColor: 'var(--color-primary)',
            }
        }
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      />

      <span className="relative z-10 whitespace-nowrap">{children}</span>

      <span className="relative z-10 flex items-center justify-center w-9 h-9 shrink-0 mr-1.5 text-obsidian">
        <motion.span
          animate={hovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ArrowUpRight />
        </motion.span>
      </span>
    </Component>
  )
}
