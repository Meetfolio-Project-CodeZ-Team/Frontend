'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import Header from '@/app/components/layout/Header'

export default function AdminPage() {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <Header isAdmin={true} />
      <div className="w-[1440px] flex mb-10">
        <AdminNavContainer />
      </div>
    </section>
  )
}
