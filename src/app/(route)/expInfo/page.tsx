'use client'

import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'

export default function ExpInfoPage() {
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen ">
      <div className="w-[1440px] mx-auto">
        <Header />
        <ExpInfoContainer />
      </div>
    </section>
  )
}