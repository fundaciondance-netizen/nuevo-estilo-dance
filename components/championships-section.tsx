"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  { src: "/images/champions/vertical_1.webp", alt: "Campeones Nacionales" },
  { src: "/images/champions/horizontal_2.webp", alt: "Battle Urban League" },
  { src: "/images/champions/horizontal_1.webp", alt: "Internacional Dance Fest" },
]

export function ChampionshipsSection() {
  return (
    <section id="campeonatos" className="relative py-4 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#f97f09] font-medium tracking-wider uppercase text-sm mb-4">
              Nuestra Trayectoria
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Campeones
              <br />
              <span className="text-[#f97f09]">por Pasión</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Años de dedicación y trabajo duro nos han llevado a conquistar 
              los escenarios más importantes. Cada trofeo representa el esfuerzo 
              de nuestra comunidad.
            </p>
          </motion.div>

          {/* IMÁGENES */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 items-center">

              {/* Imagen grande */}
              <motion.div
                className="col-span-1 row-span-2 aspect-4/5 relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover" />
              </motion.div>

              {/* Pequeña arriba */}
              <motion.div
                className="aspect-video relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill className="object-cover" />
              </motion.div>

              {/* Pequeña abajo */}
              <motion.div
                className="aspect-video relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image src={galleryImages[2].src} alt={galleryImages[2].alt} fill className="object-cover" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}