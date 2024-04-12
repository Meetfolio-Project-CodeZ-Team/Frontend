'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import Header from '@/app/components/layout/Header'
import IntroudeContainer from '@/app/components/main/containers/IntroduceContainer'
import MainContainer from '@/app/components/main/containers/MainContainer'

export default function AdminPage() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen">
      <div className="w-[1440px] mb-10">
        <Header isAdmin={true} />
        <div className="flex">
          <AdminNavContainer />
        </div>
      </div>
      <IntroudeContainer />
    </section>
  )
}
