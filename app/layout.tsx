import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dharun | Videography Services",
  description:
    "Professional video creator specializing in digital marketing, videography, social media management, event coverage, and personal branding. Transform your brand with compelling visual storytelling.",
  keywords:
    "video creator, videography, digital marketing, social media management, event videography, personal branding, content creation",
  authors: [{ name: "Video Creator Portfolio" }],
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/vidz logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        // This is the dark mode icon
        url: "/vidz logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/vidz logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/vidz logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
