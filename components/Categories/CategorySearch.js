import React, { useState } from "react"
import CategorySearchResultsItem from "@/components/Categories/CategorySearchResultsItem"
import Search from "../common/Search"
import Button from "../common/Button"

export default function CategorySearch() {
  const [categories, setCategories] = useState(Array.from(Array(10)))
  return (
    <div className="container px-5 py-8 mx-auto">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-2xl m-4 font-bold mb-12">Search Results</h1>
          <div className="my-8">
            {categories.map((category, index) => (
              <CategorySearchResultsItem category={category} key={index} />
            ))}
          </div>
          <div className="w-full text-center flex justify-center">
            <div className="mx-2">
              <Button
                btnType="outline"
                customClass="inline-flex"
                disabled={true}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-8 mr-1 py-1"
                  viewBox="0 0 24 24"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Previous
              </Button>
            </div>
            <div className="mx-2">
              <Button btnType="outline" customClass="inline-flex">
                Next{" "}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-8 ml-1 py-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
