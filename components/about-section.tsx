"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Zap, Users, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Cada movimiento nace del corazón y la dedicación por el arte urbano."
  },
  {
    icon: Zap,
    title: "Resistencia",
    description: "Superamos límites y construimos fortaleza física y mental."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Somos familia. Crecemos juntos, nos apoyamos y celebramos."
  },
  {
    icon: TrendingUp,
    title: "Evolución",
    description: "Aprendizaje continuo y transformación personal constante."
  },
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white" id="nosotros">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#f97f09]/5 to-transparent -z-10" />
      <div className="absolute -top-40 -left-40 w-72 sm:w-80 h-72 sm:h-80 bg-[#0f766e]/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            className="relative order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-85 sm:w-[320px] md:w-95 lg:w-105 aspect-4/5">
              <Image
                src="/images/about-us.png"
                alt="Instructores enseñando danza urbana"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#f97f09] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Quiénes Somos
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Más que una academia,
              <br />
              <span className="text-[#d35121]">somos movimiento</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Nuevo Estilo Dance es una fundación dedicada a transformar vidas a través de la danza urbana. 
              Creemos en el poder del movimiento para construir comunidad, desarrollar habilidades y crear 
              oportunidades para jóvenes apasionados por el arte urbano.
            </p>

            <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 leading-relaxed">
              Nuestra filosofía se basa en cuatro pilares fundamentales que guían cada clase, 
              cada taller y cada evento que organizamos:
            </p>

            {/* VALUES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 sm:p-5 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#f97f09]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f97f09]/20 transition-colors">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d35121]" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-black mb-1">
                        {value.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {value.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}