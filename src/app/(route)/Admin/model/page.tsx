import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import ModelContainer from '@/app/components/admin/containers/ModelContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'

const page = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[auto]">
        <AdminNavContainer selected={'model'} />
        <div className="flex-grow">
          <ModelContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default page
