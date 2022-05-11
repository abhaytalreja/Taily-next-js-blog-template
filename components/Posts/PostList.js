import React, { useState } from "react"
import PostPreview from "@/components/Posts/PostPreview"
import Button from "@/components/common/Button"

export default function PostList() {
  const [posts, setPosts] = useState(Array.from(Array(9)))
  const samplePost = {
    title: "Post Title",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: ["category 1", "category 2"],
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {posts.map((post, index) => (
            <PostPreview key={index} post={samplePost} id={index} />
          ))}
          <Button
            btnType="primary"
            customClass="m-4 w-2/3"
            onClick={() => setPosts(Array.from(Array(posts.length + 9)))}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  )
}
