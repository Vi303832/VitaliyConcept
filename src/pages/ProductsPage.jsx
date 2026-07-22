import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import AnimatedButton from '../components/AnimatedButton'

function ProductCard({ product, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.35) }}
      className="group border border-obsidian/10 bg-surface-container-lowest overflow-hidden rounded-[20px] hover:border-primary/40 transition-colors duration-300"
    >
      <div className="aspect-[4/5] bg-surface-container overflow-hidden">
        <img
          src={product.img}
          alt={`${product.name} ${product.size}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-primary">
            {product.series}
          </span>
          <span className="text-[10px] text-outline font-semibold">{product.size}</span>
        </div>
        <h3 className="font-sans font-bold text-base text-obsidian leading-snug tracking-tight">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-container text-outline font-semibold">
            {product.finish}
          </span>
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-container text-outline font-semibold">
            {product.tag}
          </span>
        </div>
        <a
          href={`https://wa.me/905413587611?text=${encodeURIComponent(`Merhaba, ${product.name} (${product.size}) ürünü hakkında bilgi almak istiyorum.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-bold text-obsidian hover:text-primary transition-colors pt-1"
        >
          Teklif İste
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.article>
  )
}

export default function ProductsPage() {
  const [category, setCategory] = useState('Tümü')
  const [query, setQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      const catOk = category === 'Tümü' || p.category === category
      if (!catOk) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.size.toLowerCase().includes(q) ||
        p.finish.toLowerCase().includes(q)
      )
    })
  }, [category, query])

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased overflow-x-hidden">
      <SiteHeader />

      <section className="pt-14 lg:pt-20 pb-10 border-b border-obsidian/10">
        <div className="container-max space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-obsidian font-semibold">Ürünler</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="section-label block">Katalog</span>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-obsidian leading-[1.08] tracking-tight">
              Tüm Ürünlerimiz
            </h1>
            <p className="text-sm sm:text-base text-outline leading-relaxed max-w-2xl">
              Bissürü koleksiyonları ve klasik stok seramiklerimizi tek yerden inceleyin.
              Ölçü, yüzey ve renk seçenekleri için showroom veya WhatsApp üzerinden teklif alın.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 pt-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ürün, seri veya ölçü ara…"
                className="w-full bg-white border border-obsidian/10 rounded-full text-sm text-obsidian pl-11 pr-4 py-3 outline-none focus:border-primary transition-colors"
              />
            </div>
            <p className="text-xs text-outline font-semibold uppercase tracking-wider">
              {filtered.length} ürün
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.12em] font-bold px-4 py-2.5 rounded-full border transition-all cursor-pointer ${
                  category === cat
                    ? 'bg-obsidian text-white border-obsidian'
                    : 'bg-white text-obsidian border-obsidian/10 hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <p className="text-outline">Aramanıza uygun ürün bulunamadı.</p>
              <button
                type="button"
                onClick={() => { setQuery(''); setCategory('Tümü') }}
                className="text-xs uppercase tracking-wider font-bold text-primary cursor-pointer"
              >
                Filtreleri temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}

          <div className="mt-16 border border-obsidian/10 rounded-[24px] bg-surface-container-low p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-sans font-extrabold text-xl md:text-2xl text-obsidian tracking-tight">
                Doğru ürünü birlikte seçelim
              </h2>
              <p className="text-sm text-outline leading-relaxed">
                Showroomumuzda numune inceleyebilir, projenize özel ölçü ve stok bilgisi alabilirsiniz.
              </p>
            </div>
            <AnimatedButton href="/#contact">Ücretsiz Teklif Al</AnimatedButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
