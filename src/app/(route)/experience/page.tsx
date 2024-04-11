'use client'

import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExperienceContainer from '@/app/components/experience/ExperienceContainer'

export default function ExperiencePage() {
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen border-b border-slate-600">
      <div className="w-[1440px] mx-auto">
        <Header />
        <ExperienceContainer />
      </div>
    </section>
  )
}