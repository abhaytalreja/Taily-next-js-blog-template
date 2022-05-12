import Head from "next/head"
import React from "react"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

export default function DefaultLayout({ children }) {
  return (
    <div className="font-roboto">
      <Head>
        <title>Taily - A Next JS Tailwind Blog Template (Free)</title>
        <meta
          name="description"
          content="Taily - A Next JS Tailwind Blog Template (Free)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
