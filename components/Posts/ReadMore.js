import React, { useState } from "react"
import PostPreview from "@/components/Posts/PostPreview"
import Button from "@/components/common/Button"

export default function ReadMore() {
  const [posts, setPosts] = useState(Array.from(Array(3)))
  const samplePost = {
    title: "Post Title",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: ["category 1", "category 2"],
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-2 text-gray-900 text-lg">
              Other Stories
            </h2>
            <div className="w-12 h-1 bg-theme rounded mt-2 mb-4"></div>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {posts.map((post, index) => (
              <PostPreview
                key={index}
                post={samplePost}
                id={index}
                isReadMore={true}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
