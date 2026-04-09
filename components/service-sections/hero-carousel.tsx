"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  { src: "/images/experience/formacion-e.webp", alt: "Performance de danza contemporánea" },
    { src: "/images/champions/horizontal_1.webp", alt: "Experiencia cultural de flamenco" },
  { src: "/images/experience/shows-e-new.webp", alt: "Taller de formación en danza" },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Arte · Cultura · Movimiento
        </span>
        <h1 className="mb-6 max-w-4xl text-balance text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
          Servicios y Líneas de Acción
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Creamos experiencias únicas a través de la danza, la formación y la gestión cultural
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 text-foreground/60 transition-colors hover:text-foreground md:left-8"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-8 w-8 md:h-12 md:w-12" strokeWidth={1} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 text-foreground/60 transition-colors hover:text-foreground md:right-8"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-8 w-8 md:h-12 md:w-12" strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-foreground"
                : "bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
