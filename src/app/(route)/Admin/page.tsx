'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import DashboardContainer from '@/app/components/admin/containers/DashboardContainer'
import Header from '@/app/components/layout/Header'

export default function AdminPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[980px]">
        <AdminNavContainer selected={'dashboard'} />
        <div className="flex-grow">
          <DashboardContainer />
        </div>
      </div>
    </section>
  )
}
