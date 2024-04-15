'use client'
import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import Header from '@/app/components/layout/Header'

const page = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[980px] gap-10">
        <AdminNavContainer selected={'dashboard'} />
      </div>
    </section>
  )
}

export default page
