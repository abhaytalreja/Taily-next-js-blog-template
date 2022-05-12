import React, { useState } from "react"
import DefaultLayout from "@/layouts/defaultLayout"
import PostSearchResultsItem from "@/components/Posts/PostSearchResultsItem"
import Button from "@/components/common/Button"
import { useRouter } from "next/router"

export default function SinglePost() {
  const [posts, setPosts] = useState(Array.from(Array(5)))
  const samplePost = {
    title: "Post Title",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: ["category 1", "category 2"],
  }
  const router = useRouter()
  const { slug } = router.query
  return (
    <DefaultLayout>
      <div id="content">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-12 mx-auto">
            <h1 className="text-2xl m-4 font-bold mb-12">
              Post Results for Category - {slug}
            </h1>
            <div className="-my-8 divide-y-2 divide-gray-100">
              {posts.map((post, index) => (
                <PostSearchResultsItem post={samplePost} key={index} />
              ))}
            </div>
            <div className="w-full text-center flex justify-center mt-12">
              <div className="mx-2">
                <Button
                  btnType="outline"
                  customClass="inline-flex"
                  disabled={true}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-8 mr-1 py-1"
                    viewBox="0 0 24 24"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Previous
                </Button>
              </div>
              <div className="mx-2">
                <Button btnType="outline" customClass="inline-flex">
                  Next{" "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-8 ml-1 py-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
