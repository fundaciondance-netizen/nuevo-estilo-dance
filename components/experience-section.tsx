"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const experiences = [
  {
    title: "Shows y Eventos",
    image: "/images/experience/shows-e-new.webp",
    description: "Experiencias escénicas diseñadas para impactar y entretener.",
    features: [
      "Shows temáticos (Mario, Cazafantasmas)",
      "Shows urbanos",
      "Flash mob",
      "Eventos especiales (15, bodas)"
    ]
  },
  {
    title: "Formación en Danza",
    image: "/images/experience/formacion-e.webp",
    description: "Desarrolla tu talento con formación profesional en múltiples estilos.",
    features: [
      "Ritmos urbanos",
      "Danza contemporánea",
      "Salsa choke",
      "Ritmos tradicionales",
      "Clases personalizadas"
    ]
  },
  {
    title: "Producción y Gestión",
    image: "/images/experience/gest-e.webp",
    description: "Impulsamos proyectos artísticos y sociales con un impacto real, acompañando cada etapa desde la idea inicial hasta la ejecución completa.",
    features: [
      "Producción audiovisual",
      "Intervención psicosocial",
    ]
  },
  {
    title: "Turismo y Experiencias",
    image: "/images/experience/turism-e.webp",
    description: "Conecta cultura, territorio y danza en experiencias únicas.",
    features: [
      "Experiencias culturales",
      "Integración artística",
      "Actividades grupales"
    ]
  },
  
]

export function ExperienceSection() {
  return (
    <section className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#7FFFD4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#7FFFD4]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[#7FFFD4] font-semibold text-sm uppercase tracking-wider mb-4">
              La Experiencia
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Todo lo que necesitas para
              <span className="text-[#7FFFD4]"> crecer</span>
            </h2>

            <p className="text-white/70 text-lg">
              Una experiencia integral que combina formación, eventos y desarrollo artístico.
            </p>
          </div>

          <Link
            href="/servicios"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#f97f09] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d35121]"
          >
            Explorar Todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#7FFFD4]/40 transition-all duration-300"
            >
              
              <div className="flex flex-col lg:flex-row h-full">

                {/* Imagen FULL */}
                <div className="relative w-full lg:w-2/5 h-56 lg:h-full">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/70 hidden lg:block" />
                </div>

                {/* Contenido */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#7FFFD4] text-sm font-medium">0{index + 1}</span>
                      <div className="w-8 h-px bg-[#7FFFD4]/50" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>

                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {exp.features.map((feature) => (
                      <span 
                        key={feature}
                        className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        <Check className="w-3 h-3 text-[#7FFFD4]" />
                        {feature}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-linear-to-r from-[#7FFFD4]/10 to-[#7FFFD4]/5 border border-white/10 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Listo para transformar tu vida a través del movimiento?
          </h3>

          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Únete a una comunidad que vive la danza de verdad.
          </p>

          <Link
            href="https://wa.me/573186234832?text=Quiero%20saber%20mas%20sobre%20tu%20academia"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Comienza Tu Viaje
          </Link>
        </div>

      </div>
    </section>
  )
}