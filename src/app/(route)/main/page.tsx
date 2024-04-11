'use client'

import Header from '@/app/components/layout/Header'
import MainContainer from '@/app/components/main/MainContainer'

export default function MainPage() {
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen border-slate-600">
      <div className="w-[1440px] mx-auto">
        <Header />
        <MainContainer />
      </div>
    </section>
  )
}
