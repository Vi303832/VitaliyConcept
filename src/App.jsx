import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from './components/AnimatedButton'
import HeroSlider from './components/HeroSlider'
import MediaEmbed from './components/MediaEmbed'
import heroBg from './assets/hero_bg.png'
import ceramicArt from './assets/ceramic_art.png'
import showroomBath from './assets/showroom_bath.png'
import heroImg from './assets/hero.png'
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ArrowUp, 
  Trees, 
  Wrench, 
  Truck, 
  ShieldCheck, 
  Award 
} from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Anasayfa' },
  { href: '#about', label: 'Kurumsal' },
  { href: '#categories', label: 'Koleksiyonlar' },
  { href: '#references', label: 'Ürünlerimiz' },
  { href: '#contact', label: 'İletişim' },
]

const HERO_GALLERY = [
  { img: '/img/mekan_gold calacata.jpg', title: 'Gold Calacatta', width: 1600, height: 900 },
  { img: '/img/mekan_river.jpg', title: 'River Full Lappato', width: 1600, height: 2844 },
  { img: '/img/mekan_rock.jpg', title: 'Rock Seramik', width: 1600, height: 952 },
  { img: '/img/mekan_lava.jpg', title: 'Lava Seramik', width: 1600, height: 1360 },
  { img: '/img/mekan_calacata marmi.jpg', title: 'Calacatta Marmi', width: 1600, height: 2112 },
  { img: '/img/mekan_sicilya.jpg', title: 'Sicilya', width: 1600, height: 956 },
  { img: '/img/mekan_sagano.jpg', title: 'Sagano', width: 1600, height: 2118 },
  { img: '/img/mekan_sagano (2).jpg', title: 'Sagano Uygulama', width: 1600, height: 2114 },
]

const TRUST_MEDIA = {
  poster: '/img/mekan_gold calacata.jpg',
  src: '/video/trust-preview.mp4',
  type: 'video',
  slides: [
    '/img/mekan_gold calacata.jpg',
    '/img/mekan_calacata marmi.jpg',
    '/img/mekan_river.jpg',
  ],
}

const TRUST_POINTS = [
  'Kurumsal ve yenilikçi yaklaşım – Sektör tecrübemizi modern tasarımla buluşturuyoruz.',
  'Zengin ürün yelpazesi – Seramikten banyo dolaplarına kadar geniş seçenekler.',
  'Profesyonel ve güler yüzlü ekip – Satış öncesi ve sonrası tam müşteri desteği.',
]

const FEATURE_ICONS = [
  { icon: 'team', title: 'Kurumsal Tecrübe', desc: 'Sektör birikimini modern tasarımla buluşturuyoruz' },
  { icon: 'warranty', title: 'Geniş Ürün Gamı', desc: 'Seramikten vitrifiye ve banyo dolaplarına seçenekler' },
  { icon: 'delivery', title: 'Güçlü Stok ve Sevk', desc: 'Projelerinizi aksatmadan zamanında teslim ediyoruz' },
  { icon: 'craft', title: 'Kişiye Özel Çözüm', desc: 'Her müşteriye özel fiyatlandırma ve danışmanlık' },
]

const CATEGORIES = [
  { title: 'Salon & Antre Seramikleri', img: heroBg },
  { title: 'Lüks Vitrifiye & Armatür', img: showroomBath },
  { title: 'Mutfak & Tezgah Arası', img: ceramicArt },
  { title: 'Dış Mekan & Teras Porselen', img: heroBg },
  { title: 'Yapı Kimyasalları & Derz', img: ceramicArt },
  { title: 'Özel Tasarım Banyo Mobilyası', img: showroomBath },
]

const PROCESS_STEPS = [
  { id: '01', title: 'Planlama', desc: 'Tadilat öncesi doğru planlama, seramiklerle yenilenen bir yaşam alanı.', img: heroBg },
  { id: '02', title: 'Tasarım & Seçim', desc: 'Showroomumuzda zengin ürün yelpazesi ile doğru malzeme tercihi.', img: ceramicArt },
  { id: '03', title: 'Uygulama', desc: 'Vitaly ile dönüşüm, ustalıkla uygulanan hayalleriniz gerçeğe dönüşüyor.', img: showroomBath },
  { id: '04', title: 'Teslim ve Memnuniyet', desc: 'Tamamlanmış iş, mutlu müşterilerle teslim edilir. Memnuniyetiniz bizim başarımızdır.', img: heroImg },
]

