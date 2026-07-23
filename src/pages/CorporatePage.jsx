import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import AnimatedButton from '../components/AnimatedButton'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Kurumsal Tecrübe',
    desc: '20 yılı aşkın sektör birikimini modern tasarım anlayışıyla buluşturuyoruz.',
  },
  {
    icon: Wrench,
    title: 'Geniş Ürün Gamı',
    desc: 'Seramikten vitrifiye ve banyo dolaplarına kadar projelerinize uygun seçenekler.',
  },
  {
    icon: Truck,
    title: 'Güçlü Stok ve Sevk',
    desc: 'Bursa’dan Fransa ve Almanya’ya kadar zamanında, aksamasız teslimat.',
  },
  {
    icon: Award,
    title: 'Kişiye Özel Çözüm',
    desc: 'Her müşteriye özel fiyatlandırma, danışmanlık ve showroom desteği.',
  },
]

const PROCESS = [
  {
    id: '01',
    title: 'Planlama',
    desc: 'Projenizin ihtiyaçlarını dinler, doğru malzeme ve ölçü planını birlikte oluştururuz.',
  },
  {
    id: '02',
    title: 'Tasarım & Seçim',
    desc: 'Showroomumuzda numune inceler, yüzey, renk ve ebat tercihlerini netleştirirsiniz.',
  },
  {
    id: '03',
    title: 'Uygulama',
    desc: 'Stok ve sevk planıyla şantiyenize veya adresinize malzeme teslimini yönetiriz.',
  },
  {
    id: '04',
    title: 'Teslim & Memnuniyet',
    desc: 'İş tamamlandığında yanınızdayız — satış sonrası destek ve memnuniyet odaklıyız.',
  },
]

const TRUST_POINTS = [
  'Kurumsal ve yenilikçi yaklaşım — sektör tecrübesini modern tasarımla buluşturuyoruz.',
  'Zengin ürün yelpazesi — seramikten banyo dolaplarına kadar geniş seçenekler.',
  'Profesyonel ekip — satış öncesi ve sonrası tam müşteri desteği.',
]

export default function CorporatePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased overflow-x-hidden">
      <SiteHeader />

      <section className="pt-14 lg:pt-20 pb-10 border-b border-obsidian/10">
        <div className="container-max space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-obsidian font-semibold">Kurumsal</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="section-label block">Hakkımızda</span>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-obsidian leading-[1.08] tracking-tight">
              Vitaly Concept
            </h1>
            <p className="text-sm sm:text-base text-outline leading-relaxed max-w-2xl">
              Seramik, vitrifiye ve tasarımda kaliteyi estetikle birleştiriyoruz.
              Bursa showroomumuzdan uluslararası projelere kadar yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-obsidian/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="section-label block">Kalite ve Estetik</span>
              <h2 className="font-sans font-extrabold text-[1.75rem] sm:text-[2.25rem] text-obsidian leading-[1.1] tracking-tight">
                Seramikte kalite,
                <br />
                benzersiz estetik.
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Vitaly Concept, 20 yılı aşkın tecrübesiyle seramik sektöründe fark yaratmaya devam ediyor.
                Estetik, fonksiyonellik ve kaliteyi bir araya getirerek yaşam alanlarınıza modern dokunuşlar katıyoruz.
              </p>
              <div className="space-y-3 pt-1">
                {TRUST_POINTS.map((text) => (
                  <div key={text} className="flex gap-3 items-start">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    <span className="text-sm text-on-surface leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-[4/5] overflow-hidden border border-obsidian/10 bg-surface-container"
            >
              <img
                src="/img/mekan_luna.jpg"
                alt="Vitaly Concept uygulama örneği"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-obsidian/10">
        <div className="container-max space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="section-label block">Değerlerimiz</span>
            <h2 className="font-sans font-extrabold text-[1.75rem] sm:text-[2.25rem] text-obsidian leading-[1.1] tracking-tight">
              Neden Vitaly Concept?
            </h2>
            <p className="text-sm text-outline leading-relaxed">
              Güçlü stok ağımız ve showroom deneyimimizle projelerinizi güvenle ilerletmenizi sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {VALUES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="space-y-4"
              >
                <item.icon size={28} strokeWidth={1.5} className="text-obsidian" />
                <h3 className="font-sans text-base font-bold text-obsidian leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-outline leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-obsidian/10">
        <div className="container-max space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="section-label block">Çalışma Şeklimiz</span>
            <h2 className="font-sans font-extrabold text-[1.75rem] sm:text-[2.25rem] text-obsidian leading-[1.1] tracking-tight">
              Fikirden teslimata
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="space-y-3 border-t border-obsidian/10 pt-6"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
                  {step.id}
                </span>
                <h3 className="font-sans text-lg font-bold text-obsidian">{step.title}</h3>
                <p className="text-sm text-outline leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-max">
          <div className="border border-obsidian/10 rounded-[24px] bg-surface-container-low p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-sans font-extrabold text-xl md:text-2xl text-obsidian tracking-tight">
                Projenizi birlikte planlayalım
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Showroom ziyareti veya WhatsApp üzerinden ücretsiz teklif alın.
              </p>
            </div>
            <AnimatedButton href="/iletisim">İletişime Geçin</AnimatedButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
