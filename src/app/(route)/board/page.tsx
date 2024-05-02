'use client'
import BoardContainer from '@/app/components/board/containers/BoardContainer'
import BoardDetailContainer from '@/app/components/board/containers/BoardDetailContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

export default function JobBoardPage() {
  const [data, setData] = useState<ResponseEmploymentAll | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/employment`,
      )
      const resData = await response.json()
      console.log(resData, 'resData값')
      setData(resData.result)
    }
    fetchData()
  }, [])
  if (data) {
    return (
      <section className="flex flex-col min-h-screen relative">
        <Header nickname={data?.memberInfo.memberName} />
        <div className="flex w-[full] h-[980px]">
          <BoardContainer boardData={data?.boardListInfo} />
          <div className="flex-grow bg-white shadow-2xl">
            <BoardDetailContainer />
          </div>
        </div>
        <div className="mt-[200px]">
          <Footer />
        </div>
      </section>
    )
  }
}
