import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedButton from './AnimatedButton'

const NAV_LINKS = [
  { to: '/', label: 'Anasayfa', end: true },
  { to: '/urunler', label: 'Ürünler', end: false },
  { to: '/kurumsal', label: 'Kurumsal', end: false },
  { to: '/#categories', label: 'Koleksiyonlar', hash: true },
  { to: '/iletisim', label: 'İletişim', end: false },
]

const LG_QUERY = '(min-width: 1024px)'

export function SiteHeader() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    const mq = window.matchMedia(LG_QUERY)
    const onBreakpoint = (e) => {
      if (e.matches) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    mq.addEventListener('change', onBreakpoint)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      mq.removeEventListener('change', onBreakpoint)
    }
  }, [menuOpen])

  return (
    <>
      <div className="bg-obsidian text-surface text-center py-2 px-4 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold leading-snug">
        <span className="inline sm:hidden">Hayal Ettiğiniz Projelere Kavuşturur</span>
        <span className="hidden sm:inline">Hayal Ettiğiniz Projelere Kavuşturur &nbsp;•&nbsp; Seramik — Vitrifiye — Banyo — Mutfak</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-surface-container-lowest/95 backdrop-blur-md py-3 sm:py-4 border-obsidian/10'
            : 'bg-surface-container-lowest py-3.5 sm:py-5 border-obsidian/5'
        }`}
      >
        <div className="container-max flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 min-w-0">
          <Link to="/" className="flex flex-col min-w-0 shrink">
            <span className="font-display text-[1.05rem] sm:text-xl md:text-2xl tracking-wide text-obsidian truncate">
              Vitaly Concept
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-outline font-semibold truncate">
              Seramik • Vitrifiye • Tasarım
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 shrink-0">
            {NAV_LINKS.map((link) =>
              link.hash ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="text-[11px] xl:text-xs uppercase tracking-[0.08em] xl:tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-[11px] xl:text-xs uppercase tracking-[0.08em] xl:tracking-[0.1em] font-semibold transition-colors whitespace-nowrap ${
                      isActive ? 'text-primary' : 'text-obsidian hover:text-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <AnimatedButton
              href="/iletisim#teklif"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Ücretsiz Teklif Al
            </AnimatedButton>
            <button
              type="button"
              className="lg:hidden w-10 h-10 border border-obsidian/10 hover:border-obsidian/25 hover:bg-obsidian/5 rounded-full flex items-center justify-center text-obsidian transition-all cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-obsidian/45 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobil menü"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 bottom-0 w-[min(100vw,300px)] z-[110] bg-surface shadow-2xl border-l border-obsidian/10 lg:hidden flex flex-col pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] px-5 sm:px-6 overflow-y-auto overscroll-contain"
            >
              <div className="flex justify-between items-center pb-5 border-b border-obsidian/10 mb-6">
                <span className="font-display text-lg text-obsidian tracking-wide">Menü</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Menüyü kapat"
                  className="w-10 h-10 border border-obsidian/10 rounded-full flex items-center justify-center text-obsidian hover:bg-obsidian hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) =>
                  link.hash ? (
                    <a
                      key={link.label}
                      href={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors py-3.5 border-b border-obsidian/5"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      end={link.end}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-sm uppercase tracking-[0.1em] font-semibold py-3.5 border-b border-obsidian/5 transition-colors ${
                          isActive ? 'text-primary' : 'text-obsidian hover:text-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </nav>

              <div className="mt-auto pt-8">
                <AnimatedButton
                  href="/iletisim#teklif"
                  onClick={() => setMenuOpen(false)}
                  fullWidth
                >
                  Ücretsiz Teklif Al
                </AnimatedButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-surface-container-high py-16">
      <div className="container-max space-y-12">
        <div className="text-center">
          <h4 className="font-display text-3xl text-white tracking-wide">Vitaly Concept</h4>
          <p className="text-[10px] uppercase tracking-[0.15em] text-surface-container-high mt-1">
            Seramik • Vitrifiye • Tasarım
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10 pt-12">
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">Keşfet</h5>
            <div className="flex flex-col gap-2 text-xs text-surface-container-high">
              <Link to="/" className="hover:text-primary transition-colors">Anasayfa</Link>
              <Link to="/urunler" className="hover:text-primary transition-colors">Tüm Ürünler</Link>
              <a href="/#categories" className="hover:text-primary transition-colors">Koleksiyonlar</a>
              <Link to="/iletisim" className="hover:text-primary transition-colors">İletişim</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">Kurumsal</h5>
            <div className="flex flex-col gap-2 text-xs text-surface-container-high">
              <Link to="/kurumsal" className="hover:text-primary transition-colors">Hakkımızda</Link>
              <a href="/#references" className="hover:text-primary transition-colors">Öne Çıkan Ürünler</a>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">İletişim</h5>
            <div className="text-xs text-surface-container-high space-y-2 leading-relaxed">
              <p>Ahmet Yesevi, Sanayi Cd. No:563/D, 16140 Nilüfer/Bursa</p>
              <p>+90 533 045 28 86</p>
              <p>info@vitalyconcept.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-outline">
          <span>Vitaly Concept © {new Date().getFullYear()}. Tüm Hakları Saklıdır.</span>
          <a
            href="https://www.instagram.com/vitalyconcept"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors uppercase tracking-wider"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
