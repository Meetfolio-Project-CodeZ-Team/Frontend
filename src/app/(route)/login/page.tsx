'use client'

import LoginContainer from '@/app/components/login/LoginContainer'

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-black">
      <div className=" w-[1440px] mx-auto">
        <div className="w-[100%] mx-auto">
          <div>
            <LoginContainer />
          </div>
        </div>
      </div>
    </section>
  )
}
