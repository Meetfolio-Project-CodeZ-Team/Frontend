'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import PortfolioContainer from '@/app/components/mypage/PortfolioContainer'
import Header from '@/app/components/layout/Header'
import MyExpList from '@/app/components/mypage/MyExpList'
import MyExpCardDetail from '@/app/components/mypage/MyExpCardDetail'
import { userState } from '@/app/recoil/signUp'
import { useRecoilState } from 'recoil'

export default function MyExperiencePage() {
  const [userInfo, setUser] = useRecoilState(userState)

  return (
    <section className="flex flex-col min-h-screen">
      <Header profile={userInfo.memberName}/>
      <div className="flex w-[full] h-[980px]">
        <UserNavContainer selected={'portfolio'} />
        <div className="flex-grow">
          {/* <PortfolioContainer /> */}
          {/* <MyCovletDetail /> */}
          <MyExpList />
          {/* <MyExpCardDetail/> */}
        </div>
      </div>
    </section>
  )
}
