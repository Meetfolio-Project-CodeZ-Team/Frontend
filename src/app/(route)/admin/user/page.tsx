import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import UserContainer from '@/app/components/admin/containers/UserContainer'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'

const userPage = () => {
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[auto]">
        <AdminNavContainer selected={'user'} />
        <div className="flex-grow">
          <UserContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default userPage
