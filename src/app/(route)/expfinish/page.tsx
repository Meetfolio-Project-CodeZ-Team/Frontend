'use client'

import ExpFinishContainer from '@/app/components/experience/ExpFinishContainer'
import Header from '@/app/components/layout/Header'
import LoginContainer from '@/app/components/login/LoginContainer'

export default function ExpFinishPage() {
  return (
    <section className="flex flex-col items-center min-h-screen ">
      <Header />
      <div className="w-[1440px] mb-10">
        <ExpFinishContainer />
      </div>
    </section>
    //   <section className="flex flex-col items-center min-h-screen">
    //   <Header />
    //   <div className="w-[1440px] mb-10">
    //     <MainContainer />
    //   </div>
    //   <IntroudeContainer />
    // </section>
  )
}
