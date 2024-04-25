'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import PortfolioContainer from '@/app/components/mypage/PortfolioContainer'
import Header from '@/app/components/layout/Header'
import { userState } from '@/app/recoil/signUp'
import { useRecoilState } from 'recoil'

export default function UserMyPage() {
  const [userInfo, setUser] = useRecoilState(userState)

  return (
    <section className="flex flex-col min-h-screen">
      <Header profile={userInfo.memberName} />
      <div className="flex w-[full] h-[980px]">
        <UserNavContainer selected={'portfolio'} />
        <div className="flex-grow">
          <PortfolioContainer />
        </div>
      </div>
    </section>
  )
}
