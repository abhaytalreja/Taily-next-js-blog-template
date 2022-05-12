import React from "react"
import Link from "next/link"
import siteConfig from "@/config/siteConfig"
import Logo from "@/components/common/Logo"
import Button from "@/components/common/Button"
import { useRouter } from "next/router"

import Search from "@/components/common/Search"

export default function Header() {
  const router = useRouter()
  return (
    <header className="text-gray-600 body-font p-4 border-b-4 border-theme">
      <div className="md:px-24 px-4 m-auto flex justify-between">
        <div className="flex">
          <Link href="/">
            <a className="mx-2">
              <Logo />
            </a>
          </Link>
          <Link href="/">
            <a className="flex order-first lg:order-none title-font font-medium items-center text-gray-900">
              <span className="text-3xl border-b-2 border-theme">
                {siteConfig.title}
              </span>
            </a>
          </Link>
        </div>
        <div className="flex w-1/3">
          {router.pathname !== "/search" && <Search />}
          <Button btnType="default" customClass="inline-flex">
            Categories
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-8 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
