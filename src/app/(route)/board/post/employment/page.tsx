'use client'
import PostEmploymentContainer from '@/app/components/board/containers/PostEmploymentContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useSearchParams } from 'next/navigation'

export default function PostEmploymentPage() {
  const params = useSearchParams()
  const nickname = params.get('nickname')
  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={nickname || ''} />
      <div className="w-[88%] h-full py-10 mb-[200px] flex items-center justify-center">
        <PostEmploymentContainer />
      </div>
      <Footer />
    </section>
  )
}
