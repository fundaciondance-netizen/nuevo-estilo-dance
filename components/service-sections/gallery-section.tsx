"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { easeInOut } from "framer-motion"

const galleryImages = [
  { src: "/images/creation-img.webp", alt: "Creación artística", span: "col-span-2 row-span-2" },
  { src: "/images/circulation-img.webp", alt: "Circulación cultural", span: "col-span-1 row-span-1" },
  { src: "/images/experience/gest-e.webp", alt: "Ensemble de danza", span: "col-span-1 row-span-2" },
  { src: "/images/formation-img.webp", alt: "Formación en danza", span: "col-span-1 row-span-1" },

  { src: "/images/experience/shows-e-new.webp", alt: "Festival de danza", span: "col-span-2 row-span-1" },
  { src: "/images/experience/formacion-e.webp", alt: "Movimiento abstracto", span: "col-span-1 row-span-1" },
  { src: "/images/entrepreneurship-new.webp", alt: "Escenario en vivo", span: "col-span-1 row-span-1" },
  { src: "/images/experience/turism-e.webp", alt: "Expresión corporal", span: "col-span-1 row-span-2" },

  { src: "/images/champions/horizontal_1.webp", alt: "Performance grupal", span: "col-span-2 row-span-1" },
  { src: "/images/services-images/formation_1.webp", alt: "Ensayo artístico", span: "col-span-1 row-span-1" },
  { src: "/images/services-images/creacion_1.webp", alt: "Escena contemporánea", span: "col-span-1 row-span-1" },
  { src: "/images/tourism-img.webp", alt: "Coreografía moderna", span: "col-span-1 row-span-2" },

  { src: "/images/champions/vertical_1.webp", alt: "Interpretación escénica", span: "col-span-1 row-span-1" },
  { src: "/images/services-images/circulacion_2.webp", alt: "Arte en movimiento", span: "col-span-2 row-span-1" },
  { src: "/images/champions/horizontal_2.webp", alt: "Expresión artística", span: "col-span-1 row-span-1" },
]

// 🔥 Animaciones
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:mb-24"
        >
          <div>
            <span className="inline-block text-[#f97f09] font-semibold text-sm uppercase tracking-wider mb-4">
              Galería
            </span>
            <h2 className="text-4xl font-light md:text-5xl lg:text-6xl text-black">
              Momentos que inspiran
            </h2>
          </div>

          <p className="max-w-md text-gray-600 md:text-right">
            Una selección de imágenes que capturan la esencia de nuestro trabajo y la pasión por el arte del movimiento.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              variants={item}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-xl ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay pro */}
              <div className="absolute inset-0 bg-[#f97f09]/0 group-hover:bg-[#f97f09]/20 transition-all duration-500" />

              {/* Glow sutil */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ring-1 ring-[#f97f09]/30" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              className="absolute right-4 top-4 p-2 text-white/60 hover:text-white md:right-8 md:top-8"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" strokeWidth={1} />
            </button>

            {/* Image */}
            <motion.div
              className="relative h-[80vh] w-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(index)
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === selectedImage
                      ? "w-8 bg-[#f97f09]"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}