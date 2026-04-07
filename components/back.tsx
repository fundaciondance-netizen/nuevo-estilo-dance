"use client"

export function BackgroundBreakSection() {
  return (
    <section className="relative w-full h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/hero_m.webp')" }}
      />
    </section>
  )
}