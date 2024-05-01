'use client'
import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import DashboardContainer from '@/app/components/admin/containers/DashboardContainer'
import BoardContainer from '@/app/components/board/containers/BoardContainer'
import BoardDetailContainer from '@/app/components/board/containers/BoardDetailContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

export default function JobBoardPage() {
  //   const [data, setData] = useState<ResponseDashBoard | null>(null)
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/dashboard`,
  //       )
  //       const resData = await response.json()
  //       setData(resData.result)
  //     }
  //     fetchData()
  //   }, [])
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header />
      <div className="flex w-[full] h-[1280px]">
        <BoardContainer />
        <div className="flex-grow bg-white shadow-md">
          <BoardDetailContainer />
        </div>
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </section>
  )
}