const REFERENCE_PROJECTS = [
  {
    id: 1,
    img: '/img/606211_gold calacatta_60x120.jpg',
    title: 'Gold Calacatta (60x120 cm)',
    tag: 'Mermer Dokulu Porselen',
    desc: 'Altın damarlı, lüks cilalı yüzeyi ile modern mekanlarda duvar ve zemin kaplamaları için prestijli porselen karo seçeneği.'
  },
  {
    id: 2,
    img: '/img/606221_bella_60x120.jpg',
    title: 'Bella Porselen (60x120 cm)',
    tag: 'Premium Duvar Seramiği',
    desc: 'Özgün hareli dokusu ve şık tonları ile banyo, mutfak tezgah arası ve özel tasarım duvarlar için ideal seramik karo.'
  },
  {
    id: 3,
    img: '/img/606281_river full lappato_60x120.jpg',
    title: 'River Full Lappato (60x120 cm)',
    tag: 'Parlak Porselen Karo',
    desc: 'Işıltılı, yarı parlak lüks dokusu ve nehir taşı deseniyle geniş salon ve hol zeminlerine derinlik katan porselen kaplama.'
  },
  {
    id: 4,
    img: '/img/261903_cement antrasit_60x120.jpg',
    title: 'Cement Antrasit (60x120 cm)',
    tag: 'Beton Efektli Mat Seramik',
    desc: 'Brüt beton dokusu ve mat antrasit tonu ile endüstriyel, minimalist ve modern mekan tasarımlarının vazgeçilmez porselen karosu.'
  },
  {
    id: 5,
    img: '/img/904303_sagano ceviz_30x120.jpg',
    title: 'Sagano Ceviz (30x120 cm)',
    tag: 'Ahşap Dokulu Seramik',
    desc: 'Doğal ceviz ahşap liflerini seramiğin dayanıklılığı ile buluşturan, ıslak hacimler ve teraslar için ideal seramik parke.'
  }
]

const REVIEWS = [
  {
    name: 'Ahmet H.',
    role: 'Müşteri / Fransa',
    avatar: '/img/mekan_lava.jpg',
    text: 'Vitaly Concept banyo tasarımımızı tamamen yeniledi. Showroomda gösterdikleri profesyonel ilgi ve seramiklerin malzeme kalitesi gerçekten üst düzey. Fransa\'ya lojistik sevk süreçleri de kusursuzdu.'
  },
  {
    name: 'Mehmet T.',
    role: 'Mimar / Bursa',
    avatar: '/img/mekan_river.jpg',
    text: 'Projelerimizde aradığımız ebat ve estetiği Vitaly Concept\'te bulabiliyoruz. Güçlü stokları ve zamanında teslimatları sayesinde Nilüfer\'deki villa şantiyemizi aksatmadan tamamladık.'
  },
  {
    name: 'Sophia K.',
    role: 'Müşteri / Almanya',
    avatar: '/img/mekan_calacata marmi.jpg',
    text: 'Showroom kalitesini evimize taşıdık. Gold Calacatta ve Sagano seramiklerin kalitesi tek kelimeyle harika. Satış öncesi ve sonrası verdikleri danışmanlık hizmeti için teşekkür ederiz.'
  }
]

const FOOTER_SERVICES = [
  'Salon & Antre Seramikleri',
  'Lüks Vitrifiye & Armatür',
  'Mutfak & Tezgah Arası',
  'Dış Mekan & Teras Porselen',
  'Yapı Kimyasalları & Derz',
  'Özel Tasarım Banyo Mobilyası',
]

function StarRating() {
  return <span className="text-primary text-sm tracking-wider">★★★★★</span>
}

