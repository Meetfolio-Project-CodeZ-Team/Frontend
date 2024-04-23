'use client'
import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import DashboardContainer from '@/app/components/admin/containers/DashboardContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [data, setData] = useState<ResponseDashBoard | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/admin/dashboard`)
      const resData = await response.json()
      console.log('가져온 resData', resData)
      setData(resData.result)
    }
    fetchData()
  }, [])
  if (data) {
    const { aiServiceInfo, membersInfo, pointInfo, paymentInfo } = data
    console.log(
      aiServiceInfo,
      membersInfo,
      pointInfo,
      paymentInfo,
      '대쉬보드 데이터 가져오기~',
    )
    return (
      <section className="flex flex-col min-h-screen">
        <Header isAdmin={true} />
        <div className="flex w-[full] h-[auto]">
          <AdminNavContainer selected={'dashboard'} />
          <div className="flex-grow">
            <DashboardContainer DashboardInfo={data} />
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}
