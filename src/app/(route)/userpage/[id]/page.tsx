'use client'
import OtherUserNav from '@/app/components/board/containers/OtherUserNav'
import OtherUserPortfolio from '@/app/components/board/containers/OtherUserPortfolio'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

export default function UserPage({ params }: { params: { id: string } }) {
  const [userInfo, setUser] = useState<memberInfo | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
    }
    fetchData()
  }, [])

  return (
    <section className="flex flex-col min-h-screen relative">
      <Header nickname={userInfo?.memberName} />
      <div className="flex w-[full] h-[980px] mb-[200px]">
        <OtherUserNav nickname={params.id} />
        <div className="flex-grow">
          <OtherUserPortfolio username={params.id} />
        </div>
      </div>
      <Footer />
    </section>
  )
}
