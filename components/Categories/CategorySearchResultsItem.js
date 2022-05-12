import React from "react"
import Link from "next/link"

export default function CategorySearchResultsItem({ categories }) {
  return (
    <div className="flex border-b border-gray-200 py-2 last:mb-6 justify-between">
      <Link href="/categories/1">
        <a className="text-gray-500 hover:text-theme">category</a>
      </Link>
      <span class="inline-block rounded-full text-gray-600 bg-gray-100 px-2 py-1 text-xs font-bold mr-3">
        20
      </span>
    </div>
  )
}
