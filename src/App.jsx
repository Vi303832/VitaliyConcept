import React, { useState, useEffect } from 'react'
import heroBg from './assets/hero_bg.png'
import ceramicArt from './assets/ceramic_art.png'
import showroomBath from './assets/showroom_bath.png'

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: 'Planlama', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll detection for navbar shadow/bg transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
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
      
      {/* Upper Thin Bar */}
      <div className="bg-obsidian text-surface text-center py-2 text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-white/10">
        Hayal Ettiğiniz Projelere Kavuşturur • Bursa - Fransa - Almanya
      </div>

      {/* Glassmorphic Navbar with Sharp Design */}
      <header className={`sticky top-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-surface/90 backdrop-blur-md py-4 border-obsidian/10 shadow-sm' 
          : 'bg-surface py-6 border-obsidian/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex flex-col group">
            <span className="font-display font-bold text-xl md:text-2xl tracking-wider text-obsidian uppercase">
              VITALY CONCEPT
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-outline font-semibold">
              Seramik • Vitrifiye • Tasarım
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-xs uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors">Anasayfa</a>
            <a href="#about" className="text-xs uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors">Kurumsal</a>
            <a href="#categories" className="text-xs uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors">Ürünler</a>
            <a href="#references" className="text-xs uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors">Referanslar</a>
            <a href="#contact" className="text-xs uppercase tracking-[0.1em] font-semibold text-obsidian hover:text-primary transition-colors">İletişim</a>
          </nav>

          {/* Sharp Bronze CTA Button */}
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary-dark text-white text-[10px] uppercase tracking-[0.15em] font-bold px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Ücretsiz Teklif Al
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-8">
          
          {/* Label with borders */}
          <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <div className="h-[1px] bg-outline-variant flex-1"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
              PLANLAMA • UYGULAMA • TESLİMAT
            </span>
            <div className="h-[1px] bg-outline-variant flex-1"></div>
          </div>
          
          <h1 className="font-display font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-obsidian max-w-4xl mx-auto leading-tight">
            Yepyeni Ve Güzel Zeminler <br />
            <span className="text-primary italic">Doğru Yöntemle</span> Döşendi.
          </h1>

          <p className="text-sm sm:text-base text-outline max-w-2xl mx-auto leading-relaxed font-light">
            Seramik sanatında özgünlük ve zarafet. Vitaly Concept ile hayal gücünüzü gerçeğe dönüştürün, mekânlarınızda eşsiz bir sanat deneyimi yaşayın.
          </p>

          <div>
            <a 
              href="#contact" 
              className="inline-block bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-[0.15em] font-bold px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              HEMEN TEKLİF AL
            </a>
          </div>

          {/* Horizontal Gallery (4 sharp images) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {[
              { img: heroBg, title: 'Gold Calacatta Uygulaması' },
              { img: ceramicArt, title: 'River Full Lappato Detay' },
              { img: showroomBath, title: 'Lüks Vitrifiye Armatür' },
              { img: heroBg, title: 'Mat Beton Efekt Seramik' }
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden border border-obsidian/10 group">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/5 transition-all duration-300"></div>
                <div className="absolute bottom-3 left-3 bg-surface/90 border border-obsidian/10 px-2.5 py-1">
                  <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-obsidian">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About & Trust Section (Güvenilir Döşeme...) */}
      <section id="about" className="py-20 border-t border-obsidian/10 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold block">GÜVENİLİR HİZMET</span>
              
              <h2 className="font-display text-3xl sm:text-4xl text-obsidian leading-tight">
                Güvenilir Döşeme, Dürüst Hizmet. Her Zaman.
              </h2>

              <p className="text-sm text-outline leading-relaxed font-light">
                Vitaly Concept, 20 yılı aşkın tecrübesiyle seramik sektöründe fark yaratmaya devam ediyor. Estetik, fonksiyonellik ve kaliteyi bir araya getirerek, yaşam alanlarınıza modern ve estetik dokunuşlar katıyoruz.
              </p>

              {/* Checklist styled as requested in wireframe */}
              <div className="space-y-3 pt-2">
                {[
                  'Kurumsal ve yenilikçi yaklaşım – Sektör tecrübemizi modern tasarımla buluşturuyoruz.',
                  'Zengin ürün yelpazesi – Seramikten banyo dolaplarına kadar geniş seçenekler.',
                  'Profesyonel ve güler yüzlü ekip – Satış öncesi ve sonrası tam müşteri desteği.'
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-xs text-obsidian font-semibold">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-obsidian/10 space-y-4">
                <h4 className="font-display text-lg text-obsidian">Neden Vitaly Concept'e Güveniyorlar?</h4>
                <p className="text-xs text-outline leading-relaxed">
                  Güçlü stok ve tedarik ağımız sayesinde projelerinizi aksatmadan, hızlı ve güvenilir teslimat garantisi sunuyoruz. Bursa’nın yanı sıra Fransa ve Almanya gibi uluslararası pazarlarda da kalitemizi kanıtlayarak, müşteri memnuniyetini en üst seviyeye taşıyoruz.
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block bg-obsidian hover:bg-primary text-white text-[10px] uppercase tracking-[0.15em] font-bold px-8 py-3.5 transition-all duration-300"
                >
                  Hakkımızda Daha Fazla
                </a>
              </div>
            </div>

            {/* Right Image Display with overlays */}
            <div className="lg:col-span-5 relative">
              <div className="border border-obsidian/10 overflow-hidden relative aspect-[4/5]">
                <img 
                  src={showroomBath} 
                  alt="Vitaly Showroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent"></div>
              </div>
              
              {/* Badge Overlaid */}
              <div className="absolute top-6 left-6 bg-primary border border-white/10 text-white px-5 py-4 shadow-lg text-center">
                <span className="block font-display text-2xl font-bold">20+</span>
                <span className="block text-[8px] uppercase tracking-[0.1em] font-bold">Yıllık Tecrübe</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Category Grid Section (Size Uygun Seramik Çözümleri...) */}
      <section id="categories" className="py-20 border-t border-obsidian/10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">KOLEKSİYONLARIMIZ</span>
            <h2 className="font-display text-3xl text-obsidian">
              Size Uygun Seramik & Tasarım Çözümünü Bulun.
            </h2>
            <p className="text-xs text-outline max-w-lg mx-auto">
              Geniş ve ferah showroomumuzda, her bütçeye ve tarza uygun zengin seçenekler sunuyoruz.
            </p>
          </div>

          {/* 6 Category Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Salon Seramikleri', img: heroBg, desc: 'Lüks porselen ve mermer efektli plakalar.' },
              { title: 'Banyo & Vitrifiye', img: showroomBath, desc: 'Şık armatürler, bataryalar ve klozet sistemleri.' },
              { title: 'Mutfak Seramikleri', img: ceramicArt, desc: 'Tezgah arası ve zemin kaplama alternatifleri.' },
              { title: 'Dış Mekan Porselen', img: heroBg, desc: 'Donmaya ve suya dayanıklı kalın zemin seramikleri.' },
              { title: 'Yapı Kimyasalları', img: ceramicArt, desc: 'Profesyonel kalitede yapıştırıcı ve derzler.' },
              { title: 'Banyo Mobilyaları', img: showroomBath, desc: 'Modern tasarımlı neme dayanıklı banyo dolapları.' }
            ].map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-surface border border-obsidian/10 p-6 flex flex-col justify-between group hover:border-primary transition-all duration-300"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden border border-obsidian/5 mb-6">
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-obsidian mb-2 text-left">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-outline text-left leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-obsidian/5 pt-4 mt-6">
                  <a href="#contact" className="text-[10px] uppercase tracking-[0.1em] font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                    İncele
                  </a>
                  <span className="text-obsidian group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a 
              href="#contact" 
              className="inline-block bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-[0.15em] font-bold px-10 py-4 transition-all duration-300"
            >
              Tüm Ürünleri Gör
            </a>
          </div>

        </div>
      </section>

      {/* Process Section (Çalışma Sürecimiz) */}
      <section className="py-20 border-t border-obsidian/10 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">PROFESYONEL İŞ AKIŞI</span>
            <h2 className="font-display text-3xl text-obsidian">Çalışma Sürecimiz</h2>
            <p className="text-xs text-outline max-w-sm mx-auto">Projelerinizin hayata geçiş aşamaları</p>
          </div>

          {/* 4 Steps Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Planlama', desc: 'Tadilat öncesi doğru planlama, seramiklerle yenilenen yaşam alanı.' },
              { id: '02', title: 'Seçim & Tasarım', desc: 'Showroomda bütçenize uygun zengin ürün alternatiflerinin tespiti.' },
              { id: '03', title: 'Uygulama', desc: 'Ustalıkla uygulanan hayalleriniz, kusursuz montaj teknikleriyle gerçeğe dönüşüyor.' },
              { id: '04', title: 'Teslim & Memnuniyet', desc: 'Tamamlanmış iş, mutlu müşterilerle teslim edilir. Memnuniyetiniz bizim başarımızdır.' }
            ].map((step, idx) => (
              <div key={idx} className="border border-obsidian/10 p-6 space-y-4 bg-surface-container-low hover:bg-surface transition-colors duration-300">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-white font-bold font-display text-lg mx-auto">
                  {step.id}
                </div>
                <h3 className="font-display font-bold text-base text-obsidian">{step.title}</h3>
                <p className="text-xs text-outline leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Showcase (Son Dönemdeki Zemin Döşeme...) */}
      <section id="references" className="py-20 border-t border-obsidian/10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left large project preview */}
            <div className="lg:col-span-7 border border-obsidian/10 overflow-hidden aspect-[16/10]">
              <img 
                src={heroBg} 
                alt="Completed project design" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-75"
              />
            </div>

            {/* Right content info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold block">REFERANSLARIMIZ</span>
              
              <h2 className="font-display text-3xl text-obsidian leading-tight">
                Son Dönemdeki Seramik Kaplama Projelerimiz Ve İyileştirmelerimiz.
              </h2>
              
              <p className="text-sm text-outline leading-relaxed font-light">
                Bursa Nilüfer'de uyguladığımız modern konut projesinde Gold Calacatta ve River Full Lappato serileriyle şıklığı ve dayanıklılığı bir araya getirdik. Fransa ve Almanya'ya gerçekleştirdiğimiz ihracatlarla kalitemizi küresel boyuta taşıdık.
              </p>

              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-block bg-obsidian hover:bg-primary text-white text-[10px] uppercase tracking-[0.15em] font-bold px-8 py-3.5 transition-all duration-300"
                >
                  Tüm Projeleri İncele
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strong Banner Segment (En İyi Zemin Kaplama Şirketi...) */}
      <section className="py-16 bg-obsidian text-surface border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side text and CTA */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight">
                En İyi Seramik Kaplama Şirketini Hak Ediyorsunuz
              </h2>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed font-light">
                Vitaly Concept ile hayallerinizdeki mekanları gerçeğe dönüştürmek artık çok daha kolay! Kalite, estetik ve güvenilir hizmet anlayışımızla her zaman yanınızdayız.
              </p>
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-block bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-[0.15em] font-bold px-8 py-4 transition-all duration-300"
                >
                  Hemen İletişime Geçin
                </a>
              </div>
            </div>

            {/* Right side portrait display image */}
            <div className="lg:col-span-4 border border-white/10 overflow-hidden aspect-[4/3] bg-dark-card">
              <img 
                src={ceramicArt} 
                alt="Premium ceramic layout details" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof & Reviews (Müşterilerimizin Gözüyle...) */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">MÜŞTERİ MEMNUNİYETİ</span>
            <h2 className="font-display text-3xl text-obsidian">
              Müşterilerimizin Gözüyle Biz
            </h2>
            <p className="text-xs text-outline">Geri bildirimler ve referans puanlarımız</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Testimonial Quote */}
            <div className="lg:col-span-6 border border-obsidian/10 p-8 flex flex-col justify-between space-y-6 bg-surface-container-low">
              <div className="text-primary font-display text-4xl leading-none">“</div>
              <p className="text-sm text-obsidian italic leading-relaxed font-light">
                "Vitaly Concept ekibi banyomuzu tamamen değiştirdi. Seramiklerin kalitesi ve uygulamanın kusursuzluğu bizi büyüledi. Fransa'daki projemizi tam zamanında ve eksiksiz teslim ettiler. Kesinlikle tavsiye ediyoruz!"
              </p>
              <div className="flex items-center justify-between border-t border-obsidian/10 pt-4">
                <div>
                  <h4 className="font-bold text-xs text-obsidian uppercase tracking-wider">Ahmet H.</h4>
                  <span className="text-[10px] text-outline block">Müşteri / Fransa</span>
                </div>
                {/* 5 stars */}
                <div className="flex text-amber-500 text-xs">★★★★★</div>
              </div>
            </div>

            {/* Middle Image display */}
            <div className="lg:col-span-3 border border-obsidian/10 overflow-hidden aspect-square lg:aspect-auto">
              <img 
                src={ceramicArt} 
                alt="Ceramic tiles detailing" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side stats metrics */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-4">
              <div className="border border-obsidian/10 p-6 text-center space-y-1 bg-surface-container-low flex-1 flex flex-col justify-center">
                <span className="font-display text-3xl text-primary font-bold block">250+</span>
                <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Tamamlanmış Proje</span>
              </div>
              
              <div className="border border-obsidian/10 p-6 text-center space-y-2 bg-surface-container-low flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-center gap-1.5 text-xs">
                  <span className="font-bold text-obsidian">Google</span>
                  <div className="flex text-amber-500">★★★★★</div>
                </div>
                <span className="font-display text-2xl text-obsidian font-bold block">5.0 Star</span>
              </div>
            </div>

          </div>

          {/* Social News Highlight */}
          <div className="bg-surface-container-low border border-obsidian/10 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-10 h-10 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
              i
            </div>
            <div>
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">SOSYAL MEDYA HABERİ</span>
              <p className="text-xs text-obsidian mt-0.5 leading-relaxed font-light">
                "Vahe ile Evdeki Mutluluk" programının misafiri olduk. Güzel bir banyo dönüşüm projesini seramiklerimizle şenlendirdik. Keyifli bir iş birliği oldu! 😊😎👍 #seramiksanati #vitalyconcept
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Appointment & Contact Form (Zemin Döşeme Hizmetinizi Bugün Ayarlayın!) */}
      <section id="contact" className="py-20 border-t border-obsidian/10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Information Panel */}
            <div className="lg:col-span-5 border border-obsidian/10 bg-surface p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold block">BİZE ULAŞIN</span>
                  <h3 className="font-display text-2xl text-obsidian mt-1">Seramik & Tasarım Hizmetinizi Bugün Ayarlayın!</h3>
                  <p className="text-xs text-outline mt-2 leading-relaxed">
                    Projeleriniz, siparişleriniz veya showroom ziyaretleriniz için bizimle irtibata geçebilirsiniz.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-obsidian/10">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Adres</span>
                    <p className="text-xs text-obsidian font-semibold">Ahmet Yesevi, Sanayi Cd. No:563/D, 16140 Nilüfer/Bursa</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Telefon & İletişim</span>
                    <a href="tel:+905330452886" className="block text-xs text-obsidian font-semibold hover:text-primary transition-colors">+90 533 045 28 86</a>
                    <a href="tel:+905413587611" className="block text-xs text-obsidian font-semibold hover:text-primary transition-colors">+90 541 358 76 11</a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">E-Posta</span>
                    <a href="mailto:info@vitalyconcept.com" className="block text-xs text-obsidian font-semibold hover:text-primary transition-colors">info@vitalyconcept.com</a>
                  </div>
                </div>
              </div>

              {/* Instagram social statistics */}
              <div className="border-t border-obsidian/10 pt-6">
                <span className="text-[9px] uppercase tracking-[0.15em] text-primary font-bold block mb-3">INSTAGRAM AKTİVİTESİ</span>
                <div className="flex gap-6 items-center">
                  <div>
                    <span className="block font-display text-xl text-obsidian font-bold">2.177</span>
                    <span className="block text-[8px] uppercase text-outline font-bold">Takipçi</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl text-obsidian font-bold">272</span>
                    <span className="block text-[8px] uppercase text-outline font-bold">Gönderi</span>
                  </div>
                  <a 
                    href="https://www.instagram.com/vitalyconcept" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[10px] uppercase font-bold text-obsidian border-b border-obsidian pb-0.5 hover:text-primary hover:border-primary ml-auto transition-all"
                  >
                    @vitalyconcept
                  </a>
                </div>
              </div>

            </div>

            {/* Right Appointment/Quote Form (Libre-Style Input fields) */}
            <div className="lg:col-span-7 border border-obsidian/10 bg-surface p-8 flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="font-display text-xl text-obsidian">Ücretsiz Fiyat Teklifi Alın</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ahmet Yesevi"
                      className="bg-transparent border-b border-outline/30 focus:border-obsidian text-sm py-2 px-1 focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Telefon Numaranız *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Örn: 0533 000 00 00"
                      className="bg-transparent border-b border-outline/30 focus:border-obsidian text-sm py-2 px-1 focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">E-Posta Adresiniz</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Örn: info@example.com"
                      className="bg-transparent border-b border-outline/30 focus:border-obsidian text-sm py-2 px-1 focus:outline-none transition-all placeholder-slate-400"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Hizmet Türü</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="bg-transparent border-b border-outline/30 focus:border-obsidian text-sm py-2 px-1 focus:outline-none transition-all cursor-pointer text-slate-800"
                    >
                      <option value="Planlama">Planlama & Tasarım</option>
                      <option value="Uygulama">Seramik Uygulama & Tadilat</option>
                      <option value="Showroom">Showroom Ürün Seçimi</option>
                      <option value="Toptan">Toptan Tedarik & İhracat</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.1em] text-outline font-bold">Mesajınız / Projeniz</label>
                  <textarea 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Lütfen projenizin detaylarından veya isteklerinizden bahsedin..."
                    className="bg-transparent border-b border-outline/30 focus:border-obsidian text-sm py-2 px-1 focus:outline-none transition-all resize-none placeholder-slate-400"
                  ></textarea>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold py-4 text-center">
                    Mesajınız ve teklif talebiniz başarıyla iletildi. En kısa sürede sizinle irtibata geçeceğiz.
                  </div>
                ) : (
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-[0.15em] font-bold py-4 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    TEKLİF TALEBİ GÖNDER
                  </button>
                )}
              </form>

            </div>

          </div>
        </div>
      </section>

      {/* Footer in Obsidian */}
      <footer className="bg-[#0f1011] text-surface-container-high py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="space-y-4 max-w-sm">
            <h4 className="font-display text-white text-xl tracking-wider uppercase">VITALY CONCEPT</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              20 yılı aşkın tecrübesiyle seramik, vitrifiye ve yapı kimyasalları sektöründe Bursa'dan Avrupa'ya uzanan tasarım ve güven adresi.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">Hızlı Bağlantılar</h5>
            <div className="flex flex-col gap-2 text-xs text-slate-400">
              <a href="#home" className="hover:text-primary transition-colors">Anasayfa</a>
              <a href="#about" className="hover:text-primary transition-colors">Kurumsal</a>
              <a href="#categories" className="hover:text-primary transition-colors">Koleksiyonlar</a>
              <a href="#references" className="hover:text-primary transition-colors">Referanslar</a>
              <a href="#contact" className="hover:text-primary transition-colors">İletişim</a>
            </div>
          </div>

          <div className="space-y-4 text-xs text-slate-400">
            <h5 className="text-[10px] uppercase tracking-[0.15em] text-white font-bold">Showroom İletişim</h5>
            <p>Ahmet Yesevi, Sanayi Cd. No:563/D, 16140 Nilüfer/Bursa</p>
            <p>Tel: +90 533 045 28 86 • info@vitalyconcept.com</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-slate-500">
          <span>Vitaly Concept © {new Date().getFullYear()}. Tüm Hakları Saklıdır.</span>
          <span>Bursa, Türkiye.</span>
        </div>
      </footer>

    </div>
  )
}

export default App
