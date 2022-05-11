import React from "react"
import SinglePostContent from "@/components/Posts/SinglePostContent"
import DefaultLayout from "@/layouts/defaultLayout"

export default function SinglePost() {
  return (
    <DefaultLayout>
      <div id="content">
        <SinglePostContent />
      </div>
    </DefaultLayout>
  )
}
