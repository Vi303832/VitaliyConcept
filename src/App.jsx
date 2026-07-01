import React, { useState, useEffect } from 'react'
import AnimatedButton from './components/AnimatedButton'
import heroBg from './assets/hero_bg.png'
import ceramicArt from './assets/ceramic_art.png'
import showroomBath from './assets/showroom_bath.png'
import heroImg from './assets/hero.png'

const NAV_LINKS = [
  { href: '#home', label: 'Anasayfa' },
  { href: '#about', label: 'Kurumsal' },
  { href: '#categories', label: 'Ürünler' },
  { href: '#references', label: 'Referanslar' },
  { href: '#contact', label: 'İletişim' },
]

const HERO_GALLERY = [
  { img: heroBg, title: 'Gold Calacatta' },
  { img: ceramicArt, title: 'River Full Lappato' },
  { img: showroomBath, title: 'Lüks Vitrifiye' },
  { img: heroImg, title: 'Mat Beton Efekt' },
]

const TRUST_POINTS = [
  'Kurumsal ve yenilikçi yaklaşım – Sektör tecrübemizi modern tasarımla buluşturuyoruz.',
  'Zengin ürün yelpazesi – Seramikten banyo dolaplarına kadar geniş seçenekler.',
  'Profesyonel ve güler yüzlü ekip – Satış öncesi ve sonrası tam müşteri desteği.',
]

const FEATURE_ICONS = [
  { icon: '◆', title: 'Kaliteli İşçilik', desc: 'Ustalıkla uygulanan kusursuz montaj' },
  { icon: '◷', title: 'Zamanında Teslimat', desc: 'Güçlü stok ve tedarik ağı' },
  { icon: '◎', title: 'Uzman Ekip', desc: '20+ yıllık sektör deneyimi' },
  { icon: '✓', title: 'Garantili Hizmet', desc: 'Satış öncesi ve sonrası destek' },
]

const CATEGORIES = [
  { title: 'Salon Seramikleri', img: heroBg },
  { title: 'Banyo & Vitrifiye', img: showroomBath },
  { title: 'Mutfak Seramikleri', img: ceramicArt },
  { title: 'Dış Mekan Porselen', img: heroBg },
  { title: 'Yapı Kimyasalları', img: ceramicArt },
  { title: 'Banyo Mobilyaları', img: showroomBath },
]

const PROCESS_STEPS = [
  { id: '01', title: 'Keşif ve Planlama', desc: 'Tadilat öncesi doğru planlama, seramiklerle yenilenen yaşam alanı.', img: heroBg },
  { id: '02', title: 'Seçim ve Tasarım', desc: 'Showroomda bütçenize uygun zengin ürün alternatiflerinin tespiti.', img: ceramicArt },
  { id: '03', title: 'Uygulama', desc: 'Ustalıkla uygulanan hayalleriniz, kusursuz montaj teknikleriyle gerçeğe dönüşüyor.', img: showroomBath },
  { id: '04', title: 'Teslim ve Memnuniyet', desc: 'Tamamlanmış iş, mutlu müşterilerle teslim edilir.', img: heroImg },
]

const FOOTER_SERVICES = [
  'Salon Seramikleri',
  'Banyo & Vitrifiye',
  'Mutfak Seramikleri',
  'Dış Mekan Porselen',
  'Yapı Kimyasalları',
  'Banyo Mobilyaları',
]

