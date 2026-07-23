import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Truck, Wrench, ChevronRight } from 'lucide-react'
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
    desc: 'Seramikten vitrifiye ve banyo dolaplarına kadar projelerinize uygun en seçkin seçenekler.',
  },
  {
    icon: Truck,
    title: 'Güçlü Stok ve Sevk',
    desc: 'Bursa’dan Fransa ve Almanya’ya kadar zamanında, aksamasız uluslararası lojistik gücü.',
  },
  {
    icon: Award,
    title: 'Kişiye Özel Çözüm',
    desc: 'Her müşteriye özel fiyatlandırma, 3D görselleştirme danışmanlığı ve showroom desteği.',
  },
]

const PROCESS = [
  {
    id: '01',
    title: 'Planlama & İhtiyaç Analizi',
    desc: 'Projenizin ihtiyaçlarını dinler, doğru malzeme, ölçü ve bütçe planını birlikte oluştururuz.',
  },
  {
    id: '02',
    title: 'Tasarım & Numune Seçimi',
    desc: 'Showroomumuzda numuneleri inceler, yüzey, renk ve ebat tercihlerini birebir görerek netleştirirsiniz.',
  },
  {
    id: '03',
    title: 'Lojistik & Uygulama',
    desc: 'Güçlü stok ağımız ve sevk planımızla şantiyenize veya adresinize güvenli malzeme teslimini yönetiriz.',
  },
  {
    id: '04',
    title: 'Satış Sonrası Destek',
    desc: 'İş tamamlandığında da yanınızdayız. Memnuniyet odaklı teknik destek ve danışmanlık sunmaya devam ederiz.',
  },
]

const TRUST_POINTS = [
  'Sektör tecrübesini yenilikçi mimari vizyonla harmanlayan kurumsal yaklaşım.',
  'Dünya standartlarında, premium İtalyan ve yerli seramik koleksiyonları.',
  'Satış öncesi ücretsiz tasarım desteğinden satış sonrası teslimat takibine kadar tam hizmet.',
]

