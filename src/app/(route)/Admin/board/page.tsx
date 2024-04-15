import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer'
import BoardContainer from '@/app/components/admin/containers/BoardContainer'
import Header from '@/app/components/layout/Header'
import React from 'react'

const boardPage = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[980px]">
        <AdminNavContainer selected={'dashboard'} />
        <div className="flex-grow">
          <BoardContainer />
        </div>
      </div>
    </section>
  )
}

export default boardPage
