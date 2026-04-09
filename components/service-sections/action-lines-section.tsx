"use client"

import Image from "next/image"
import { motion, easeOut } from "framer-motion"

const actionLines = [
  {
    id: "formacion",
    title: "Formación",
    subtitle: "Educación y desarrollo",
    description:
      "Programas educativos integrales que forman a la próxima generación de artistas y gestores culturales.",
    images: ["/images/services-images/formation_1.webp", "/images/services-images/formation_2.webp"],
    layout: "left-large",
  },
  {
    id: "circulacion",
    title: "Circulación",
    subtitle: "Difusión y alcance",
    description:
      "Promovemos la presencia de artistas y compañías en festivales, teatros y espacios culturales.",
    images: ["/images/services-images/circulacion_1.webp", "/images/services-images/circulacion_2.webp"],
    layout: "right-large",
  },
  {
    id: "creacion",
    title: "Creación",
    subtitle: "Innovación artística",
    description:
      "Acompañamos procesos creativos y desarrollo de nuevas obras coreográficas.",
    images: ["/images/services-images/creacion_1.webp", "/images/services-images/creacion_2.webp"],
    layout: "stacked",
  },
  {
    id: "emprendimiento",
    title: "Emprendimiento",
    subtitle: "Sostenibilidad cultural",
    description:
      "Asesoramos proyectos culturales para convertir ideas en negocios sostenibles.",
    images: ["/images/services-images/emprendimiento_1.webp", "/images/services-images/emprendimiento_2.webp"],
    layout: "diagonal",
  },
  {
    id: "turismo",
    title: "Turismo",
    subtitle: "Experiencias inmersivas",
    description:
      "Diseñamos experiencias culturales que conectan visitantes con el arte local.",
    images: ["/images/services-images/turismo_2.webp", "/images/services-images/turismo_1.webp"],
    layout: "overlap",
  },
]

// 🔥 Animaciones
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

function ActionLineCard({ line, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={item}
      className={`grid gap-8 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 ${
        isEven ? "" : "lg:direction-rtl"
      }`}
    >
      {/* Content */}
      <div className={`flex flex-col justify-center ${isEven ? "lg:pr-8" : "lg:pl-8 lg:order-2"}`}>
        <span className="inline-block text-[#f97f09] font-semibold text-sm uppercase tracking-wider mb-2">
          {String(index + 1).padStart(2, "0")} — {line.subtitle}
        </span>

        <h3 className="mb-6 text-4xl font-light md:text-5xl lg:text-6xl text-black">
          {line.title}
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed">
          {line.description}
        </p>

        {/* Línea decorativa */}
        <div className="mt-6 h-0.5 w-16 bg-[#f97f09] transition-all duration-300 hover:w-32" />
      </div>

      {/* Images */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <ImageLayout layout={line.layout} images={line.images} title={line.title} />
      </div>
    </motion.div>
  )
}

function ImageLayout({ layout, images, title }) {
  const baseImg =
    "object-cover transition-all duration-700 hover:scale-105 hover:brightness-110"

  switch (layout) {
    case "left-large":
      return (
        <div className="grid grid-cols-5 gap-4 h-100 md:h-125">
          <div className="relative col-span-3 overflow-hidden rounded-xl">
            <Image src={images[0]} alt={title} fill className={baseImg} />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-xl">
            <Image src={images[1]} alt={title} fill className={baseImg} />
          </div>
        </div>
      )

    case "right-large":
      return (
        <div className="grid grid-cols-3 gap-4 h-100 md:h-125">
          <div className="relative overflow-hidden rounded-xl">
            <Image src={images[0]} alt={title} fill className={baseImg} />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-xl">
            <Image src={images[1]} alt={title} fill className={baseImg} />
          </div>
        </div>
      )

    case "stacked":
      return (
        <div className="relative h-100 md:h-125">
          <div className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden rounded-xl">
            <Image src={images[0]} alt={title} fill className={baseImg} />
          </div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 overflow-hidden rounded-xl border-4 border-white">
            <Image src={images[1]} alt={title} fill className={baseImg} />
          </div>
        </div>
      )

    case "diagonal":
      return (
        <div className="grid grid-cols-2 gap-4 h-100 md:h-125">
          <div className="relative overflow-hidden rounded-xl translate-y-8">
            <Image src={images[0]} alt={title} fill className={baseImg} />
          </div>
          <div className="relative overflow-hidden rounded-xl -translate-y-8">
            <Image src={images[1]} alt={title} fill className={baseImg} />
          </div>
        </div>
      )

    case "overlap":
      return (
        <div className="relative h-100 md:h-125">
          <div className="absolute top-8 left-0 w-2/3 h-[85%] overflow-hidden rounded-xl">
            <Image src={images[0]} alt={title} fill className={baseImg} />
          </div>
          <div className="absolute bottom-8 right-0 w-1/2 h-2/3 overflow-hidden rounded-xl border-4 border-white">
            <Image src={images[1]} alt={title} fill className={baseImg} />
          </div>
        </div>
      )

    default:
      return null
  }
}

export function ActionLinesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="inline-block text-[#f97f09] font-semibold text-sm uppercase tracking-wider mb-4">
            Líneas de Acción
          </span>

          <h2 className="mx-auto max-w-3xl text-4xl font-light md:text-5xl lg:text-6xl text-black">
            Cinco ejes que guían nuestro trabajo
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="divide-y divide-gray-200"
        >
          {actionLines.map((line, index) => (
            <ActionLineCard key={line.id} line={line} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}