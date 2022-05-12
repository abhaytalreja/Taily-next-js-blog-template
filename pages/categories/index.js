import React from "react"
import { useRouter } from "next/router"

import DefaultLayout from "@/layouts/defaultLayout"
import CategorySearch from "@/components/Categories/CategorySearch"

export default function CategoriesPage() {
  const router = useRouter()
  return (
    <DefaultLayout>
      <div id="content">
        <CategorySearch />
      </div>
    </DefaultLayout>
  )
}
