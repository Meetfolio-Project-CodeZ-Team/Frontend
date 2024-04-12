'use client'

import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'

export default function ExpKeywordPage() {
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen ">
      <div className="w-[1440px] mx-auto">
        <Header />
        <ExpKeywordContainer />
      </div>
    </section>
  )
}