'use client'

import ExpFinishContainer from '@/app/components/experience/ExpFinishContainer'
import Header from '@/app/components/layout/Header'
import LoginContainer from '@/app/components/login/LoginContainer'

export default function ExpFinishPage() {
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen ">
      <div className="w-[1440px] mx-auto">
        <Header />
        <ExpFinishContainer />
      </div>
    </section>
  )
}