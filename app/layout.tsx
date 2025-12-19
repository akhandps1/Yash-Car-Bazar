import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yash Car Bazar - Best Used Cars in Gorakhpur",
  description:
    "Trusted local used car dealer in Gorakhpur. Buy quality second-hand cars at the best prices with complete transparency and excellent service.",
  keywords:
    "used cars Gorakhpur, second hand cars, Yash Car Bazar, car dealer Gorakhpur",
  icons: {
    icon: "/favicon.ico", // single favicon for Yash Car Bazar
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.className} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
