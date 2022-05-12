import React from "react"
import siteConfig from "@/config/siteConfig"
import Button from "@/components/common/Button"

export default function Hero() {
  const bgImage = "https://source.unsplash.com/C6oPXOatFD8"
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), 
url(${bgImage})`,
  }
  return (
    <section
      className="text-white body-font bg-cover bg-center relative overflow-hidden py-12 sm:py-24"
      style={backgroundStyle}
    >
      <div className="container mx-auto flex px-5 py-4 sm:py-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col mb-4 items-center text-center">
          <h1 className="title-font text-2xl sm:text-3xl mb-4 font-bold text-white p-2 border-b-2 border-theme transition duration-500 ease-in">
            {siteConfig.header}
          </h1>
          <p className="mb-2 leading-relaxed">
            Let's create your new Blog using {siteConfig.title}!
          </p>
          <p className="mb-8 leading-relaxed text-xs w-2/3 sm:w-2/3 text-gray-100">
            <a href="https://tailwind.com" target="_blank" title="Tailwind">
              Tailwind
            </a>
            {", "}
            <a href="https://nextjs.org/" target="_blank" title="Next JS">
              Next JS
            </a>{" "}
            (React JS) are powerful tools for you to get started{" "}
          </p>
          <div className="flex sm:w-2/3 w-full justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-white sr-only"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                placeholder="Email"
                name="hero-field"
                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-teal-200 focus:border-theme text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Button btnType="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
