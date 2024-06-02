'use client'
import PostEmploymentContainer from '@/app/components/board/containers/PostEmploymentContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PostEmploymentPage() {
  const params = useSearchParams()
  const nickname = params.get('nickname')
  const [user, setUser] = useState<memberInfo | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
    }
    getUser()
  }, [nickname])
  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={nickname || ''} profile={user?.profile} />
      <div className="w-[88%] h-full py-10 mb-[200px] flex items-center justify-center">
        <PostEmploymentContainer />
      </div>
      <Footer />
    </section>
  )
}
