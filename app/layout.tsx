import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// Actualizar el título y la descripción
export const metadata: Metadata = {
  title: "Maria E. Flores R. | Especialista en Desarrollo de Software",
  description:
    "Especialista en Desarrollo de Software con más de 9 años de experiencia, especializada en soluciones tecnológicas para el sector salud y clínicas.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'