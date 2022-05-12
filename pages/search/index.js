import React from "react"
import { useRouter } from "next/router"

import DefaultLayout from "@/layouts/defaultLayout"
import PostSearch from "@/components/Posts/PostSearch"

export default function SearchPage() {
  const router = useRouter()
  return (
    <DefaultLayout>
      <div id="content">
        <PostSearch />
      </div>
    </DefaultLayout>
  )
}
