'use client'
import OtherUserNav from '@/app/components/board/containers/OtherUserNav'
import OtherUserPortfolio from '@/app/components/board/containers/OtherUserPortfolio'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'


export default function UserPage({ params }: { params: { id: string } }) {
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [otherUserInfo, setOtherUser] = useState<{ profile: string } | null>(null)
  const [covletCards, setCovletCards] = useState<CovletCard[]>([])
  const [expCards, setExpCards] = useState<ExpCard[]>([])
  const [isExp, setIsExp] = useState(false)
  const path = isExp ? 'expcard' : 'coverletter'

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/userpage/${path}?id=${params.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        console.log(data, '가져온 자소서 데이터')
        console.log('프로필', data.result?.profile)

        if (data.isSuccess && data.result?.profile) {
          setOtherUser({
            profile: data.result.profile,
          })

          isExp
            ? setExpCards(data.result.experienceCardInfo.experienceCardItems)
            : setCovletCards(data.result.coverLetterInfo.coverLetterInfo)
        } else {
          console.error('Failed to fetch other user data:', data.message)
        }
      } catch (error) {
        console.error('Error fetching other user data:', error)
      }
    }
    getData()
  }, [isExp, path, params.id])

  return (
    <section className="flex flex-col min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="flex w-[full] h-[980px] mb-[200px]">
        <OtherUserNav nickname={params.id} profile={otherUserInfo?.profile}/>
        <div className="flex-grow">
          <OtherUserPortfolio username={params.id} />
        </div>
      </div>
      <Footer />
    </section>
  )
}
