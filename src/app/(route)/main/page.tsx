'use client'

import Header from '@/app/components/layout/Header'
import IntroudeContainer from '@/app/components/main/containers/IntroduceContainer'
import MainContainer from '@/app/components/main/containers/MainContainer'

export default function MainPage() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen">
      <div className="w-[1440px] mb-10">
        <Header />
        <MainContainer />
      </div>
      <IntroudeContainer />
    </section>
  )
}
