import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import BoardContainer from '@/app/components/admin/containers/BoardContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { userState } from '@/app/recoil/signUp'

const boardPage = () => {

  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[auto] mt-8">
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