function ProcessArrow() {
  return (
    <svg
      className="process-step-arrow"
      viewBox="0 0 120 36"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 24 C34 8, 56 8, 84 18 C96 23, 106 26, 114 24"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M108 20 L114 24 L108 28"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrustFeatureIcon({ type }) {
  const props = {
    size: 28,
    strokeWidth: 1.5,
    className: "text-current"
  }

  switch (type) {
    case 'craft':
      return <Award {...props} />
    case 'delivery':
      return <Truck {...props} />
    case 'team':
      return <ShieldCheck {...props} />
    case 'warranty':
      return <Wrench {...props} />
    default:
      return null
  }
}

function CheckList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((text, idx) => (
        <div key={idx} className="check-item">
          <span className="check-icon">✓</span>
          <span className="text-sm text-on-surface leading-relaxed">{text}</span>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Banyo Tasarımı',
    store: 'Bursa Showroom',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProj, setActiveProj] = useState(2)
  const [activeReview, setActiveReview] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', service: 'Banyo Tasarımı', store: 'Bursa Showroom', message: '' })
        setFormSubmitted(false)
      }, 5000)
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased overflow-x-hidden">

      {/* Top Bar */}
      <div className="bg-obsidian text-surface text-center py-2.5 px-6 text-[10px] uppercase tracking-[0.2em] font-semibold">
        Hayal Ettiğiniz Projelere Kavuşturur &nbsp;•&nbsp; Seramik — Vitrifiye — Banyo — Mutfak
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-surface-container-lowest/95 backdrop-blur-md py-4 border-obsidian/10'
            : 'bg-surface-container-lowest py-5 border-obsidian/5'
        }`}
      >
        <div className="container-max flex items-center justify-between gap-6">
          <a href="#home" className="flex flex-col shrink-0">
            <span className="font-display text-xl md:text-2xl tracking-wide text-obsidian">
              Vitaly Concept
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-outline font-semibold">
              Seramik • Vitrifiye • Tasarım
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <AnimatedButton href="#contact" size="sm" className="shrink-0">
            Ücretsiz Teklif Al
          </AnimatedButton>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="pt-16 lg:pt-20 pb-20 bg-surface overflow-hidden">
        <div className="container-max text-center space-y-6 lg:space-y-10">
          <span className="section-label block">Vitaly Concept</span>

          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] leading-[1.08] text-obsidian max-w-5xl mx-auto tracking-tighter">
            Seramik Sanatında
            <br className="lg:hidden" />
            <span className="hidden lg:inline italic text-primary"> Özgünlük</span>
            <span className="lg:hidden italic text-primary">Özgünlük</span>
            {' '}
            <span className="italic text-primary">
              <br className="hidden lg:block" />
              Ve
            </span>
            {' '}Zarafet
          </h1>

          <p className="text-base lg:text-[17px] text-outline max-w-2xl lg:max-w-xl mx-auto leading-relaxed lg:leading-[1.7]">
            Seramik sanatında özgünlük ve zarafet. Vitaly Concept ile hayal gücünüzü gerçeğe dönüştürün,
            mekânlarınızda eşsiz bir sanat deneyimi yaşayın.
          </p>

          <div>
            <AnimatedButton href="#contact">
              Ücretsiz Teklif Al
            </AnimatedButton>
          </div>
        </div>

        <HeroSlider items={HERO_GALLERY} />
      </section>

      {/* About — Split 1: Text left, Image right */}
      <section id="about" className="about-section relative py-20 bg-surface border-t border-obsidian/10 overflow-hidden">
        <div className="about-gold-bg" aria-hidden="true">
          <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" fill="none">
            <line x1="-80" y1="140" x2="820" y2="300" className="about-gold-stroke" />
            <line x1="120" y1="-40" x2="1280" y2="200" className="about-gold-stroke about-gold-stroke--soft" />
            <line x1="480" y1="720" x2="1100" y2="380" className="about-gold-stroke about-gold-stroke--soft" />
            <line x1="720" y1="60" x2="1320" y2="480" className="about-gold-stroke" />
            <line x1="900" y1="-20" x2="1280" y2="260" className="about-gold-stroke about-gold-stroke--light" />
          </svg>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="section-label block">Kalite ve Estetik</span>
              <h2 className="font-sans font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl text-obsidian leading-[1.08] tracking-tight">
                Seramikte Kalite,
                <br />
                Benzersiz Estetik.
                <br />
                Her Zaman.
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Vitaly Concept, 20 yılı aşkın tecrübesiyle seramik sektöründe fark yaratmaya devam ediyor.
                Estetik, fonksiyonellik ve kaliteyi bir araya getirerek yaşam alanlarınıza modern dokunuşlar katıyoruz.
              </p>
              <CheckList items={TRUST_POINTS} />
              <div className="pt-2">
                <AnimatedButton href="#contact" size="lg">
                  Daha Fazla Bilgi
                </AnimatedButton>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-obsidian/10">
                <img src="/img/mekan_calacata marmi.jpg" alt="Calacatta Marmi seramik uygulama" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-6 left-6 bg-surface-container-lowest border border-obsidian/10 px-5 py-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <StarRating />
                  <span className="font-display text-2xl text-obsidian font-bold">5.0</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Google Değerlendirme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust — Split 2: Image left, Text right + icon row */}
      <section className="border-t border-obsidian/10">
        <div className="py-20 bg-surface">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <MediaEmbed
                className="trust-media aspect-[16/11] order-2 lg:order-1"
                poster={TRUST_MEDIA.poster}
                src={TRUST_MEDIA.src}
                type={TRUST_MEDIA.type}
                slides={TRUST_MEDIA.slides}
                alt="Vitaly Concept showroom ve uygulama önizlemesi"
              />

              <div className="space-y-6 order-1 lg:order-2">
                <span className="section-label block">Neden Vitaly?</span>
                <h2 className="font-sans font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl text-obsidian leading-[1.08] tracking-tight">
                  Neden Projelerde
                  <br />
                  Vitaly Concept'i
                  <br />
                  Seçmelisiniz?
                </h2>
                <p className="text-sm text-outline leading-relaxed max-w-lg">
                  Güçlü stok ve tedarik ağımız sayesinde projelerinizi aksatmadan, hızlı ve güvenilir teslimat garantisi sunuyoruz.
                  Bursa'nın yanı sıra Fransa ve Almanya gibi uluslararası pazarlarda da kalitemizi kanıtlayarak müşteri memnuniyetini en üst seviyeye taşıyoruz.
                </p>
                <AnimatedButton href="#contact" size="lg">
                  Hemen İletişime Geçin
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-features-band bg-surface-container-low border-t border-obsidian/10">
          <div className="container-max">
            <div className="trust-features-grid">
              {FEATURE_ICONS.map((item, idx) => (
                <div key={idx} className="trust-feature-col">
                  <div className="trust-feature-icon text-obsidian">
                    <TrustFeatureIcon type={item.icon} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-obsidian leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-outline leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="categories" className="py-20 bg-surface border-t border-obsidian/10">
        <div className="container-max space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-label block">Koleksiyonlarımız</span>
            <h2 className="font-sans font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl text-obsidian leading-[1.08] tracking-tight">
              Size Uygun
              <br />
              Tasarım Çözümünü
              <br />
              Bulun.
            </h2>
            <p className="text-sm text-outline">
              Geniş ve ferah showroomumuzda, seramikten banyo dolaplarına zengin seçenekler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <a
                key={idx}
                href="#contact"
                className="group border border-obsidian/10 bg-surface-container-lowest overflow-hidden hover:border-primary transition-colors duration-300"
              >
                <div className="service-card-header">
                  <span className="text-sm font-bold text-obsidian uppercase tracking-wide">{cat.title}</span>
                  <span className="text-obsidian group-hover:translate-x-1 transition-transform text-lg">→</span>
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-4">
            <AnimatedButton href="#contact">
              Tüm Hizmetleri Gör
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section border-t border-obsidian/10">
        <div className="container-max">
          <div className="process-header">
            <span className="section-label block">Profesyonel İş Akışı</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-obsidian leading-tight">Çalışma Sürecimiz</h2>
            <p>Projelerinizin hayata geçiş aşamaları</p>
          </div>

          <div className="process-steps">
            <div className="process-step-arrows" aria-hidden="true">
              <ProcessArrow />
              <ProcessArrow />
              <ProcessArrow />
            </div>
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className="process-step">
                <div className="process-step-visual">
                  <div className={`process-step-circle${idx === 0 ? ' is-active' : ''}`}>
                    <span className={`process-step-badge${idx === 0 ? ' is-active' : ''}`}>{step.id}</span>
                    <div className="process-step-ring">
                      <div className="process-step-image">
                        <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {/* Featured Project - Stack Gallery Redesign */}
      <section id="references" className="py-24 bg-surface border-t border-obsidian/10 overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side: 3D Stack Deck layout */}
            <div className="flex flex-col items-center">
              <div className="relative h-[300px] sm:h-[400px] w-full max-w-[400px] flex items-center justify-center">
                {REFERENCE_PROJECTS.map((proj, i) => {
                  const offset = i - activeProj
                  const absOffset = Math.abs(offset)
                  
                  // Transform calculations to create the gorgeous 3D stack effect peeking on both sides
                  const zIndex = 30 - absOffset * 10
                  const tx = offset * 32 // Horizontal shift offset
                  const scale = 1 - absOffset * 0.08 // Card scale shrink
                  const rotate = offset * 3 // Slight angle tilt
                  const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.25

                  return (
                    <div
                      key={proj.id}
                      onClick={() => setActiveProj(i)}
                      style={{
                        zIndex,
                        transform: `translateX(${tx}px) scale(${scale}) rotate(${rotate}deg)`,
                        opacity,
                        pointerEvents: absOffset > 2 ? 'none' : 'auto'
                      }}
                      className={`absolute w-[200px] sm:w-[260px] aspect-[4/5] bg-surface border transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
                        i === activeProj 
                          ? 'border-primary shadow-lg shadow-obsidian/5' 
                          : 'border-obsidian/10 hover:border-primary/50'
                      }`}
                    >
                      <img 
                        src={proj.img} 
                        alt={proj.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                      />
                      {/* Active project small indicator badge inside card */}
                      {i === activeProj && (
                        <div className="absolute top-3 left-3 bg-primary text-white text-[8px] uppercase tracking-wider font-bold px-2 py-1">
                          {proj.tag}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => setActiveProj(prev => (prev > 0 ? prev - 1 : REFERENCE_PROJECTS.length - 1))}
                  className="w-12 h-12 border border-obsidian/10 flex items-center justify-center text-obsidian hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
                  aria-label="Önceki Proje"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {REFERENCE_PROJECTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProj(idx)}
                      className={`w-2 h-2 transition-all duration-300 ${
                        idx === activeProj ? 'bg-primary w-6' : 'bg-obsidian/20'
                      }`}
                      aria-label={`${idx + 1}. Proje`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveProj(prev => (prev < REFERENCE_PROJECTS.length - 1 ? prev + 1 : 0))}
                  className="w-12 h-12 border border-obsidian/10 flex items-center justify-center text-obsidian hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
                  aria-label="Sonraki Proje"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right side: text details */}
            <div className="space-y-6">
              <span className="section-label block">Ürünlerimiz &nbsp;•&nbsp; {REFERENCE_PROJECTS[activeProj].tag}</span>
              
              {/* Heading exactly matching screenshot style */}
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-obsidian leading-tight">
                Mekanlara Değer Katan Seçkin Ürünlerimiz.
              </h2>
              
              {/* Dynamic project description based on selected card */}
              <div className="space-y-4 min-h-[140px] flex flex-col justify-center border-l border-primary/20 pl-4 py-1">
                <h4 className="font-sans font-bold text-base text-obsidian tracking-wide">
                  {REFERENCE_PROJECTS[activeProj].title}
                </h4>
                <p className="text-xs sm:text-sm text-outline leading-relaxed font-light font-sans">
                  {REFERENCE_PROJECTS[activeProj].desc}
                </p>
              </div>
              
              <div className="pt-2">
                <AnimatedButton href="#contact" size="sm">
                  Ürünleri İncele
                </AnimatedButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Banner CTA - Rounded Card & Cutout Overlap Redesign */}
      <section className="relative overflow-visible py-12 md:py-24 bg-surface">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Rounded Background Card with wood-tile texture */}
          <div 
            className="absolute inset-x-6 md:inset-x-12 top-0 bottom-0 rounded-[32px] border border-obsidian/10 overflow-hidden" 
            style={{ 
              backgroundImage: "url('/img/904303_sagano ceviz_30x120.jpg')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
            {/* Gradient Overlay matching project dark Obsidian brand identity */}
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/10"></div>
          </div>

          {/* Content grid with visible overflow */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-12 md:px-24 py-12 md:py-16 min-h-[320px] relative">
            
            {/* Left Column (Text & Button) */}
            <div className="md:col-span-7 space-y-6 text-left text-white z-10">
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-white leading-[1.1] tracking-tight">
                Yaşam Alanlarınızda En İyi
                <br />
                Tasarımı Hak Ediyorsunuz
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-light">
                Vitaly Concept ile hayallerinizdeki mekanları estetikle buluşturmak artık çok daha kolay.
                Geniş showroomumuz ve profesyonel ekibimizle projeleriniz için yanınızdayız.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-4 bg-surface/10 hover:bg-primary border border-white/10 text-white text-[10px] uppercase tracking-[0.15em] font-bold pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Hemen İletişime Geçin</span>
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 text-xs">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column Spacer for grid spacing */}
            <div className="hidden md:block md:col-span-5 h-[200px]" />
            
          </div>

          {/* Absolute Cutout image positioned relative to the card bounds (aligns bottom, extends top) */}
          <img 
            src="/img/showroom_manager.png" 
            alt="Vitaly Concept uzman ekibi" 
            className="absolute bottom-0 right-12 md:right-24 h-[380px] md:h-[500px] lg:h-[530px] object-contain object-bottom pointer-events-none z-20"
          />

        </div>
      </section>

      {/* Reviews - Custom Grid & Slider Redesign */}
      <section className="py-20 bg-surface border-t border-obsidian/10">
        <div className="container-max">
          
          {/* Left-aligned editorial header */}
          <div className="max-w-3xl mb-12">
            <span className="section-label block mb-2">Müşteri Memnuniyeti</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-obsidian leading-[1.1] tracking-tight text-left">
              Müşterilerimizin Gözüyle
              <br />
              Vitaly Concept Deneyimi!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Testimonial Card Slider - Fixed Height */}
            <div className="lg:col-span-5 border border-obsidian/10 bg-surface-container-low p-8 md:p-10 flex flex-col justify-between rounded-[24px] shadow-sm relative h-[380px] sm:h-[424px]">
              
              {/* Bronze Quote mark */}
              <div className="font-sans text-6xl text-primary leading-none select-none">“</div>
              
              {/* Dynamic Review Text with smooth transition */}
              <div className="flex-grow flex items-center">
                <p className="text-sm md:text-base text-obsidian leading-relaxed italic font-light">
                  "{REVIEWS[activeReview].text}"
                </p>
              </div>

              {/* Bottom profile and controls */}
              <div className="flex items-center justify-between border-t border-obsidian/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {/* User profile placeholder icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-obsidian uppercase tracking-wider">{REVIEWS[activeReview].name}</h4>
                    <span className="text-[10px] text-outline block mt-0.5">{REVIEWS[activeReview].role}</span>
                  </div>
                </div>

                {/* Slider Navigation Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveReview(prev => (prev > 0 ? prev - 1 : REVIEWS.length - 1))}
                    className="w-10 h-10 rounded-full border border-obsidian/10 flex items-center justify-center text-obsidian hover:bg-obsidian hover:text-white transition-all duration-300 active:scale-90 cursor-pointer"
                    aria-label="Önceki Yorum"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setActiveReview(prev => (prev < REVIEWS.length - 1 ? prev + 1 : 0))}
                    className="w-10 h-10 rounded-full border border-obsidian/10 flex items-center justify-center text-obsidian hover:bg-obsidian hover:text-white transition-all duration-300 active:scale-90 cursor-pointer"
                    aria-label="Sonraki Yorum"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right side: 2x2 Grid - Fixed heights aligning with the left card */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Top-Left Image */}
              <div className="border border-obsidian/10 overflow-hidden rounded-[24px] h-[200px]">
                <img src="/img/mekan_river.jpg" alt="River seramik kaplama salon" className="w-full h-full object-cover" />
              </div>

              {/* Card 2: Top-Right Stats Card */}
              <div className="border border-obsidian/10 bg-surface-container-low p-6 flex flex-col justify-center items-center text-center rounded-[24px] h-[200px] space-y-3">
                {/* Lucide Trees Icon */}
                <Trees className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div>
                  <span className="font-sans font-extrabold text-4xl text-obsidian tracking-tight block">250+</span>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-outline font-bold mt-1 block">Tamamlanan Proje</span>
                </div>
              </div>

              {/* Card 3: Bottom-Left Google Review Card */}
              <div className="border border-obsidian/10 bg-surface-container-low p-6 flex flex-col justify-center items-center text-center rounded-[24px] h-[200px] space-y-2">
                {/* Google Logo SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-6.16-4.53z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="font-sans font-extrabold text-3xl text-obsidian tracking-tight">5.0</span>
                  <span className="text-amber-500 text-lg">★</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.1em] text-outline font-bold block">Google Yorumları</span>
              </div>

              {/* Card 4: Bottom-Right Image */}
              <div className="border border-obsidian/10 overflow-hidden rounded-[24px] h-[200px]">
                <img src="/img/mekan_calacata marmi.jpg" alt="Calacatta Marmi seramik hol" className="w-full h-full object-cover" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Contact - Layout & Card Form Redesign */}
      <section id="contact" className="py-20 bg-surface border-t border-obsidian/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column: Info Text & Checklist (Motion Fade-in from Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-6 flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-primary block">Ücretsiz Teklif</span>
                <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-obsidian leading-[1.1] tracking-tight">
                  Seramik & Tasarım
                  <br />
                  Hizmetinizi Bugün Planlayın!
                </h2>
                <p className="text-xs sm:text-sm text-outline leading-relaxed font-light">
                  Sorularınız mı var veya yardıma mı ihtiyacınız var? Ekibimiz seramik, vitrifiye ve tasarım talepleriniz için yardıma hazır. Bugün iletişime geçin!
                </p>
              </div>

              <div className="space-y-5 pt-4">
                <h4 className="font-bold text-xs sm:text-sm text-obsidian uppercase tracking-wider">Ekibimizle görüşerek şunları yapabilirsiniz:</h4>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="text-primary text-base font-bold shrink-0">✓</span>
                    <span className="text-xs sm:text-sm text-outline font-light leading-relaxed">
                      Seramik ve tasarım çözümlerimizin banyo ve salon projelerinizi nasıl güzelleştireceğini görün
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary text-base font-bold shrink-0">✓</span>
                    <span className="text-xs sm:text-sm text-outline font-light leading-relaxed">
                      Fiyatlandırma, teslimat planı veya malzeme ihtiyaçları hakkında tüm sorularınıza yanıt alın
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary text-base font-bold shrink-0">✓</span>
                    <span className="text-xs sm:text-sm text-outline font-light leading-relaxed">
                      Kendi evinize, villanıza veya ticari projenize özel olarak hazırlanan teklifi teslim alın
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form Card with Rounded Corners (Motion Fade-in and Slide-up) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="lg:col-span-6 bg-[#E6E5E0]/40 border border-obsidian/10 p-8 md:p-10 rounded-[32px] shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-obsidian tracking-tight">Ücretsiz Teklif Alın</h3>
                  <p className="text-xs text-outline leading-relaxed mt-1">
                    Ücretsiz arama talep edin ve seramik uzmanlarımızdan hızlıca destek alın.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-obsidian block">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Arlene McCoy"
                      className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-obsidian block">E-Posta</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@arlenemccoy.com"
                      className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-obsidian block">Telefon Numarası</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="111-222-3333"
                      className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-obsidian block">Talep Edilen Hizmet</label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                    <label className="text-xs font-bold text-obsidian block">Hangi showroom ile çalışmak istersiniz?</label>
                    <div className="relative">
                      <select
                        value={formData.store}
                        onChange={(e) => setFormData({ ...formData, store: e.target.value })}
                        className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Bursa Showroom">Bursa Showroom (Ahmet Yesevi, Nilüfer)</option>
                        <option value="Online Showroom">Online Showroom / WhatsApp Destek</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-obsidian/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-obsidian block">Mesajınız</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Lütfen banyo, seramik veya vitrifiye projenizin detaylarından bahsedin..."
                      className="w-full bg-white border border-obsidian/10 rounded-[12px] text-sm text-obsidian px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  {formSubmitted ? (
                    <div className="bg-primary/10 border border-primary/20 text-primary-dark text-xs font-bold py-4 text-center rounded-[12px]">
                      Talebiniz başarıyla iletildi. En kısa sürede sizinle irtibata geçeceğiz.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-obsidian text-white text-xs uppercase tracking-[0.15em] font-bold py-4 rounded-[12px] hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Teklif Alın / Gönder
                    </button>
                  )}
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian text-surface-container-high py-16">
        <div className="container-max space-y-12">
          <div className="text-center">
            <h4 className="font-display text-3xl text-white tracking-wide">Vitaly Concept</h4>
            <p className="text-[10px] uppercase tracking-[0.15em] text-surface-container-high mt-1">Seramik • Vitrifiye • Tasarım</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10 pt-12">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">Hizmetler</h5>
              <div className="flex flex-col gap-2 text-xs text-surface-container-high">
                {FOOTER_SERVICES.map((item) => (
                  <a key={item} href="#categories" className="hover:text-primary transition-colors">{item}</a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">Kurumsal</h5>
              <div className="flex flex-col gap-2 text-xs text-surface-container-high">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">İletişim</h5>
              <div className="text-xs text-surface-container-high space-y-2 leading-relaxed">
                <p>Ahmet Yesevi, Sanayi Cd. No:563/D, 16140 Nilüfer/Bursa</p>
                <p>+90 533 045 28 86</p>
                <p>info@vitalyconcept.com</p>
                <a
                  href="https://www.instagram.com/vitalyconcept"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block hover:text-primary transition-colors pt-1"
                >
                  @vitalyconcept
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-outline">
            <span>Vitaly Concept © {new Date().getFullYear()}. Tüm Hakları Saklıdır.</span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/vitalyconcept" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors uppercase tracking-wider">Instagram</a>
              <a href="#contact" className="hover:text-primary transition-colors uppercase tracking-wider">İletişim</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions (WhatsApp + Scroll Progress Top Button) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/905413587611"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer animate-whatsapp-pulse"
          aria-label="WhatsApp ile İletişime Geçin"
        >
          {/* Rippling attention-grabber effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 -z-10"></span>
          
          <img src="/img/whatsapp_new.png" className="w-8 h-8 object-contain relative z-10 invert brightness-200" alt="WhatsApp" />
        </a>

        {/* Scroll Progress & Back to Top Button */}
        {showScrollTop && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-12 h-12 flex items-center justify-center bg-white border border-obsidian/10 rounded-full shadow-lg"
          >
            <svg className="w-12 h-12 transform -rotate-90 absolute">
              <circle
                className="text-obsidian/5"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="transparent"
                r="21"
                cx="24"
                cy="24"
              />
              <circle
                className="text-primary"
                strokeWidth="2.5"
                strokeDasharray={132}
                strokeDashoffset={132 - (132 * scrollProgress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="21"
                cx="24"
                cy="24"
              />
            </svg>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-obsidian hover:text-primary transition-colors text-base font-bold z-10 cursor-pointer"
              aria-label="Yukarı Çık"
            >
              ↑
            </button>
          </motion.div>
        )}

      </div>

    </div>
  )
}

export default App
