'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import BoardContainer from '@/app/components/admin/containers/BoardContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

const boardPage = () => {
  const [boardData, setBoardData] = useState<ResponseBoardData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board`,
      )
      const resData = await response.json()
      setBoardData(resData?.result?.boardInfo)
    }
    fetchData()
  }, [])
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header isAdmin={true} />
      <div className="flex w-[full] mb-[132px]">
        <AdminNavContainer selected={'board'} />
        <div className="flex-grow">
          {boardData && <BoardContainer boardList={boardData} />}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default boardPage
