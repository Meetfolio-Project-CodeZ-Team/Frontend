'use client'

import Header from '@/app/components/layout/Header'
import Completed from '@/app/components/signup/Complete'

export default function OnBoardPage() {
  return (
    <section className="flex flex-col items-center min-h-screen">
        <Header />
      <div className="w-[1440px] mx-auto">
        <Completed />
      </div>
    </section>
  )
}
