'use client'

import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Completed from '@/app/components/signup/Complete'

export default function OnBoardPage() {
  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header />
      <div className="w-[1440px] mx-auto min-h-screen mb-[52px]">
        <Completed />
      </div>
      <Footer />
    </section>
  )
}
