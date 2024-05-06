import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import BoardContainer from '@/app/components/admin/containers/BoardContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'

const boardPage = () => {
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header isAdmin={true} />
      <div className="flex w-[full] mb-[132px]">
        <AdminNavContainer selected={'board'} />
        <div className="flex-grow">
          <BoardContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default boardPage
