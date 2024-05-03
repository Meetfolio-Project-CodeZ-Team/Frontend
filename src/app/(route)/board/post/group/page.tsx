import PostContainer from '@/app/components/board/containers/PostContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'

export default function PostGroupPage() {
  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header />
      <div className="w-[94%] h-full py-9 mb-[200px]  flex items-center justify-center">
        <PostContainer />
      </div>
      <Footer />
    </section>
  )
}
