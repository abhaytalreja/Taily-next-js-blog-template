import React from "react"
import CategoryTag from "../Categories/CategoryTag"

export default function PostSearchResultsItem({ post }) {
  return (
    <div className="py-4 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 mx-4 flex-shrink-0 flex flex-col">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/350x242"
          alt="blog"
        />
        <h2 className="tracking-widest text-xs title-font font-medium mb-1 flex mt-2">
          {post.category.map((category, catId) => (
            <CategoryTag category={category} key={catId} />
          ))}
        </h2>
        <span className="mt-1 text-gray-500 text-sm">12 June 2022</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          Bitters hashtag waistcoat fashion axe chia unicorn
        </h2>
        <p className="leading-relaxed">
          Glossier echo park pug, church-key sartorial biodiesel vexillologist
          pop-up snackwave ramps cornhole.
        </p>
        <a className="text-theme hover:text-theme-hover inline-flex items-center mt-4">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
