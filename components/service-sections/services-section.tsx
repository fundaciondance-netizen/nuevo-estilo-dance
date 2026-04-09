"use client"

import { useState } from "react"
import { motion, easeOut } from "framer-motion"
import { Music, GraduationCap, Briefcase, Plane } from "lucide-react"

const services = [
  {
    id: "shows",
    title: "Shows y Eventos",
    description:
      "Producción integral de espectáculos de danza, desde la conceptualización hasta la puesta en escena. Creamos experiencias memorables para todo tipo de eventos.",
    icon: Music,
  },
  {
    id: "formacion",
    title: "Formación en Danza",
    description:
      "Programas de formación profesional y talleres especializados para bailarines de todos los niveles.",
    icon: GraduationCap,
  },
  {
    id: "produccion",
    title: "Producción y Gestión",
    description:
      "Gestión cultural y producción artística desde la idea hasta la ejecución.",
    icon: Briefcase,
  },
  {
    id: "turismo",
    title: "Turismo y Experiencias",
    description:
      "Experiencias culturales únicas combinando danza, tradición y turismo.",
    icon: Plane,
  },
]

// 🔥 Animaciones
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

export function ServicesSection() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-block text-[#f97f09] font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="max-w-2xl text-4xl font-bold md:text-5xl lg:text-6xl text-black">
            Impulsamos el arte a través de la gestión profesional
          </h2>
        </motion.div>

        {/* Grid con stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon
            const isActive = activeService === service.id

            return (
              <motion.div
                key={service.id}
                variants={item}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`
                  group relative rounded-2xl border border-gray-200 bg-white p-8 md:p-12
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  ${isActive ? "shadow-xl -translate-y-2" : ""}
                `}
              >
                {/* Icon */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="
                    flex h-12 w-12 items-center justify-center rounded-xl
                    bg-[#7FFFD4]/20
                    transition-all duration-300
                    group-hover:bg-[#f97f09]
                  ">
                    <Icon className="h-5 w-5 text-[#f97f09] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    {String(services.indexOf(service) + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-light md:text-3xl text-black group-hover:text-[#d35121] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Línea animada */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f97f09] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}