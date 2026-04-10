import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuevoestilodance.com"),

  title: "Academia de danza urbana en Cali | Nuevo Estilo Dance",
  description:
    "Academia de danza urbana en Cali para niños, jóvenes y adultos. Vive clases de baile que transforman tu confianza, disciplina y expresión.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "academia de danza en Cali",
    "danza urbana en Cali",
    "clases de baile en Cali",
    "academia de baile en Cali",
    "escuela de danza urbana Cali",
    "aprender a bailar en Cali",
  ],

  authors: [{ name: "Nuevo Estilo Dance" }],
  creator: "Nuevo Estilo Dance",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Academia de danza urbana en Cali | Nuevo Estilo Dance",
    description:
      "Transforma tu mente y tu cuerpo con clases de danza urbana en Cali. Vive la experiencia.",
    url: "https://www.nuevoestilodance.com",
    siteName: "Nuevo Estilo Dance",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.nuevoestilodance.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Nuevo Estilo Dance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Academia de danza urbana en Cali | Nuevo Estilo Dance",
    description:
      "Transforma tu mente y tu cuerpo con clases de danza urbana en Cali. Vive la experiencia.",
    images: ["https://www.nuevoestilodance.com/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        
        {/* 🔥 SCHEMA SEO COMPLETO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DanceSchool",
              name: "Nuevo Estilo Dance",
              url: "https://www.nuevoestilodance.com",
              logo: "https://www.nuevoestilodance.com/Logo.png",
              image: "https://www.nuevoestilodance.com/Logo.png",
              description:
                "Academia de danza urbana en Cali para niños, jóvenes y adultos.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cali",
                addressCountry: "CO",
              },
              sameAs: [
                "https://instagram.com/nuevoestilodance",
                "https://tiktok.com/@nuevoestilodance2026",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}