'use client'
import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import DashboardContainer from '@/app/components/admin/containers/DashboardContainer'
import BoardContainer from '@/app/components/board/containers/BoardContainer'
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
      <div className="flex w-[full] mb-[240px] h-[1280px]">
        <BoardContainer />
        <div className="flex-grow"></div>
      </div>
      <Footer />
    </section>
  )
}
