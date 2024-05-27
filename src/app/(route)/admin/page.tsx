'use client'
import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import DashboardContainer from '@/app/components/admin/containers/DashboardContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'

export default function AdminPage() {
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header isAdmin={true} />
      <div className="flex w-[full] mb-[200px]">
        <AdminNavContainer selected={'dashboard'} />
        <div className="flex-grow">
          <DashboardContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}
