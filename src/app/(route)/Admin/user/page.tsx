import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import UserContainer from '@/app/components/admin/containers/UserContainer'
import Header from '@/app/components/layout/Header'

const userPage = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[980px]">
        <AdminNavContainer selected={'dashboard'} />
        <div className="flex-grow">
          <UserContainer />
        </div>
      </div>
    </section>
  )
}

export default userPage
