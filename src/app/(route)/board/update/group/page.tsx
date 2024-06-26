'use client'
import PostGroupContainer from '@/app/components/board/containers/PostGroupContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PatchGroupPage() {
  const params = useSearchParams()
  const id = params.get('id')
  const [data, setData] = useState<BoardInfoTypes | null>(null)
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
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/detail?id=${id}`,
      )
      const resData = await response.json()
      setData(resData.result.boardInfo)
    }
    fetchData()
  }, [id])

  if (data) {
    return (
      <section className="flex flex-col items-center min-h-screen relative">
        <Header nickname={data?.memberName || ''} profile={user?.profile} />
        <div className="w-[88%] h-full py-10 mb-[200px] flex items-center justify-center">
          <PostGroupContainer isEdit={true} data={data} />
        </div>
        <Footer />
      </section>
    )
  }
}
