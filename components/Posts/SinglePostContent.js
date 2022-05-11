import Link from "next/link"
import React, { useState } from "react"
import PopularCategories from "../Categories/PopularCategories"
import ReadMore from "@/components/Posts/ReadMore"
import CategoryTag from "@/components/Categories/CategoryTag"

export default function SinglePostContent() {
  const post = {
    title: "Post Title",
    category: ["category 1", "category 2"],
  }
  const [categories, setCategories] = useState(Array.from(Array(6)))
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="rounded-lg h-128 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/4 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Phoebe Caulfield
                </h2>
                <div className="w-12 h-1 bg-theme rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Tristique senectus et netus et malesuada fames. Sed id semper
                  risus in hendrerit gravida rutrum.
                </p>
                <span className="inline-flex mt-4 justify-center sm:justify-start">
                  <a className="text-gray-500 hover:text-theme" href="#">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 hover:text-theme" href="#">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 hover:text-theme" href="#">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 hover:text-theme" href="#">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
                <h2 className="font-medium title-font mt-20 text-gray-900 text-lg">
                  Popular Categories
                </h2>
                <div className="w-12 h-1 bg-theme rounded mt-2 mb-4"></div>
                <PopularCategories categories={categories} />
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="title-font text-4xl font-medium text-gray-900 my-4">
                {post.title}
              </h1>
              <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                {post.category.map((category, catId) => (
                  <CategoryTag category={category} catId={catId} />
                ))}
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tincidunt id aliquet risus feugiat in. Vestibulum mattis
                ullamcorper velit sed ullamcorper morbi tincidunt. Integer vitae
                justo eget magna fermentum iaculis eu. Vivamus at augue eget
                arcu dictum varius duis. In aliquam sem fringilla ut morbi
                tincidunt augue. Fusce ut placerat orci nulla pellentesque. Urna
                duis convallis convallis tellus id interdum velit. Turpis
                tincidunt id aliquet risus feugiat in ante metus. Facilisi etiam
                dignissim diam quis enim lobortis. Venenatis tellus in metus
                vulputate eu. Adipiscing elit pellentesque habitant morbi
                tristique. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec. Nulla aliquet enim tortor at. Cursus metus
                aliquam eleifend mi in nulla. Tristique senectus et netus et
                malesuada fames. Sed id semper risus in hendrerit gravida
                rutrum.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Pellentesque habitant morbi tristique senectus et netus et. In
                eu mi bibendum neque egestas congue quisque. Euismod quis
                viverra nibh cras. Sed adipiscing diam donec adipiscing
                tristique risus. Pharetra vel turpis nunc eget lorem. Pharetra
                diam sit amet nisl suscipit adipiscing bibendum est ultricies.
                Egestas maecenas pharetra convallis posuere. Feugiat in
                fermentum posuere urna. Erat imperdiet sed euismod nisi.
                Adipiscing elit duis tristique sollicitudin nibh sit amet
                commodo nulla. Morbi quis commodo odio aenean sed adipiscing
                diam. Proin nibh nisl condimentum id venenatis.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Sociis natoque penatibus et magnis dis parturient. Nisi
                scelerisque eu ultrices vitae auctor eu augue ut. Viverra vitae
                congue eu consequat. Orci a scelerisque purus semper eget.
                Facilisi etiam dignissim diam quis. Egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor aliquam. Ac turpis egestas
                maecenas pharetra convallis posuere morbi. Tellus at urna
                condimentum mattis pellentesque id. Vulputate eu scelerisque
                felis imperdiet proin fermentum leo vel orci. Tristique senectus
                et netus et malesuada.
              </p>
              <ReadMore />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
