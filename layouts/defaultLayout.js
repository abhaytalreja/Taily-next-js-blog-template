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
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
