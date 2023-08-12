"use client"
import React from "react"
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/Footer"
import { ToastContainer } from "react-toastify"
import { usePathname } from "next/navigation"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const location = usePathname()
  // Check if the current pathname is "/guess"
  const isGuessPage = location === "/guess"
  return (
    <html lang="en">
      <head>
        {isGuessPage && <style>{`html { font-size: 62.5%; }`}</style>}
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
