'use client'

import Header from '@/app/components/layout/Header'
import SignupContainer from '@/app/components/signup/SignupContainer'

export default function SignupPage() {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="w-[1440px] mx-auto">
        <SignupContainer />
      </div>
    </section>
  )
}
