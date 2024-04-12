'use client'

import Header from '@/app/components/layout/Header'
import IntroudeContainer from '@/app/components/main/containers/IntroduceContainer'
import MainContainer from '@/app/components/main/containers/MainContainer'

export default function MainPage() {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="w-[1440px] mb-10">
        <MainContainer />
      </div>
      <IntroudeContainer />
    </section>
  )
}
