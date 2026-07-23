import { useEffect, useRef, useState } from 'react'

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z" />
    </svg>
  )
}

export default function MediaEmbed({
  poster,
  src,
  type = 'video',
  alt = '',
  className = '',
  slides = [],
  autoPlayGif = true,
}) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [mode, setMode] = useState('idle')
  const [slideIndex, setSlideIndex] = useState(0)
  const [videoReady, setVideoReady] = useState(false)

  const previewSlides = slides.length > 0 ? slides : poster ? [poster] : []
  const hasVideo = type === 'video' && Boolean(src)
  const hasGif = type === 'gif' && Boolean(src)

  useEffect(() => {
    if (mode !== 'slideshow' || previewSlides.length < 2) return undefined

    const timer = setInterval(() => {
      setSlideIndex((current) => (current + 1) % previewSlides.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [mode, previewSlides.length])

  useEffect(() => {
    if (!hasGif || !autoPlayGif) return
    setMode('gif')
  }, [hasGif, autoPlayGif])

  // Performance-friendly autoplay when scrolled into view
  useEffect(() => {
    if (!hasVideo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMode('video')
          // Allow the video element to mount if it isn't already
          requestAnimationFrame(() => {
            if (videoRef.current) {
              videoRef.current.play().catch((err) => {
                console.log('Autoplay was prevented or failed:', err)
              })
            }
          })
        } else {
          // Pause when off-screen to save resources/performance
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause()
          }
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      observer.disconnect()
    }
  }, [hasVideo])

  const handlePlay = async () => {
    if (hasGif) {
      setMode('gif')
      return
    }

    if (hasVideo) {
      setMode('video')
      requestAnimationFrame(() => {
        videoRef.current?.play().catch(() => {
          setMode('slideshow')
        })
      })
      return
    }

    setMode('slideshow')
  }

  const showPosterLayer = mode === 'idle' || (mode === 'video' && !videoReady)
  const activePoster = previewSlides[slideIndex] ?? poster

  return (
    <div ref={containerRef} className={`media-embed ${className}`}>
      {mode === 'gif' && hasGif && (
        <img src={src} alt={alt} className="media-embed__media" />
      )}

      {mode === 'video' && hasVideo && (
        <video
          ref={videoRef}
          className="media-embed__media"
          src={src}
          poster={poster}
          controls
          playsInline
          muted
          loop
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          onEnded={() => {
            setVideoReady(false)
            setMode('idle')
          }}
          onError={() => {
            setVideoReady(false)
            setMode('slideshow')
          }}
        />
      )}

      {mode === 'slideshow' && (
        <div className="media-embed__slideshow">
          {previewSlides.map((slide, idx) => (
            <img
              key={slide}
              src={slide}
              alt={alt}
              className={`media-embed__slide ${idx === slideIndex ? 'is-active' : ''}`}
            />
          ))}
        </div>
      )}

      {showPosterLayer && mode !== 'gif' && mode !== 'slideshow' && (
        <img
          src={activePoster}
          alt={alt}
          className={`media-embed__media ${mode === 'idle' ? 'media-embed__media--kenburns' : ''}`}
        />
      )}

      {mode === 'idle' && (
        <button
          type="button"
          className="media-embed__play"
          onClick={handlePlay}
          aria-label={hasVideo ? 'Videoyu oynat' : hasGif ? 'Animasyonu başlat' : 'Önizlemeyi başlat'}
        >
          <PlayIcon />
        </button>
      )}

      {mode === 'slideshow' && (
        <button
          type="button"
          className="media-embed__close"
          onClick={() => setMode('idle')}
          aria-label="Önizlemeyi kapat"
        >
          ×
        </button>
      )}
    </div>
  )
}
