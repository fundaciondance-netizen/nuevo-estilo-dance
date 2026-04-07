"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Palette, Globe, Briefcase, Plane } from "lucide-react"

const actionLines = [
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Programas estructurados para todos los niveles. Desde principiantes hasta profesionales, desarrollamos tu técnica y expresión artística.",
    image: "/images/formation-img.webp",
    href: "#formacion",
  },
  {
    icon: Palette,
    title: "Creación",
    description: "Espacios para desarrollar tu creatividad y crear coreografías originales. Impulsa tu visión artística única.",
    image: "/images/creation-img.webp",
    href: "#creacion",
  },
  {
    icon: Globe,
    title: "Circulación",
    description: "Llevamos el talento urbano a escenarios locales, nacionales e internacionales. Shows, competencias y festivales.",
    image: "/images/circulation-img.webp",
    href: "#circulacion",
  },
  {
    icon: Briefcase,
    title: "Emprendimiento",
    description: "Formación en gestión cultural y emprendimiento. Construye tu carrera profesional en la industria de la danza.",
    image: "/images/entrepreneurship-img.webp",
    href: "#emprendimiento",
  },
  {
    icon: Plane,
    title: "Turismo",
    description: "Experiencias de danza cultural que conectan el arte urbano con el turismo. Tours, workshops internacionales y más.",
    image: "/images/tourism-img.webp",
    href: "#turismo",
  },
]

export function ActionLinesSection() {
  return (
    <section className="py-16 lg:py-16 bg-white relative overflow-hidden" id="lineas">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#f97f09] font-semibold text-sm uppercase tracking-wider mb-4">
            Líneas de Acción
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Cinco caminos hacia tu
            <span className="text-[#d35121]"> transformación</span>
          </h2>

          <p className="text-lg text-black/70">
            Nuestra fundación trabaja en cinco líneas estratégicas que integran el arte, 
            la educación y el desarrollo comunitario.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actionLines.slice(0, 3).map((line, index) => (
            <ActionCard key={line.title} line={line} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {actionLines.slice(3).map((line, index) => (
            <ActionCard key={line.title} line={line} index={index + 3} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ActionCard({ line, index }) {
  return (
    <Link href={line.href} className="block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="group relative rounded-3xl overflow-hidden aspect-4/5 cursor-pointer"
      >

        {/* Imagen */}
        <Image
          src={line.image}
          alt={line.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition" />

        {/* Contenido */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">

          <div className="w-14 h-14 rounded-2xl bg-[#7FFFD4]/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition">
            <line.icon className="w-7 h-7 text-[#7FFFD4]" />
          </div>

          <h3 className="text-2xl font-bold mb-2">{line.title}</h3>

          <p className="text-white/80 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
            {line.description}
          </p>
        </div>

        {/* Número */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <span className="text-white font-bold text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

      </motion.div>
    </Link>
  )
}