function StarRating() {
  return <span className="text-primary text-sm tracking-wider">★★★★★</span>
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
    service: 'Planlama',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', service: 'Planlama', message: '' })
        setFormSubmitted(false)
      }, 5000)
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased">

      {/* Top Bar */}
      <div className="bg-obsidian text-surface text-center py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold">
        Hayal Ettiğiniz Projelere Kavuşturur &nbsp;•&nbsp; Bursa — Fransa — Almanya
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
      <section id="home" className="pt-16 lg:pt-20 pb-20 bg-surface">
        <div className="container-max text-center space-y-6 lg:space-y-10">
          <span className="section-label block">Vitaly Concept</span>

          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] leading-[1.08] text-obsidian max-w-5xl mx-auto tracking-tighter">
            Yepyeni Ve Güzel Mekânlar
            <br className="lg:hidden" />
            <span className="hidden lg:inline italic text-primary"> Doğru</span>
            <span className="lg:hidden italic text-primary">Doğru</span>
            {' '}
            <span className="italic text-primary">
              <br className="hidden lg:block" />
              Yöntemle
            </span>
            {' '}Tasarlandı
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pt-8">
            {HERO_GALLERY.map((item, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden border border-obsidian/10 group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — Split 1: Text left, Image right */}
      <section id="about" className="py-20 bg-surface border-t border-obsidian/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="section-label block">Güvenilir Hizmet</span>
              <h2 className="font-display text-3xl sm:text-4xl text-obsidian leading-tight">
                Güvenilir Döşeme, Dürüst Hizmet. Her Zaman.
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Vitaly Concept, 20 yılı aşkın tecrübesiyle seramik sektöründe fark yaratmaya devam ediyor.
                Estetik, fonksiyonellik ve kaliteyi bir araya getirerek yaşam alanlarınıza modern dokunuşlar katıyoruz.
              </p>
              <CheckList items={TRUST_POINTS} />
              <div className="pt-2">
                <AnimatedButton href="#contact" size="sm">
                  Daha Fazla Bilgi
                </AnimatedButton>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-obsidian/10">
                <img src={showroomBath} alt="Vitaly Concept Showroom" className="w-full h-full object-cover" />
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
      <section className="py-20 bg-surface-container-low border-t border-obsidian/10">
        <div className="container-max space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[16/11] overflow-hidden border border-obsidian/10 order-2 lg:order-1">
              <img src={ceramicArt} alt="Seramik uygulama detayı" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="section-label block">Neden Biz?</span>
              <h2 className="font-display text-3xl sm:text-4xl text-obsidian leading-tight">
                Yerel Halk Neden Vitaly Concept'e Güveniyor?
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Güçlü stok ve tedarik ağımız sayesinde projelerinizi aksatmadan, hızlı ve güvenilir teslimat garantisi sunuyoruz.
                Bursa'nın yanı sıra Fransa ve Almanya gibi uluslararası pazarlarda da kalitemizi kanıtlayarak müşteri memnuniyetini en üst seviyeye taşıyoruz.
              </p>
              <AnimatedButton href="#contact" size="sm">
                Hemen İletişime Geçin
              </AnimatedButton>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-obsidian/10 pt-12">
            {FEATURE_ICONS.map((item, idx) => (
              <div key={idx} className="text-center space-y-3 px-2">
                <div className="w-12 h-12 mx-auto border border-obsidian/10 flex items-center justify-center text-primary text-lg font-bold">
                  {item.icon}
                </div>
                <h3 className="text-xs uppercase tracking-[0.1em] font-bold text-obsidian">{item.title}</h3>
                <p className="text-xs text-outline leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="categories" className="py-20 bg-surface border-t border-obsidian/10">
        <div className="container-max space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-label block">Koleksiyonlarımız</span>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian">
              Size Uygun Seramik Çözümünü Bulun.
            </h2>
            <p className="text-sm text-outline">
              Geniş ve ferah showroomumuzda, her bütçeye ve tarza uygun zengin seçenekler sunuyoruz.
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
      <section className="py-20 bg-surface-container-low border-t border-obsidian/10">
        <div className="container-max space-y-14">
          <div className="text-center space-y-3">
            <span className="section-label block">Profesyonel İş Akışı</span>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian">Çalışma Sürecimiz</h2>
            <p className="text-sm text-outline max-w-md mx-auto">
              Projelerinizin hayata geçiş aşamaları
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="text-center space-y-4 relative">
                {idx < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-16 left-[calc(50%+64px)] w-[calc(100%-64px)] border-t border-dashed border-outline-variant"
                    aria-hidden="true"
                  />
                )}
                <div className="process-step-image">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{step.id}</span>
                <h3 className="font-display text-lg text-obsidian">{step.title}</h3>
                <p className="text-xs text-outline leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="references" className="py-20 bg-surface border-t border-obsidian/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="notched-frame overflow-hidden border border-obsidian/10 aspect-[4/3]">
              <img src={heroBg} alt="Tamamlanan proje" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6">
              <span className="section-label block">Referanslarımız</span>
              <h2 className="font-display text-3xl sm:text-4xl text-obsidian leading-tight">
                Son Dönemdeki Seramik Kaplama Projelerimiz Ve İyileştirmelerimiz.
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Bursa Nilüfer'de uyguladığımız modern konut projesinde Gold Calacatta ve River Full Lappato serileriyle
                şıklığı ve dayanıklılığı bir araya getirdik. Fransa ve Almanya'ya gerçekleştirdiğimiz ihracatlarla
                kalitemizi küresel boyuta taşıdık.
              </p>
              <AnimatedButton href="#contact" size="sm">
                Projeleri İncele
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-fixed/40 via-surface-container to-primary/15 border-y border-obsidian/10">
        <div className="container-max py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl text-obsidian leading-tight">
                En İyi Seramik Kaplama Şirketini Hak Ediyorsunuz
              </h2>
              <p className="text-sm text-outline max-w-xl leading-relaxed">
                Vitaly Concept ile hayallerinizdeki mekânları gerçeğe dönüştürmek artık çok daha kolay.
                Kalite, estetik ve güvenilir hizmet anlayışımızla her zaman yanınızdayız.
              </p>
              <AnimatedButton href="#contact">
                Hemen İletişime Geçin
              </AnimatedButton>
            </div>

            <div className="lg:col-span-5 relative lg:-mr-8">
              <div className="aspect-[4/5] max-w-sm mx-auto lg:ml-auto overflow-hidden border border-obsidian/10">
                <img src={showroomBath} alt="Vitaly Concept uzman ekibi" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-surface">
        <div className="container-max space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="section-label block">Müşteri Memnuniyeti</span>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian">
              Müşterilerimizin Gözüyle Biz
            </h2>
            <p className="text-sm text-outline">Geri bildirimler ve referans puanlarımız</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 border border-obsidian/10 bg-surface-container-low p-8 flex flex-col justify-between space-y-6">
              <div className="font-display text-5xl text-primary leading-none">"</div>
              <p className="text-sm text-obsidian leading-relaxed italic">
                Vitaly Concept ekibi banyomuzu tamamen değiştirdi. Seramiklerin kalitesi ve uygulamanın kusursuzluğu
                bizi büyüledi. Fransa'daki projemizi tam zamanında ve eksiksiz teslim ettiler. Kesinlikle tavsiye ediyoruz!
              </p>
              <div className="flex items-center justify-between border-t border-obsidian/10 pt-5">
                <div>
                  <h4 className="font-bold text-xs text-obsidian uppercase tracking-wider">Ahmet H.</h4>
                  <span className="text-[10px] text-outline">Müşteri / Fransa</span>
                </div>
                <StarRating />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="col-span-1 border border-obsidian/10 bg-surface-container-low p-6 flex flex-col justify-center items-center text-center space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-obsidian">
                  <span>Google</span>
                  <StarRating />
                </div>
                <span className="font-display text-3xl text-obsidian font-bold">5.0</span>
                <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Yıldız Puanı</span>
              </div>

              <div className="col-span-1 border border-obsidian/10 bg-surface-container-low p-6 flex flex-col justify-center items-center text-center space-y-1">
                <span className="font-display text-3xl text-primary font-bold">250+</span>
                <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Tamamlanmış Proje</span>
              </div>

              <div className="col-span-1 aspect-square overflow-hidden border border-obsidian/10">
                <img src={ceramicArt} alt="Seramik detay" className="w-full h-full object-cover" />
              </div>

              <div className="col-span-1 aspect-square overflow-hidden border border-obsidian/10">
                <img src={heroBg} alt="Proje görünümü" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="border border-obsidian/10 bg-surface-container-low p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-10 h-10 shrink-0 border border-primary/30 bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
              i
            </div>
            <div>
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">Sosyal Medya Haberi</span>
              <p className="text-xs text-obsidian mt-1 leading-relaxed">
                "Vahe ile Evdeki Mutluluk" programının misafiri olduk. Güzel bir banyo dönüşüm projesini seramiklerimizle
                şenlendirdik. Keyifli bir iş birliği oldu! #seramiksanati #vitalyconcept
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-surface-container-low border-t border-obsidian/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="section-label block">Bize Ulaşın</span>
                <h2 className="font-display text-3xl sm:text-4xl text-obsidian leading-tight">
                  Seramik Hizmetinizi Bugün Ayarlayın!
                </h2>
                <p className="text-sm text-outline leading-relaxed">
                  Projeleriniz, siparişleriniz veya showroom ziyaretleriniz için bizimle irtibata geçebilirsiniz.
                </p>
              </div>

              <div className="space-y-5 border-t border-obsidian/10 pt-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-obsidian/10 flex items-center justify-center text-primary text-sm">☎</div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold block mb-1">Telefon</span>
                    <a href="tel:+905330452886" className="block text-sm text-obsidian font-semibold hover:text-primary transition-colors">+90 533 045 28 86</a>
                    <a href="tel:+905413587611" className="block text-sm text-obsidian font-semibold hover:text-primary transition-colors">+90 541 358 76 11</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-obsidian/10 flex items-center justify-center text-primary text-sm">✉</div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold block mb-1">E-Posta</span>
                    <a href="mailto:info@vitalyconcept.com" className="text-sm text-obsidian font-semibold hover:text-primary transition-colors">info@vitalyconcept.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-obsidian/10 flex items-center justify-center text-primary text-sm">◎</div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold block mb-1">Adres</span>
                    <p className="text-sm text-obsidian font-semibold leading-relaxed">
                      Ahmet Yesevi, Sanayi Cd. No:563/D, 16140 Nilüfer/Bursa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container border border-obsidian/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl text-obsidian mb-2">Ücretsiz Fiyat Teklifi Alın</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ahmet Yesevi"
                      className="form-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Telefon *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Örn: 0533 000 00 00"
                      className="form-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">E-Posta</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Örn: info@example.com"
                      className="form-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Hizmet Türü</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-field cursor-pointer"
                    >
                      <option value="Planlama">Planlama & Tasarım</option>
                      <option value="Uygulama">Seramik Uygulama & Tadilat</option>
                      <option value="Showroom">Showroom Ürün Seçimi</option>
                      <option value="Toptan">Toptan Tedarik & İhracat</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Mesajınız</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Projenizin detaylarından bahsedin..."
                    className="form-field resize-none"
                  />
                </div>

                {formSubmitted ? (
                  <div className="bg-primary/10 border border-primary/20 text-primary-dark text-xs font-bold py-4 text-center">
                    Mesajınız başarıyla iletildi. En kısa sürede sizinle irtibata geçeceğiz.
                  </div>
                ) : (
                  <AnimatedButton type="submit" size="lg" fullWidth>
                    Gönder
                  </AnimatedButton>
                )}
              </form>
            </div>
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

    </div>
  )
}

export default App
