'use client'

import Header from '@/app/components/layout/Header'

export default function MainPage() {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <div className=" w-[1440px] mx-auto">
        <div className="w-[100%] mx-auto">
          <Header />
        </div>
      </div>
    </section>
  )
}
