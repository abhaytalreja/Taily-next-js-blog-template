import React from "react"
import Link from "next/link"
import siteConfig from "@/config/siteConfig"
import Logo from "@/components/common/Logo"
import Button from "./Button"

export default function Header() {
  return (
    <header className="text-gray-600 body-font m-4">
      <div className="md:px-24 px-4 m-auto flex justify-between">
        <Link href="/">
          <a className="flex order-first lg:order-none title-font font-medium items-center text-gray-900">
            <span className="text-xl border-b-2 border-theme">
              {siteConfig.title}
            </span>
          </a>
        </Link>
        <div className="invisible md:visible">
          <a href="/">
            <Logo />
          </a>
          {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
          {/* <Link href="/">
            <a className="absolute z-10 top-2 -ml-24">
              <img
                src="/"
                alt="Logo"
                className=""
              />
            </a>
          </Link> */}
        </div>

        <div className="">
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
