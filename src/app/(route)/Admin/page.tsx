'use client'

import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import Header from '@/app/components/layout/Header'

export default function AdminPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <AdminNavContainer selected={'dashboard'} />
      <div className="w-[1440px] flex mb-10"></div>
    </section>
  )
}
