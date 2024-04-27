'use client'

import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import SignupContainer from '@/app/components/signup/containers/SignupContainer'

export default function SignupPage() {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="w-[1440px] mx-auto mb-10">
        <SignupContainer />
      </div>
      <Footer />
    </section>
  )
}
