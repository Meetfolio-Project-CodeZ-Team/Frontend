'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { expNum } from '../../recoil/experience'
import Header from '@/app/components/layout/Header'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import ExpFinishContainer from '@/app/components/experience/ExpFinishContainer'
import Footer from '@/app/components/layout/Footer'

export default function ExperiencePage() {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [userInfo, setUser] = useState<memberInfo | null>(null)

  const router = useRouter()

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
    // 첫 로드시에만 experienceNumber를 0으로 설정
    setExperienceNumber(0);
  }, []); 

  // useEffect(() => {
  //   router.push('../../experience')
  // }, [experienceNumber, router])

  return (
    <section className="flex flex-col items-center min-h-screen ">
      <Header nickname={userInfo?.memberName} />
      <div className="w-[1440px] mb-10">
        {experienceNumber === 0 && <ExpInfoContainer />}
        {experienceNumber === 1 && <ExpKeywordContainer />}
        {experienceNumber === 2 && <ExpContentContainer isEdit={false}/>}
        {experienceNumber === 3 && <ExpFinishContainer />}
      </div>
      <Footer />
    </section>
  )
}
