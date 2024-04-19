'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import UserContainer from '@/app/components/admin/containers/UserContainer'
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
      console.log('가져온 resData', resData)

      setData(resData.result)
    }
    fetchData()
  }, [])
  if (data) {
    console.log(data, '대쉬보드 데이터 가져오기~')
    return (
      <section className="flex flex-col min-h-screen">
        <Header isAdmin={true} />
        <div className="flex w-[full] h-[980px]">
          <AdminNavContainer selected={'user'} />
          <div className="flex-grow">
            <UserContainer userInfoData={data} />
          </div>
        </div>
      </section>
    )
  }
}

export default userPage
