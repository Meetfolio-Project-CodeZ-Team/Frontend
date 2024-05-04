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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/detail?id=${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const resData = await response.json()
      setData(resData.result.boardInfo)
    }
    fetchData()
  }, [id])

  if (data) {
    return (
      <section className="flex flex-col items-center min-h-screen relative">
        <Header nickname={data?.memberName || ''} />
        <div className="w-[94%] h-full py-9 mb-[200px]  flex items-center justify-center">
          <PostGroupContainer isEdit={true} data={data} />
        </div>
        <Footer />
      </section>
    )
  }
}
