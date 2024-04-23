'use client'

import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { expNum } from '../../recoil/experience'
import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import ExpFinishContainer from '@/app/components/experience/ExpFinishContainer'

export default function ExperiencePage() {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const router = useRouter()

  // 페이지가 로드될 때마다 expNum 상태를 확인하고 해당 페이지로 이동합니다.
  useEffect(() => {
    router.push('../../experience')
  }, [experienceNumber, router])

  return (
    <section className="flex flex-col items-center min-h-screen ">
      <Header />
      <div className="w-[1440px] mb-10">
        {experienceNumber === 0 && <ExpInfoContainer />}
        {experienceNumber === 1 && <ExpKeywordContainer />}
        {experienceNumber === 2 && <ExpContentContainer id={''} />}
        {experienceNumber === 3 && <ExpFinishContainer />}
      </div>
    </section>
  )
}
