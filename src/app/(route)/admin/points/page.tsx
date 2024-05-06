import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import PointsContainer from '@/app/components/admin/containers/PointsContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'

const pointPage = () => {
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header isAdmin={true} />
      <div className="flex w-[full] mb-[108px]">
        <AdminNavContainer selected={'points'} />
        <div className="flex-grow">
          <PointsContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default pointPage
