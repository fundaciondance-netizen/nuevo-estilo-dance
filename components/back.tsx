"use client";

export function BackgroundBreakSection() {
  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center md:bg-fixed sm:bg-center"
        style={{ backgroundImage: "url('/images/hero_m.webp')" }}
      />

      <div className="absolute inset-0 bg-black/15" />
    </section>
  );
}