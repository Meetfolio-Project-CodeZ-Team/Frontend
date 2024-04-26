'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import PortfolioContainer from '@/app/components/mypage/PortfolioContainer'
import Header from '@/app/components/layout/Header'
import MyCovletDetail from '@/app/components/mypage/MyCovletCardDetail'
import MyExpList from '@/app/components/mypage/MyExpList'
import MyExpCardDetail from '@/app/components/mypage/MyExpCardDetail'

export default function MyExperiencePage() {
  
  
  return (
    <section className="flex flex-col min-h-screen">
      <Header  />
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