export default function CorporatePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased overflow-x-hidden">
      <SiteHeader />

      {/* Header Banner */}
      <section className="relative pt-20 pb-16 bg-[#F5F4F0] border-b border-obsidian/10">
        <div className="container-max space-y-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Anasayfa</Link>
            <ChevronRight size={10} className="text-outline/60" />
            <span className="text-obsidian font-bold">Kurumsal</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary block">
              Hakkımızda
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-obsidian leading-[1.08] tracking-tight">
              Kusursuz Tasarım, <br className="hidden sm:block" />
              Yılların Getirdiği Güven.
            </h1>
            <p className="text-sm sm:text-base text-outline leading-relaxed max-w-2xl font-light">
              Seramik, vitrifiye ve mimari tasarımda estetiği kaliteyle buluşturuyoruz.
              Bursa showroomumuzdan uluslararası projelere kadar yaşam alanlarınıza değer katıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section - Premium Overlapping Images & Typography */}
      <section className="py-20 lg:py-28 border-b border-obsidian/10 bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary block">
                  Kalite ve Estetik Vizyonumuz
                </span>
                <h2 className="font-sans font-extrabold text-3xl sm:text-[40px] text-obsidian leading-[1.1] tracking-tight">
                  Yaşam alanlarında <br />
                  fark yaratan dokunuşlar.
                </h2>
              </div>

              {/* Decorative blockquote */}
              <div className="border-l-2 border-primary pl-6 py-1 italic text-obsidian text-base font-light leading-relaxed">
                "Her mekân, içinde yaşayanların ruhunu yansıtır. Vitaly Concept olarak amacımız, en yüksek kalitedeki ham maddeyi estetikle işleyerek yaşam alanlarınızı zamansız sanat eserlerine dönüştürmektir."
              </div>

              <p className="text-xs sm:text-sm text-outline leading-relaxed font-light">
                Vitaly Concept, 20 yılı aşkın köklü tecrübesiyle seramik ve vitrifiye sektöründe trendleri belirlemeye devam ediyor.
                Fonksiyonelliği, dayanıklılığı ve modern mimariyi bir araya getirerek konut, villa ve ticari projelerinizde kusursuz çözümler üretiyoruz.
              </p>

              <div className="space-y-4 pt-2">
                {TRUST_POINTS.map((text) => (
                  <div key={text} className="flex gap-4 items-start">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-xs sm:text-sm text-on-surface font-light leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Overlapping Images Collage Column */}
            <div className="lg:col-span-6 relative h-[480px] sm:h-[580px] w-full mt-10 lg:mt-0">
              
              {/* Back Staggered Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                className="absolute top-0 left-0 w-4/5 aspect-[4/5] rounded-[32px] overflow-hidden border border-obsidian/10 shadow-lg z-10"
              >
                <img
                  src="/img/mekan_luna.webp"
                  alt="Vitaly Concept seramik tasarım uygulaması"
                  width="800"
                  height="1000"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Front Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                className="absolute bottom-0 right-0 w-3/5 aspect-[4/5] rounded-[24px] overflow-hidden border border-obsidian/10 shadow-2xl z-20 bg-surface"
              >
                <img
                  src="/img/mekan_river.webp"
                  alt="Mekan seramik detay görünümü"
                  width="600"
                  height="750"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[9px] uppercase tracking-[0.15em] font-extrabold text-primary block">Koleksiyon</span>
                  <span className="text-xs font-bold font-sans">River Full Lappato 60x120</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section - Glassmorphic floating cards */}
      <section className="py-20 lg:py-28 bg-[#F5F4F0] border-b border-obsidian/10">
        <div className="container-max space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary block">
              Değerlerimiz
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-[40px] text-obsidian leading-[1.1] tracking-tight">
              Bizi biz yapan <br />
              temel niteliklerimiz.
            </h2>
            <p className="text-xs sm:text-sm text-outline leading-relaxed max-w-xl font-light">
              Güçlü uluslararası lojistik ağımız, geniş showroom hacmimiz ve müşteri odaklı çözümlerimizle projelerinizi güvenle tamamlamanızı sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-md border border-obsidian/5 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-start items-start text-left space-y-5"
              >
                <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-base font-bold text-obsidian tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-outline leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stepped Process Section - Timeline layout */}
      <section className="py-20 lg:py-28 border-b border-obsidian/10 bg-surface">
        <div className="container-max space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary block">
              İş Akışımız
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-[40px] text-obsidian leading-[1.1] tracking-tight">
              Fikirden teslimata <br />
              adım adım süreç.
            </h2>
            <p className="text-xs sm:text-sm text-outline leading-relaxed max-w-xl font-light">
              Tasarım vizyonunuzu kusursuz bir planlamayla gerçeğe dönüştürüyor, her aşamada şeffaflığı ve kaliteyi garanti ediyoruz.
            </p>
          </div>

          <div className="relative">
            {/* Connecting horizontal line for large screens */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] border-t border-dashed border-obsidian/20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {PROCESS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="space-y-4 text-left"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-primary/20 text-primary flex items-center justify-center font-display text-lg font-bold shadow-sm">
                    {step.id}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="font-sans text-base font-bold text-obsidian tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-outline leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Dark CTA Section */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-obsidian text-white rounded-[32px] p-10 md:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-10"
          >
            {/* Background texture decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_45%)] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-xl relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary block">
                İletişime Geçin
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-surface leading-tight tracking-tight">
                Hayalinizdeki projeyi <br />
                birlikte planlayalım.
              </h2>
              <p className="text-xs sm:text-sm text-surface-container-high leading-relaxed font-light">
                Bursa showroomumuzu ziyaret ederek numuneleri yakından inceleyebilir veya WhatsApp üzerinden uzman ekibimizle hemen teklif çalışması başlatabilirsiniz.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <AnimatedButton href="/iletisim" size="lg" className="w-full sm:w-auto">
                Ücretsiz Teklif Al
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
