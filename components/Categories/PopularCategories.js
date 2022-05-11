import React from "react"
import Link from "next/link"

export default function PopularCategories({ categories }) {
  return (
    <div>
      {categories.map((category, index) => (
        <div className="flex border-t border-gray-200 py-2 last:mb-6">
          <Link href="/categories/1">
            <a className="text-gray-500 hover:text-theme">
              Category {index + 1}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
