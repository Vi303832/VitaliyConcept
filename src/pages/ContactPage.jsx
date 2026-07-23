import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import AnimatedButton from '../components/AnimatedButton'

const SHOWROOM_ADDRESS = 'Ahmet Yesevi, Sanayi Cd. No:563/D, 16140 Nilüfer/Bursa'
const MAPS_QUERY = encodeURIComponent(SHOWROOM_ADDRESS)
const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`
const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  service: 'Banyo & Vitrifiye Tasarımı',
  store: 'Bursa Showroom',
  message: '',
  _gotcha: '',
}

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: 'Showroom',
    lines: ['Ahmet Yesevi, Sanayi Cd. No:563/D', '16140 Nilüfer / Bursa'],
    href: MAPS_LINK_URL,
    external: true,
  },
  {
    icon: Phone,
    title: 'Telefon',
    lines: ['+90 533 045 28 86'],
    href: 'tel:+905330452886',
  },
  {
    icon: Mail,
    title: 'E-posta',
    lines: ['info@vitalyconcept.com'],
    href: 'mailto:info@vitalyconcept.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: ['Hızlı teklif ve destek'],
    href: 'https://wa.me/905413587611',
    external: true,
  },
]

const BENEFITS = [
  'Seramik ve tasarım çözümlerimizin projenizi nasıl dönüştüreceğini görün',
  'Fiyatlandırma, teslimat planı ve malzeme ihtiyaçlarınızı netleştirin',
  'Ev, villa veya ticari projenize özel teklifi alın',
]

export default function ContactPage() {
  const location = useLocation()
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const scrollToForm = () => {
      const el = document.getElementById('teklif')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const hash = location.hash || window.location.hash
    if (hash === '#teklif') {
      const t = window.setTimeout(scrollToForm, 80)
      return () => clearTimeout(t)
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#teklif') {
        document.getElementById('teklif')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || status === 'submitting') return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          store: formData.store,
          message: formData.message,
          _subject: `Vitaly Concept — Teklif Talebi: ${formData.name}`,
          _gotcha: formData._gotcha,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(INITIAL_FORM)
        return
      }

      const data = await response.json().catch(() => null)
      setErrorMessage(
        data?.errors?.[0]?.message ||
          'Gönderim başarısız oldu. Lütfen tekrar deneyin veya WhatsApp ile yazın.'
      )
      setStatus('error')
    } catch {
      setErrorMessage(
        'Bağlantı hatası oluştu. Lütfen internetinizi kontrol edip tekrar deneyin.'
      )
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased overflow-x-hidden">
      <SiteHeader />

      <section className="pt-14 lg:pt-20 pb-10 border-b border-obsidian/10">
        <div className="container-max space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-obsidian font-semibold">İletişim</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="section-label block">Ücretsiz Teklif</span>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-obsidian leading-[1.08] tracking-tight">
              İletişim
            </h1>
            <p className="text-sm sm:text-base text-outline leading-relaxed max-w-2xl">
              Showroomumuzu ziyaret edin veya formu doldurun — ekibimiz seramik, vitrifiye
              ve tasarım talepleriniz için hazır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-b border-obsidian/10">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_CARDS.map((card, idx) => {
              const content = (
                <>
                  <card.icon size={22} strokeWidth={1.5} className="text-primary" />
                  <div className="space-y-1">
                    <h2 className="text-[10px] uppercase tracking-[0.15em] font-bold text-obsidian">
                      {card.title}
                    </h2>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-outline leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </>
              )

              const className =
                'flex flex-col gap-4 border border-obsidian/10 bg-surface-container-lowest p-6 rounded-[20px] h-full transition-colors hover:border-primary/40'

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={className}>{content}</div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-b border-obsidian/10">
        <div className="container-max space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="section-label block">Konum</span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-obsidian leading-[1.1] tracking-tight">
                Bursa Showroom
              </h2>
              <p className="text-sm text-outline leading-relaxed">{SHOWROOM_ADDRESS}</p>
            </div>
            <a
              href={MAPS_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-bold text-obsidian hover:text-primary transition-colors"
            >
              Google Maps’te Aç
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[24px] border border-obsidian/10 bg-surface-container-lowest aspect-[16/10] sm:aspect-[21/9]"
          >
            <iframe
              title="Vitaly Concept Showroom Haritası"
              src={MAPS_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      <section id="teklif" className="py-16 lg:py-20 scroll-mt-28">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="section-label block">Form</span>
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-obsidian leading-[1.1] tracking-tight">
                  Seramik & tasarım
                  <br />
                  hizmetinizi planlayın
                </h2>
                <p className="text-sm text-outline leading-relaxed">
                  Sorularınız mı var? Ekibimiz Bursa showroom ve WhatsApp üzerinden
                  hızlıca yardımcı olur.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-xs text-obsidian uppercase tracking-wider">
                  Görüşmede neler konuşuruz?
                </h3>
                <div className="space-y-3">
                  {BENEFITS.map((text) => (
                    <div key={text} className="flex gap-3 items-start">
                      <span className="text-primary font-bold shrink-0">✓</span>
                      <span className="text-sm text-outline leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedButton
                href="https://wa.me/905413587611"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ile Yazın
              </AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 bg-[#E6E5E0]/40 border border-obsidian/10 p-8 md:p-10 rounded-[32px]"
            >
              <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate={false}>
                <div>
                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-obsidian tracking-tight">
                    Ücretsiz Teklif Alın
                  </h3>
                  <p className="text-xs text-outline leading-relaxed mt-1">
                    Formu doldurun; uzmanlarımız en kısa sürede sizinle iletişime geçsin.
                  </p>
                </div>

                {/* Formspree honeypot — bots fill this, humans leave it empty */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange('_gotcha')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-bold text-obsidian block">
                      Ad Soyad
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange('name')}
                      placeholder="Adınız Soyadınız"
                      className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-bold text-obsidian block">
                        E-Posta
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        placeholder="ornek@email.com"
                        className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-obsidian block">
                        Telefon
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        placeholder="05XX XXX XX XX"
                        className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-service" className="text-xs font-bold text-obsidian block">
                      Talep Edilen Hizmet
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange('service')}
                        className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Banyo & Vitrifiye Tasarımı">Banyo & Vitrifiye Tasarımı</option>
                        <option value="Salon & Antre Seramikleri">Salon & Antre Seramikleri</option>
                        <option value="Mutfak & Tezgah Arası">Mutfak & Tezgah Arası</option>
                        <option value="Dış Mekan & Teras Porselen">Dış Mekan & Teras Porselen</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-obsidian/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-store" className="text-xs font-bold text-obsidian block">
                      Hangi showroom ile çalışmak istersiniz?
                    </label>
                    <div className="relative">
                      <select
                        id="contact-store"
                        name="store"
                        value={formData.store}
                        onChange={handleChange('store')}
                        className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Bursa Showroom">Bursa Showroom (Ahmet Yesevi, Nilüfer)</option>
                        <option value="Online Showroom">Online Showroom / WhatsApp Destek</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-obsidian/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-bold text-obsidian block">
                      Mesajınız
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange('message')}
                      placeholder="Projenizin detaylarından bahsedin..."
                      className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  {status === 'success' ? (
                    <div className="bg-primary/10 border border-primary/20 text-primary-dark text-xs font-bold py-4 text-center rounded-[12px]">
                      Talebiniz başarıyla iletildi. En kısa sürede sizinle irtibata geçeceğiz.
                    </div>
                  ) : (
                    <>
                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-800 text-xs font-semibold py-3 px-4 text-center rounded-[12px]">
                          {errorMessage}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-obsidian text-white text-xs uppercase tracking-[0.15em] font-bold py-4 rounded-[12px] hover:bg-primary transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Gönderiliyor…' : 'Teklif Alın / Gönder'}
                      </button>
                    </>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
