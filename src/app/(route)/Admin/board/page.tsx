import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import BoardContainer from '@/app/components/admin/containers/BoardContainer'
import Header from '@/app/components/layout/Header'

const boardPage = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[auto]">
        <AdminNavContainer selected={'board'} />
        <div className="flex-grow">
          <BoardContainer />
        </div>
      </div>
    </section>
  )
}

export default boardPage
