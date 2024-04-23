'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import PortfolioContainer from '@/app/components/mypage/PortfolioContainer'
import Header from '@/app/components/layout/Header'

export default function UserMyPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="flex w-[full] h-[980px]">
        <UserNavContainer selected={'portfolio'} />
        <div className="flex-grow">
          <PortfolioContainer />
        </div>
      </div>
    </section>
  )
}
