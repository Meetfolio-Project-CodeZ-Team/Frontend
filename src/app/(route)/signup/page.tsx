'use client'

import Header from '@/app/components/layout/Header'
import SignupContainer from '@/app/components/signup/SignupContainer'

export default function SignupPage() {
  return (
    <section className="flex flex-col items-center w-[1440px] mx-auto min-h-screen">
      <div className="w-[1440px] mx-auto">
        <Header />
        <SignupContainer />
      </div>
    </section>
  )
}
