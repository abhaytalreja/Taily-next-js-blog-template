import React from "react"
import DefaultLayout from "@/layouts/defaultLayout"
import PostList from "@/components/Posts/PostList"

export default function index() {
  return (
    <DefaultLayout>
      <div id="content">
        <PostList />
      </div>
    </DefaultLayout>
  )
}
