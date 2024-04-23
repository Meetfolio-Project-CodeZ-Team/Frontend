'use client'

import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { covletNum } from '../../recoil/coverletter'
import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import CovletAiFeed from '@/app/components/coverletter/CovletAiFeed'
import { userState } from '@/app/recoil/signUp'

export default function CovletMainPage() {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [userInfo, setUser] = useRecoilState(userState)
  const router = useRouter()

  // 페이지가 로드될 때마다 expNum 상태를 확인하고 해당 페이지로 이동합니다.
  useEffect(() => {
    router.push('../../coverletter')
  }, [covletNumber, router])
  return (
    <section className="flex flex-col items-center min-h-screen ">
      <Header profile={userInfo.memberName}/>
      <div className="w-[1440px] mb-10">
        {covletNumber === 0 && <CovletMain />}
        {covletNumber === 1 && <CovletSave />}
        {/* {covletNumber === 2 && <ExpContentContainer />} */}
      </div>
    </section>
  )
}
