import React from "react"

export default function CategoryTag({ category, catId }) {
  return (
    <a
      key={catId}
      className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-slate-200 uppercase last:mr-0 mr-2 hover:bg-slate-100"
      href="#"
    >
      {category}
    </a>
  )
}
