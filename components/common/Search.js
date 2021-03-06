import React, { useState } from "react"
import { useRouter } from "next/router"

export default function Search() {
  const router = useRouter()
  const queryParam = router.query.q ? router.query.q : ""
  const [query, setQuery] = useState(queryParam)
  const submitSearch = (e) => {
    e.preventDefault()
    router.push(`/search?q=${query}`)
  }
  return (
    <div className="inline-flex items-center justify-center bg-white mr-4 w-full">
      <form onSubmit={submitSearch}>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            value={query}
            className="py-2 text-sm bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 border-2 focus:border-theme"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}
