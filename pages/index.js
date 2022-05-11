import DefaultLayout from "@/layouts/defaultLayout"
import PostList from "@/components/Posts/PostList"
import Hero from "@/components/common/Hero"

export default function Home() {
  return (
    <DefaultLayout>
      <div id="content">
        <Hero />
        <PostList />
      </div>
    </DefaultLayout>
  )
}
