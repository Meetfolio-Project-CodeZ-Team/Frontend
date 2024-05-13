'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import UserContainer from '@/app/components/admin/containers/UserContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

const userPage = () => {
  const [data, setData] = useState<ResponseUser | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user`,
      )
      const resData = await response.json()
      setData(resData.result)
      console.log(resData.result)
    }
    fetchData()
  }, [])
  if (data) {
    return (
      <section className="flex flex-col min-h-screen relative">
        <Header isAdmin={true} />
        <div className="flex w-[full] h-[auto]">
          <AdminNavContainer selected={'user'} />
          <div className="flex-grow">
            <UserContainer userInfoData={data} />
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default userPage
