'use client'
import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import ModelContainer from '@/app/components/admin/containers/ModelContainer'
import Header from '@/app/components/layout/Header'

const page = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[980px]">
        <AdminNavContainer selected={'model'} />
        <div className="flex-grow">
          <ModelContainer />
        </div>
      </div>
    </section>
  )
}

export default page
